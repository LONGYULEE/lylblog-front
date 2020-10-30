<template>
    <div class="article-content" v-cloak>
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="18">
                <div class="layout-left">
                    <div v-show="skeletonFlag">
                        <my-article-content ref="article" @getMenus="getArticleMenus"></my-article-content>
                    </div>
                    <div v-show="!skeletonFlag" class="skeletonDiv">
                        <a-skeleton active :paragraph="{ rows: 12 }"></a-skeleton>
                    </div>
                    <a-back-top />
                </div>
            </a-col>
            <a-col :xs="0" :sm="0" :md="0" :lg="4">
                <div class="layout-right">
                    <my-anchor></my-anchor>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import MyArticleContent from '@/components/views/article/MyArticleContent'
import MyAnchor from '@/components/views/anchor'
export default {
    data() {
        return {
            article: {},
            skeletonFlag: false
        }
    },
    components: {
        'my-article-content': MyArticleContent,
        'my-anchor': MyAnchor
    },
    methods: {
        getArticleMenus(data) {
            this.$nextTick(() => {
                this.skeletonFlag = data;
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../common/less/theme.less';
.article-content {
    width: auto;

    @media only screen and (max-width: 768px) {
        margin: -25px 0px 10px 0px;
    }

    @media screen and (min-width: 768px) {
        margin: 10px 10px 20px 10px;
    }

    @media screen and (min-width: 992px) {
        margin: 15px 35px 50px 35px;
    }

    @media only screen and (max-width: 992px) {
        border-bottom: 1px dashed #e5e5e5;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        margin: 15px auto 0;
    }

    .layout-left,
    .layout-right {
        padding: 0;
        margin-bottom: 15px;

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
            padding: 0 10px;
        }

        /deep/ .ant-anchor-link-title-active {
            color: @color-main-primary;
        }

        /deep/ .ant-anchor-ink-ball {
            // position: absolute;
            // left: 50%;
            // display: none;
            // width:8px;
            // height: 8px;
            // background-color: #fff;
            // border: 2
            border: 2px solid @color-main-primary;
        }

        .skeletonDiv {
            background-color: #fff;
            padding: 30px;
            border-radius: 5px;
            height: calc(100vh - 127px);
        }
    }
}
</style>
