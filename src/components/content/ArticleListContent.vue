<template>
    <div class="article-list-content">
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="17">
                <div class="layout-left">
                    <article-list-header v-if="categoryList.length>0" @filterByMenu="filterByMenu"
                        @filterByCategory="filterByCategory" :categorys="categoryList"
                        :defaultCategory="selected_category" :mainTitle="'CATEGORIES'" :sub-title="'文章分类'">
                    </article-list-header>
                    <div v-if="skeletonFlag">
                        <article-list-cell v-for="article in articleList" :article="article" :key="article.id">
                        </article-list-cell>
                    </div>
                    <div v-if="!skeletonFlag">
                        <div v-for="item in 5" :key="item" class="skeDiv">
                            <a-skeleton active>
                            </a-skeleton>
                        </div>
                    </div>
                    <browse-more @browseMore="browseMore" :noMoreData="noMoreData" ref="browseMore"></browse-more>
                </div>
            </a-col>
            <a-col :xs="0" :sm="0" :md="0" :lg="7">
                <a-anchor :offsetTop="100" :bounds="0">
                    <div class="layout-right">
                        <recommend></recommend>
                        <tag-wall style="margin-top: 15px;"></tag-wall>
                    </div>
                </a-anchor>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import ArticleListHeader from "@/components/views/Article/ArticleListHeader";
// import ArticlePageContent from "@/components/views/Article/ArticlePageContent";
// import ArticlePageFooter from "@/components/views/Article/ArticlePageFooter";
import ArticleListCell from "@/components/views/Article/ArticleListCell";
import Recommend from "@/components/views/Recommend";
import TagWall from "@/components/views/tag/TagWall";
import BrowseMore from "@/components/views/BrowseMore";
import merge from "lodash/merge";
import { treeDataTranslate } from "@/util";
export default {
    data() {
        return {
            articleList: [],
            categoryList: [],
            selected_category: '',
            currentPage: 1,
            pageSize: 5,
            categoryId: '',
            menuParams: {
                latest: true
            },
            noMoreData: false,
            skeletonFlag: false
        };
    },
    created() {
        this.listArticle();
        this.listCategory();
    },
    methods: {
        listArticle() {
            let params = {
                categoryId: this.categoryId,
                size: this.pageSize,
                page: this.currentPage
            };
            params = merge(params, this.menuParams);
            this.$http({
                url: this.$http.adornUrl("/articles"),
                params: this.$http.adornParams(params),
                method: "get"
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    if (data.data.totalPage <= data.data.currPage) {
                        this.noMoreData = true;
                    } else {
                        this.noMoreData = false;
                    }
                    this.articleList = data.data.list;
                    this.skeletonFlag = true;
                }
            });
        },
        listCategory() {
            let params = {};
            params.type = 0;
            this.$http({
                url: this.$http.adornUrl("/operation/categories"),
                method: "get",
                params: this.$http.adornParams(params)
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    // console.log(data.data);
                    this.categoryList = treeDataTranslate(data.data);
                }
            });
        },
        filterByMenu(params) {
            this.resetCurrentPage();
            this.menuParams = params;
            this.listArticle();
        },
        filterByCategory(params) {
            this.resetCurrentPage();
            this.categoryId = params;
            this.listArticle();
        },
        resetCurrentPage() {
            this.currentPage = 1;
        },
        browseMore() {
            this.currentPage++;
            let params = {
                categoryId: this.categoryId,
                size: this.pageSize,
                page: this.currentPage
            };
            params = merge(params, this.menuParams);
            this.$http({
                url: this.$http.adornUrl("/articles"),
                params: this.$http.adornParams(params),
                method: "get"
            })
                .then(({ data }) => {
                    if (data && data.code === 2000) {
                        if (data.data.totalPage <= data.data.currPage) {
                            this.noMoreData = true;
                        } else {
                            this.noMoreData = false;
                        }
                        this.articleList = this.articleList.concat(
                            data.data.list
                        );
                    }
                })
                .then(response => {
                    this.$refs.browseMore.stopLoading();
                })
                .catch(error => {
                    this.$refs.browseMore.stopLoading();
                    console.log(error);
                });
        }
    },
    components: {
        "article-list-header": ArticleListHeader,
        // "article-page-content": ArticlePageContent,
        // "article-page-footer": ArticlePageFooter,
        "article-list-cell": ArticleListCell,
        recommend: Recommend,
        "tag-wall": TagWall,
        "browse-more": BrowseMore
    },
    watch: {
        $route() {
            //监听路由变化，更新数据，避免路由参数变化组件不刷新
            this.selected_category = this.$route.query.categoryId;
            this.categoryId = this.$route.query.categoryId;
            this.listArticle();
        }
    }
};
</script>

<style lang="less" >
@import '../../common/less/index.less';
.article-list-content {
    width: auto;
    min-height: 75vh;

    @media only screen and (max-width: 768px) {
        margin: 5px 5px 10px 5px;
    }

    @media screen and (min-width: 768px) {
        margin: 10px 10px 20px 10px;
    }

    @media screen and (min-width: 992px) {
        margin: 15px 35px 50px 35px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        margin: 0px auto 0;
        margin-bottom: 15px;
    }

    .layout-left,
    .layout-right {
        padding: 0;
        min-height: 500px;

        @media only screen and (max-width: 768px) {
            padding: 0;
        }

        @media screen and (min-width: 768px) {
            padding: 0;
        }

        @media screen and (min-width: 992px) {
            padding: 0 10px;
        }

        @media screen and (min-width: 1200px) {
            padding: 0 0 0 50px;
        }

        .skeDiv {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: @default-border-radius;
            background-color: @default-background-color;
            @media only screen and (max-width: 768px) {
                margin-bottom: 3px;
            }

            @media only screen and (max-width: 992px) {
                border-bottom: 1px dashed #e5e5e5;
            }

            &:hover {
                transform: rotate(0deg) scale(1) translate(0%, 0%);
                transition: all 0.3s ease;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px;
            }
        }
    }
    .ant-anchor-wrapper {
        padding-left: 0;
        background-color: inherit;
        .ant-anchor-ink::before {
            content: none;
        }
    }
}
</style>
