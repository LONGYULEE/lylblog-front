import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Index from '../components/Index';

// 公共
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

//首页
import HomeContent from '../components/content/HomeContent';
import ArticleListContent from '@/components/content/ArticleListContent';
import ArticleContent from '@/components/content/ArticleContent';
import TimeLineContent from '@/components/content/TimeLineContent';

import NotFound from '@/components/views/404';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

Vue.use(Router);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const ShowMe = () => import('@/components/views/ShowMe');

let router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            // name: 'Index',
            component: Index,
            children: [
                {
                    path: '/',
                    name: 'index',
                    components: {
                        header: Header,
                        content: HomeContent,
                        footer: Footer
                    },
                    meta: {
                        title: '寒露'
                    }
                },
                {
                    path: 'articles',
                    name: 'articles',
                    components: {
                        header: Header,
                        content: ArticleListContent,
                        footer: Footer
                    },
                    meta: {
                        title: '文章列表 - 寒露'
                    }
                },
                {
                    path: 'article/:articleId',
                    name: 'article',
                    components: {
                        header: Header,
                        content: ArticleContent,
                        footer: Footer
                    }
                },
                {
                    path: 'articles',
                    name: 'articles',
                    components: {
                        header: Header,
                        content: ArticleListContent,
                        footer: Footer
                    },
                    meta: {
                        title: '分类 - 寒露'
                    }
                },
                {
                    path: 'timeline',
                    name: 'timeline',
                    components: {
                        header: Header,
                        content: TimeLineContent,
                        footer: Footer
                    },
                    meta: {
                        title: '时间线 - 寒露'
                    }
                },
                {
                    path: 'showme',
                    name: 'showme',
                    components: {
                        header: Header,
                        content: ShowMe,
                        footer: Footer
                    },
                    meta: {
                        title: '关于 - 寒露'
                    }
                }
            ]
        },
        {
            path: '/404',
            name: 'notfound',
            component: NotFound
        },
        {
            path: '*', // 此处需特别注意置于最底部
            redirect: '/404'
        }
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();

    //网站 title
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
