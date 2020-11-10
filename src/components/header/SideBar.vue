<template>
    <!-- <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }"> -->
    <div>
        <a-drawer placement="right" width="290" :closable="false" :visible="visible" :headerStyle="headerStyle"
            @close="onClose">
            <div class="main-area">
                <div class="top-wrapper" @touchmove.stop>
                    <div class="top-area">
                        <img src="http://img.lylblog.xyz/006yt1Omgy1gfwu9s7amaj31kw0vab2a.jpg" alt="">
                        <div class="site-info">
                            <h1 class="site-name">寒露</h1>
                            <h1 class="site-desc">FIGHTING</h1>
                        </div>
                    </div>
                    <div class="sidebar-menus">
                        <a-collapse accordion :bordered="false" :activeKey="defaultActiveKey">
                            <a-collapse-panel key="1" header="文章分类" :style="customStyle">
                                <ul class="nav-menu">
                                    <li class="nav-dropdown-container" v-for="category_level1 in articleCategoryList"
                                        :key="category_level1.id">
                                        &nbsp;
                                        <a-icon type="right-circle" style="color:rgba(white,0.7)" />
                                        <router-link class="nav-link" @click.native="getClose"
                                            :to="{name:'categroies',query:{categoryId:category_level1.id}}">
                                            {{category_level1.name}}
                                            <span class="arrow"></span>
                                        </router-link>
                                        <ul class="nav-dropdown">
                                            <li v-for="category_level2 in category_level1.children"
                                                :key="category_level2.id">
                                                &nbsp;
                                                <router-link class="nav-link" @click.native="getClose"
                                                    :to="{name:'categroies',query:{categoryId:category_level2.id}}">
                                                    {{ category_level2.name}}</router-link>
                                                <ul class="nav-dropdown">
                                                    <li v-for="category_level3 in category_level2.children"
                                                        :key="category_level3.id">
                                                        &nbsp;
                                                        <router-link class="nav-link" @click.native="getClose"
                                                            :to="{name:'categroies',query:{categoryId:category_level3.id}}">
                                                            {{ category_level3.name }}</router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </a-collapse-panel>
                            <a-collapse-panel key="2" header="文章目录" :disabled="false" :style="customStyle">
                                <div class="anchorDiv">
                                    <my-anchor :setHeight="myHeight" :affix="affix" :showInkInFixed="showInkInFixed"
                                        @getClose="getClose"></my-anchor>
                                </div>
                            </a-collapse-panel>
                        </a-collapse>
                    </div>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script>
import { mixin } from "@/util";
import MyAnchor from '@/components/views/anchor'
export default {
    name: "side-bar",
    data() {
        return {
            myHeight: 'calc(100vh - 277px)',
            headerStyle: {
                'display': 'none'
            },
            customStyle: 'border: 0;',
            affix: false,
            showInkInFixed: false,
            defaultActiveKey: '1'
        };
    },
    components: {
        'my-anchor': MyAnchor
    },
    props: {
        articleCategoryList: Array,
        visible: { type: Boolean, default: false }
    },
    mixins: [mixin],
    beforeRouteUpdate(to, from, next) {
        next();
    },
    methods: {
        getClose(data) {
            setTimeout(() => {
                this.$emit('closepop', false);
            }, 300)
        },
        rootRouterLink(category) {
            let router = {};
            router.name = category.category_type;
            return router;
        },
        routerLink(category) {
            let router = {};
            router.name = category.category_type;
            router.params = {};
            router.params["id"] = category.id;
            return router;
        },
        onClose() {
            this.$emit('closepop', false);
        }
    },
    watch: {
        '$store.state.menus': {
            handler(n, o) {
                if (n.length == 0) {
                    this.defaultActiveKey = '1';
                } else {
                    this.defaultActiveKey = '2';
                }
            },
            deep: true
        }
    }
};
</script>

<style lang="less" scope>
@import './css/sidebar.less';
.ant-collapse {
    background-color: inherit;
    .ant-collapse-item {
        .ant-collapse-header {
            color: rgba(white, 0.7);
            font-size: 16px;
        }
    }
    .ant-collapse-content {
        color: rgba(white, 0.7);
        .ant-collapse-content-box {
            padding-right: 0px;
        }
    }
}

.anchorDiv {
    margin-left: -5px;
    .ant-anchor-link-title {
        color: darkgray;
        &:active {
            color: #fa897b;
        }
    }
    .ant-anchor-link-title-active {
        color: #fa897b;
    }
    .ant-anchor-ink::before {
        content: none;
    }
}
</style>
