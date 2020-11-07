<template>
    <div class="home-content">
        <a-row>

            <a-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
                <div class="layout-left">
                    <!-- <section-title :mainTitle="'文章'" :subTitle="'Articles'" :tipText="'View More'"
                        :tipHref="'/articles'">
                        <title-menu-filter @filterByMenu="refreshArticle" slot="menu"
                            :menu-filter-list="defaultFilterList">
                        </title-menu-filter>
                    </section-title> -->
                    <div v-if="skeletonFlag">
                        <article-list-cell v-for="(article,index) in articleList" :article="article" :key="article.id"
                            :flag="(index+1) == articleList.length" :type="'article'">
                        </article-list-cell>
                        <a-pagination :total="pageInfo.totalCount" v-model="pageInfo.page" :pageSize="5"
                            :hideOnSinglePage="true" @change="pagechange" />
                    </div>
                    <div v-if="!skeletonFlag">
                        <div v-for="item in 7" :key="item" class="skeDiv">
                            <a-skeleton active>
                            </a-skeleton>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="0" :sm="0" :md="0" :lg="7" :xl="7">
                <div class="layout-right">
                    <about></about>
                    <recommend style="margin-top:15px"></recommend>
                    <hot-read style="margin-top:15px"></hot-read>
                    <!--<friend-links style="margin-top:15px;"></friend-links> -->
                    <tag-wall style="margin-top: 15px;"></tag-wall>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import ArticleListCell from "@/components/views/Article/ArticleListCell";
import SectionTitle from "@/components/views/Section/SectionTitle";
import TitleMenuFilter from "@/components/views/Section/TitleMenuFilter";
// import ArticlePageContent from "@/components/views/Article/ArticlePageContent";
// import ArchiveListTimeTitle from "@/components/views/Archive/ArchiveListTimeTitle";
// import ArchiveListCell from "@/components/views/Archive/ArchiveListCell";
import About from "@/components/views/About";
// import FriendLinks from "@/components/views/FriendLinks";
import TagWall from "@/components/views/tag/TagWall";
import Recommend from "@/components/views/Recommend";
import HotRead from "@/components/views/HotRead";
import merge from "lodash/merge"; // 合并对象工具
import { DefaultFilterList, DefaultLimitSize } from "@/common/js/const";
export default {
    data() {
        return {
            articleList: [],
            defaultFilterList: DefaultFilterList,
            pageParam: {
                page: 1,
                size: DefaultLimitSize
            },
            skeletonFlag: false,
            pageInfo: {
                page: 0,
                totalCount: 0,
                currPage: 0,
                size: DefaultLimitSize,
                latest: true
            }
        };
    },
    components: {
        "article-list-cell": ArticleListCell,
        "section-title": SectionTitle,
        "title-menu-filter": TitleMenuFilter,
        // "article-page-content": ArticlePageContent,
        // "archive-list-time-title": ArchiveListTimeTitle,
        // "archive-list-cell": ArchiveListCell,
        about: About,
        // "friend-links": FriendLinks,
        "tag-wall": TagWall,
        recommend: Recommend,
        "hot-read": HotRead
    },
    created: function () {
        let param = {};
        param.latest = true;
        this.refreshArticle(param);
    },
    methods: {
        refreshArticle(param) {
            let params = merge(param, this.pageInfo);
            this.$http({
                url: this.$http.adornUrl("/articles"),
                params: this.$http.adornParams(params, false),
                method: "get"
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    this.articleList = data.data.list;
                    this.skeletonFlag = true;
                    this.pageInfo.totalCount = data.data.totalCount
                    this.pageInfo.page = data.data.currPage
                    this.toTop();
                }
            });
        },
        browseMore() {

        },
        pagechange(page, pageSize) {
            this.refreshArticle(page);

        },
        toTop() {
            document.body.scrollIntoView();
            setTimeout(() => {
                document.getElementById('header').setAttribute('class', 'isTop');
                document.getElementById('header').removeAttribute('class', 'noTop')
            }, 500);

        }
    }
};
</script>

<style scope lang="less">
@import '../../common/less/index.less';
@import '../../common/less/common.less';
@import '../../common/less/zhanwei.less';
.home-content {
    width: auto;
}
@media only screen and (max-width: 768px) {
    .home-content {
        margin: -5px 3px 10px 3px;
    }
}
@media screen and (min-width: 768px) {
    .home-content {
        margin: 10px 10px 20px 10px;
    }
}
@media screen and (min-width: 992px) {
    .home-content {
        margin: 15px 35px 50px 35px;
    }

    .home-content .layout-left,
    .home-content .layout-right {
        margin: 0 10px;
    }
}
@media screen and (min-width: 1200px) {
    .home-content {
        width: 1200px;
        margin: 0px auto 0;
    }

    .home-content .layout-left,
    .home-content .layout-right {
        margin: 0 0px 0px 50px;
    }
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
</style>
