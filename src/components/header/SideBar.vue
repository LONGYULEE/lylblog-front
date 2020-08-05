<template>
    <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }">
        <div class="main-area">
            <div class="top-wrapper" @touchmove.stop>
                <div class="top-area">
                    <img src="http://img.lylblog.xyz/AK-02.jpg" alt="">
                    <div class="site-info">
                        <h1 class="site-name">寒露</h1>
                        <h1 class="site-desc">南波湾</h1>
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
                            <a-icon type="plus" class="sideIcon" />&nbsp;
                            <a class="nav-link"
                                :href="'/articles/category/'+category_level1.id">{{category_level1.name}}<span
                                    class="arrow"></span>
                            </a>
                            <ul class="nav-dropdown">
                                <li v-for="category_level2 in category_level1.children" :key="category_level2.id">
                                    <a-icon type="minus" class="sideIcon" />&nbsp;
                                    <a class="nav-link"
                                        :href="'/articles/category/'+category_level2.id">{{ category_level2.name}}</a>
                                    <ul class="nav-dropdown">
                                        <li v-for="category_level3 in category_level2.children"
                                            :key="category_level3.id">
                                            <a-icon type="dash" class="sideIcon" />&nbsp;
                                            <a class="nav-link"
                                                :href="'/articles/category/'+category_level3.id">{{ category_level3.name }}</a>
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
