<template>
    <div class="article-cell">
        <a>
            <a-row type="flex">
                <a-col :xs="24" :sm="24" :md="textSpan" :lg="textSpan" :order="textOrderType"
                    style="padding-left: 0;padding-right: 0;">
                    <div class="text-wrapper">
                        <h4 class="title">
                            <router-link :to="'/article/'+article.id">{{article.title}}</router-link>
                            <span class="special" v-if="article.top>0" title="置顶">置顶</span>
                        </h4>
                        <div class="tags">
                            <a-tag :color="tag.id | mapTagColor" :key="tag.id" type="border"
                                v-for="(tag) in article.tagList">
                                {{tag.name}}</a-tag>
                        </div>
                        <p class="desc">{{article.description | filterHtml | textLineBreak(70) }}<router-link
                                :to="'/article/'+article.id"> 查看更多
                                <a-icon type="caret-right" />
                            </router-link>
                        </p>
                        <p class="operate_info" :style="myStyle">
                            <span class="publish-time">At time / <a>{{article.createTime | socialDate}}</a></span>
                            <span class="readings"><a>
                                    <a-icon type="eye" /> {{article.readNum}} 阅读
                                </a></span>
                            <span class="likes"><a @click="likePost(article)">
                                    <a-icon type="heart" /> {{article.likeNum}} 喜欢
                                </a></span>
                        </p>
                    </div>
                </a-col>
                <a-col :xs="0" :sm="0" :md="imgSpan" :lg="imgSpan" :order="imgOrderType"
                    style="padding-left: 0px;padding-right: 0px">
                    <div class="img-wrapper" :class="themeClass">
                        <img :src="article.cover" alt="">
                    </div>
                </a-col>
            </a-row>
        </a>
    </div>
</template>

<script>
import { mixin } from "@/util";
const ARTICLE_TYPE_BIG_IMAGE = 1;
const ARTICLE_TYPE_NO_IMAGE = 2;

export default {
    props: {
        article: {
            Type: Object
        },
        type: ""
    },
    mixins: [mixin],
    computed: {
        textOrderType: function () {
            return this.article.coverType === ARTICLE_TYPE_BIG_IMAGE ? 2 : 1;
        },
        imgOrderType: function () {
            return this.article.coverType === ARTICLE_TYPE_BIG_IMAGE ? 1 : 2;
        },
        textSpan: function () {
            if (this.article.coverType === ARTICLE_TYPE_BIG_IMAGE) {
                return 24;
            } else if (this.article.coverType === ARTICLE_TYPE_NO_IMAGE) {
                return 24;
            } else {
                return 17;
            }
        },
        imgSpan: function () {
            if (this.article.coverType === ARTICLE_TYPE_BIG_IMAGE) {
                return 24;
            } else if (this.article.coverType === ARTICLE_TYPE_NO_IMAGE) {
                return 0;
            } else {
                return 7;
            }
        },
        themeClass: function () {
            if (this.article.coverType === ARTICLE_TYPE_BIG_IMAGE) {
                return "big-image";
            } else {
                return "";
            }
        },
        myStyle: function () {
            if (this.article.coverType === ARTICLE_TYPE_BIG_IMAGE) {
                return '';
            } else if (this.article.coverType === ARTICLE_TYPE_NO_IMAGE) {
                return '';
            } else {
                return {
                    'position': 'absolute',
                    'bottom': '0'
                };
            }
        }
    },
    methods: {
        likePost(post) {
            this.$http({
                url: this.$http.adornUrl("/article/like/" + post.id),
                method: "put",
                data: this.$http.adornData()
            })
                .then(({ data }) => {
                    if (data && data.code === 2000) {
                        post.likeNum += 1;
                        this.$message.success("点赞成功");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style lang="less" scoped>
@import '../../../common/less/index.less';

.article-cell {
    margin-bottom: 10px;
    border-radius: @default-border-radius;
    background-color: @default-background-image;
    @media only screen and (max-width: 768px) {
        margin-bottom: 3px;
    }

    @media only screen and (max-width: 992px) {
        border-bottom: 1px dashed #e5e5e5;
    }

    > a {
        border-radius: @default-border-radius;
        display: block;
        cursor: default;
        // border-bottom: 1px solid @color-border;

        &:hover {
            transform: rotate(0deg) scale(1) translate(0%, 0%);
            transition: all 0.3s ease;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px;
        }

        .text-wrapper {
            padding: 20px 20px 0 20px;
            text-align: left;
            min-height: 114px;

            @media only screen and (max-width: 768px) {
                padding: 15px 15px 0 15px;
                min-height: 110px;
            }

            .title {
                font-size: 23px;
                font-weight: 100;
                line-height: 27px;

                span.special {
                    border-radius: @border-radius;
                    font-size: 12px;
                    font-weight: 100;
                    padding: 3px 5px;
                    margin-left: 1px;
                    vertical-align: top;
                    color: white;
                    background: #83c695;
                    cursor: pointer;
                }

                a {
                    color: @color-typegraphy-title;
                    cursor: pointer;

                    &:hover {
                        color: @color-typegraphy-title-hover;
                        text-decoration: underline;
                    }
                }
            }

            .info {
                margin-top: 10px;
                font-size: 14px;
                line-height: 18px;
                font-weight: 200;

                a {
                    color: #777;
                    cursor: pointer;

                    &:hover {
                        color: @color-main-primary;
                        text-decoration: underline;
                    }
                }

                .publish-time {
                    margin-left: 20px;
                }
            }

            .line {
                width: 50px;
                margin-top: 30px;
                .border-1px(rgba(7, 17, 27, 0.4));

                &::after {
                    margin-bottom: 15px;
                }
            }

            .tags {
                /* cursor: pointer; */
                margin: 8px 0;
            }

            .desc {
                color: #666;
                font-size: 14px;
                line-height: 20px;
                font-weight: 200;

                a {
                    color: @color-main-primary;
                    font-weight: 500;
                    cursor: pointer;
                    white-space: nowrap;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .operate_info {
                font-size: 14px;
                margin: 15px 0 10px;
                // position: absolute;
                // bottom: 0px;

                span {
                    margin-right: 8px;

                    + span {
                        margin-left: 8px;
                    }

                    a {
                        cursor: pointer;

                        &:hover {
                            color: @color-main-primary;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        .img-wrapper {
            padding-bottom: 85%;
            width: 100%;
            height: 0;
            overflow: hidden;
            border-radius: @border-radius;

            &.big-image {
                padding-bottom: 26%;
            }

            img {
                width: 100%;
                border-top-right-radius: 7px;
            }
        }
    }
}
</style>
