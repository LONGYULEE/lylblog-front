<template>
    <div class="article-content" v-cloak>
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="18">
                <div class="layout-left">
                    <my-article-content ref="article" @getMenus="getArticleMenus"></my-article-content>
                    <a-back-top />
                </div>
            </a-col>
            <a-col :xs="0" :sm="0" :md="0" :lg="6">
                <div class="layout-right">
                    <a-anchor :wrapperStyle="myStyle" :offsetTop="80" :showInkInFixed="true">
                        <a-anchor-link v-for="item in menus" v-bind:key="item.href" :href="item.href"
                            :title="item.title">
                            <a-anchor-link v-for="item01 in item.children" v-bind:key="item01.href" :href="item01.href"
                                :title="item01.title" />
                        </a-anchor-link>
                    </a-anchor>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import MyArticleContent from '@/components/views/article/MyArticleContent'

export default {
    data() {
        return {
            article: {},
            myStyle: {
                'background-color': 'inherit',
                'min-width': '250px'
            },
            menus: []
        }
    },
    components: {
        'my-article-content': MyArticleContent
    },
    created: function () {
    },
    methods: {
        getArticleMenus(data) {
            this.menus = data;
        }
    },
    mounted() {

    },


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

    @media screen and (min-width: 1200px) {
        width: 1200px;
        margin: 15px auto 0;
    }

    .layout-left,
    .layout-right {
        padding: 0;

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
    }
}
</style>
