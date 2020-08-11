<template>
    <div class="simple-header">
        <transition name="slide-fade">
            <div id="mobile-bar" v-show="show">
                <a class="menu-button" ref="menubutton"></a>
                <router-link to="/timeline">
                    <TimeIcon class="mobile-time-class"></TimeIcon>
                </router-link>
                <router-link to="/showme">
                    <InfoIcon class="mobile-info-class"></InfoIcon>
                </router-link>
                <div style="position: absolute;right: 54px;height: 20px;width: 2px;background: #f0f0f0;top: 20px;">
                </div>
                <router-link to="/">
                    <PandaIcon class="mobile-icon-class"></PandaIcon>
                </router-link>
            </div>
        </transition>
        <transition name="slide-fade">
            <div id="header" v-show="show">
                <router-link id="logo" to="/">
                    <!-- <img src="../../assets/logo.png" /> -->
                    <PandaIcon class="icon-class"></PandaIcon>
                </router-link>
                <span class="title">寒露</span>
                <span class="motto">FIGHTING</span>

                <ul id="nav">
                    <li>
                        <form id="search-form" action="/articles/search">
                            <span class="algolia-autocomplete"
                                style="position: relative; display: inline-block; direction: ltr;">
                                <input type="text" id="search-query-nav"
                                    class="search-query st-default-search-input aa-input" name="keywords"
                                    v-model="keywords" @keyup.enter="submit" autocomplete="off" spellcheck="false"
                                    role="combobox" aria-autocomplete="list" aria-expanded="false"
                                    aria-owns="algolia-autocomplete-listbox-0" dir="auto"
                                    style="position: relative; vertical-align: top;" />
                                <pre aria-hidden="true"
                                    style="position: absolute; visibility: hidden; white-space: pre; font-family: system-ui; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                                <span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0"
                                    style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;">
                                    <div class="aa-dataset-1"></div>
                                </span></span>
                        </form>
                    </li>

                    <li>
                        <router-link to="/articles" class="nav-link contribute">文章</router-link>
                    </li>
                    <li>
                        <router-link to="/timeline" class="nav-link contribute">时间线</router-link>
                    </li>
                    <li>
                        <router-link to="/showme" class="nav-link contribute">关于</router-link>
                    </li>
                </ul>
            </div>
        </transition>
        <sidebar ref="sidebar" :articleCategoryList="articleCategoryList">
        </sidebar>
    </div>
</template>

<script>
import SideBar from '@/components/header/SideBar';
import PandaIcon from '@/components/utils/PandaIcon';
import InfoIcon from '@/components/utils/InfoIcon';
import TimeIcon from '@/components/utils/TimeIcon';
import { treeDataTranslate } from '@/util';
export default {
    components: {
        sidebar: SideBar,
        PandaIcon: PandaIcon,
        InfoIcon: InfoIcon,
        TimeIcon: TimeIcon
    },
    data() {
        return {
            show: true,
            articleCategoryList: [],
            keywords: ''
        };
    },
    created() {
        this.listCategory();
        this.keywords = this.$route.query.keywords;
    },
    mounted: function () {
        this.$nextTick(function () {
            this.initMobileMenu();
        });
        // 给页面绑定滑轮滚动事件
        // if (document.addEventListener) {
        //     // firefox
        //     document.addEventListener(
        //         'DOMMouseScroll',
        //         this.watchScroll,
        //         false
        //     );
        // }
        // // 滚动滑轮触发scrollFunc方法  //ie 谷歌
        // window.onmousewheel = document.onmousewheel = this.watchScroll;
    },
    methods: {
        initMobileMenu() {
            // 显示手机端的菜单
            var sidebar = this.$refs.sidebar;
            this.$refs.menubutton.addEventListener('click', function () {
                sidebar.toggleSideBar();
            });
        },
        watchScroll(e) {
            e = e || window.event;
            if (e.wheelDelta) {
                if (e.wheelDelta > 0 && this.show === false) {
                    // 当滑轮向上滚动
                    this.show = true;
                }
                if (e.wheelDelta < 0 && this.show === true) {
                    // 当滑轮向下滚动
                    this.show = false;
                }
            } else if (e.detail) {
                if (e.detail < 0 && this.show === false) {
                    // 当滑轮向上滚动
                    this.show = true;
                }
                if (e.detail > 0 && this.show === true) {
                    // 当滑轮向下滚动
                    this.show = false;
                }
            }
        },
        listCategory() {
            this.$http({
                url: this.$http.adornUrl('/operation/categories'),
                method: 'get',
                params: this.$http.adornParams()
            }).then(({ data }) => {
                if (data && data.code === 2000) {
                    data.data.forEach(category => {
                        if (category.type === 0) {
                            this.articleCategoryList.push(category);
                        }
                    });
                    this.articleCategoryList = treeDataTranslate(
                        this.articleCategoryList
                    );
                }
            });
        }
    }
};
</script>

<style lang="less">
@import './css/header.less';
</style>
