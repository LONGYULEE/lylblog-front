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
                    <div class="site-nav">
                        <p>
                            <a-icon type="appstore" />
                            文章分类
                        </p>
                    </div>
                    <ul class="nav-menu">
                        <!-- 类别导航 -->
                        <li class="nav-dropdown-container" v-for="category_level1 in articleCategoryList"
                            :key="category_level1.id">
                            &nbsp;
                            <router-link class="nav-link" :to="{path:'articles',query:{categoryId:category_level1.id}}">
                                {{category_level1.name}}<span class="arrow"></span>
                            </router-link>
                            <ul class="nav-dropdown">
                                <li v-for="category_level2 in category_level1.children" :key="category_level2.id">
                                    &nbsp;
                                    <router-link class="nav-link"
                                        :to="{path:'articles',query:{categoryId:category_level2.id}}">
                                        {{ category_level2.name}}</router-link>
                                    <ul class="nav-dropdown">
                                        <li v-for="category_level3 in category_level2.children"
                                            :key="category_level3.id">
                                            &nbsp;
                                            <router-link class="nav-link"
                                                :to="{path:'articles',query:{categoryId:category_level3.id}}">
                                                {{ category_level3.name }}</router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="sidebar-toc-list" ref="list">
                        <div class="site-nav">
                            <p>
                                <a-icon type="menu" />
                                文章目录
                            </p>
                        </div>
                        <div id="sidebar-toc" class="list" @click.prevent></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mask" @click.prevent="toggleSideBar"></div>
    </div>
</template>

<script>
import { mixin } from "@/util";

export default {
    name: "side-bar",
    data() {
        return {
            show: false,
            showNav: false
        };
    },
    props: {
        articleCategoryList: Array
    },
    mixins: [mixin],
    beforeRouteUpdate(to, from, next) {
        next();
    },
    methods: {
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
    }
};
</script>

<style lang="less" scope>
@import './css/sidebar.less';
</style>
