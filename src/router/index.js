import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Index from '../components/Index'

// 公共
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

//首页
import HomeContent from '../components/content/HomeContent'
import ArticleListContent from '@/components/content/ArticleListContent'

import NotFound from '@/components/views/404'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(Router)

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
                    }
                },
                {
                    path: 'articles',
                    name: 'articles',
                    components: {
                        header: Header,
                        content: ArticleListContent,
                        footer: Footer
                    }
                }
            ]
        },
        {
            path: '/404',
            name: 'notfound',
            component: NotFound,
        },
        {
            path: "*", // 此处需特别注意置于最底部
            redirect: "/404"
        }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router;
