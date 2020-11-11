<template>
    <!-- <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }"> -->
    <div>
        <a-drawer placement="left" width="290" :closable="false" :visible="visible" :headerStyle="headerStyle"
            @close="onClose">
            <div class="main-area">
                <div class="top-wrapper" @touchmove.stop>
                    <div class="top-area">
                        <img src="http://img.lylblog.xyz/006yt1Omgy1gfwu9s7amaj31kw0vab2a.jpg" alt="">
                        <div class="site-info">
                            <h1 class="site-name">寒露</h1>
                        </div>
                    </div>
                    <div class="sidebar-menus">
                        <ul>
                            <li>
                                <router-link to="/articles">Categoies</router-link>
                            </li>
                            <li>
                                <router-link to="/timeline">Timeline</router-link>
                            </li>
                            <li>
                                <router-link to="/showme">About</router-link>
                            </li>
                        </ul>
                        <hr>
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
            defaultActiveKey: '1',
            visible: true
        };
    },
    components: {
        'my-anchor': MyAnchor
    },
    props: {
        articleCategoryList: Array,
        // visible: { type: Boolean, default: false }
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
</style>
