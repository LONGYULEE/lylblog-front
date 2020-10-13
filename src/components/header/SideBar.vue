<template>
    <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }">
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
                    <div class="site-nav" @click="showOrHide('1')">
                        <p>
                            <a-icon type="appstore" />
                            文章分类
                        </p>
                    </div>
                    <transition name="category-fade">
                        <ul class="nav-menu" v-if="categoryShow">
                            <!-- 类别导航 -->
                            <li class="nav-dropdown-container" v-for="category_level1 in articleCategoryList"
                                :key="category_level1.id">
                                &nbsp;
                                <router-link class="nav-link" @click.native="getClose"
                                    :to="{name:'categroies',query:{categoryId:category_level1.id}}">
                                    {{category_level1.name}}<span class="arrow"></span>
                                </router-link>
                                <ul class="nav-dropdown">
                                    <li v-for="category_level2 in category_level1.children" :key="category_level2.id">
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
                    </transition>
                    <div class="sidebar-toc-list" ref="list">
                        <div class="site-nav" @click="showOrHide('2')">
                            <p>
                                <a-icon type="menu" />
                                文章目录
                            </p>
                        </div>
                        <!-- <div id="sidebar-toc" class="list" @click.prevent></div> -->
                        <transition name="menus-fade">
                            <div class="anchorDiv" v-if="menusShow">
                                <my-anchor @getClose="getClose"></my-anchor>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <div class="mask" @click.prevent="toggleSideBar"></div>
    </div>
</template>

<script>
import { mixin } from "@/util";
import MyAnchor from '@/components/views/anchor'
export default {
    name: "side-bar",
    data() {
        return {
            show: false,
            showNav: false,
            categoryShow: true,
            menusShow: false
        };
    },
    components: {
        'my-anchor': MyAnchor
    },
    props: {
        articleCategoryList: Array
    },
    mixins: [mixin],
    beforeRouteUpdate(to, from, next) {
        next();
    },
    methods: {
        //控制目录和分类显示隐藏
        showOrHide(type) {
            //1为分类，2位目录
            if (type == '1') {
                this.categoryShow = !this.categoryShow;
                this.menusShow = !this.menusShow;
            } else {
                this.menusShow = !this.menusShow;
                this.categoryShow = !this.categoryShow;
            }
        },
        getClose(data) {
            setTimeout(() => {
                this.show = false;
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
        toggleSideBar() {
            this.show = !this.show;
            this.showNav = !(
                this.$route.name === "article" ||
                this.$route.name === "movie" ||
                this.$route.name === "album"
            );
        }
    },
    watch: {
        '$store.state.menus': {
            handler(n, o) {
                if (n.length == 0) {
                    this.categoryShow = true;
                    this.menusShow = false;
                } else {
                    this.categoryShow = false;
                    this.menusShow = true;
                }
            },
            deep: true
        }
    }
};
</script>

<style lang="less" scope>
@import './css/sidebar.less';
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
}
</style>
