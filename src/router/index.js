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
                }
            ]
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
