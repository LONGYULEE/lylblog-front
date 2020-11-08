<template>
    <div>
        <ul id="menu" class="mfb-component--br mfb-slidein-spring" data-mfb-toggle="hover">
            <li class="mfb-component__wrap">
                <a class="mfb-component__button--main">
                    <i class="mfb-component__main-icon--resting ion-plus-round">
                        <a-icon type="plus" />
                    </i>
                    <i class="mfb-component__main-icon--active ion-close-round">
                        <a-icon type="close" />
                    </i>
                </a>
                <ul class="mfb-component__list">

                    <li v-if="topShow">
                        <a @click.prevent="backTop(16)" data-mfb-label="Top" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-social-octocat">
                                <a-icon type="up" />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-mfb-label="Github" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon ion-social-github">
                                <a-icon type="github" />
                            </i>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topShow: false
        }
    },
    methods: {
        backTop(rate) {
            //获取当前页面滚动条纵坐标位置
            var doc = document.body.scrollTop ? document.body : document.documentElement; //判断 兼容处理
            var scrollTop = doc.scrollTop;

            var top = function () {
                scrollTop = scrollTop + (0 - scrollTop) / (rate / 2); //核心代码

                //临界判断，终止动画
                if (scrollTop <= 1) {
                    doc.scrollTop = 0;
                    return;
                }

                doc.scrollTop = scrollTop;

                //动画 gogogo
                requestAnimationFrame(top);
            };

            top();

            setTimeout(() => {
                document.getElementById('header').setAttribute('class', 'isTop');
                document.getElementById('header').removeAttribute('class', 'noTop')
            }, 800)
        },
        handleScroll() {
            var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (top > 500) {
                this.topShow = true;
            } else {
                this.topShow = false;
            }
        }
    },
    mounted() {//给window添加一个滚动滚动监听事件
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>

<style>
@import '../../common/less/mfb.css';
</style>