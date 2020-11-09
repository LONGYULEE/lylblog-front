<template>
    <div class="simple-header">
        <transition name="slide-fade">
            <div id="mobile-bar" v-show="show">
                <a class="menu-button" ref="menubutton" @click="menubutton"></a>
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
                <router-link to="/">
                    <span class="title">寒露</span>
                </router-link>
                <!-- <span class="motto">FIGHTING</span> -->

                <ul id="nav">
                    <!-- <li>
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
                                    style="color:#fff;position: absolute; visibility: hidden; white-space: pre; font-family: system-ui; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                                <span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0"
                                    style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;">
                                    <div class="aa-dataset-1"></div>
                                </span>
                            </span>
                        </form>
                    </li> -->

                    <li>
                        <router-link to="/articles" class="nav-link contribute">CATEGORY</router-link>
                    </li>
                    <li>
                        <router-link to="/timeline" class="nav-link contribute">TIMELINE</router-link>
                    </li>
                    <li>
                        <router-link to="/showme" class="nav-link contribute">ABOUT</router-link>
                    </li>
                </ul>
            </div>
        </transition>
        <sidebar ref="sidebar" :articleCategoryList="articleCategoryList" :visible="menubuttonShow"
            @closepop="closepop">
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
            keywords: '',
            startY: '',
            endY: '',
            menubuttonShow: false
        };
    },
    created() {
        this.listCategory();
        this.keywords = this.$route.query.keywords;
    },
    mounted: function () {
        // 给页面绑定滑轮滚动事件
        if (document.addEventListener) {
            // firefox
            document.addEventListener(
                'DOMMouseScroll',
                this.watchScroll,
                false
            );
        }
        // 滚动滑轮触发scrollFunc方法  //ie 谷歌
        window.onmousewheel = document.onmousewheel = this.watchScroll;

        document.addEventListener('touchstart', this.watchTouchStart, false);
        document.addEventListener('touchend', this.watchTouchEnd, false);
    },
    methods: {
        closepop(data) { this.menubuttonShow = data },
        menubutton() {
            this.menubuttonShow = !this.menubuttonShow;
        },
        watchScroll(e) {
            e = e || window.event;
            const header = document.getElementById('header');
            if (e.wheelDelta) {
                if (e.wheelDelta > 0) {
                    // 当滑轮向上滚动
                    this.setTop();
                }
                if (e.wheelDelta < 0) {
                    // 当滑轮向下滚动
                    header.classList.add("notTop")
                    header.classList.remove("isTop")
                }
            } else if (e.detail) {
                if (e.detail < 0) {
                    // 当滑轮向上滚动
                    this.setTop();
                }
                if (e.detail > 0) {
                    // 当滑轮向下滚动
                    header.classList.add("notTop")
                    header.classList.remove("isTop")
                }
            }
            // console.log(e)
        },
        setTop() {
            setTimeout(() => {
                let scrollTop = window.pageYOffset || 0;
                if (scrollTop == 0) { //此时滚动条处于页面的顶部
                    document.getElementById('header').classList.remove("notTop");
                    document.getElementById('header').classList.add("isTop");
                }
            }, 300);
        },
        watchTouchStart(e) {
            this.startY = e.touches[0].pageY;
        },
        watchTouchEnd(e) {
            this.endY = e.changedTouches[0].pageY;
            let se = this.startY - this.endY;
            if (se > 0) {
                this.show = false;
            } else {
                this.show = true;
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
.isTop {
    animation: top 0.5s;
    animation-fill-mode: forwards;
    #nav {
        animation: test 0.5s;
        animation-fill-mode: forwards;
    }
}
@keyframes test {
    0% {
        top: 15px;
    }
    100% {
        top: 10px;
    }
}
@keyframes test01 {
    0% {
        top: 10px;
    }
    100% {
        top: 15px;
    }
}
.notTop {
    animation: noTop 0.8s;
    animation-fill-mode: forwards;
    #nav {
        animation: test01 0.5s;
        animation-fill-mode: forwards;
    }
}
@keyframes noTop {
    0% {
        background: @default-background-image;
    }
    100% {
        background: #49627e;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
        padding: 15px 60px;
    }
}

@keyframes top {
    0% {
        background: #49627e;
        padding: 15px 60px;
    }
    100% {
        background: @default-background-image;
        padding: 10px 60px;
    }
}

#search-query-nav {
    background-color: #e5e5e5;
}
</style>
