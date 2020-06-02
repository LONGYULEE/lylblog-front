// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from '@/util/request.js'
import '@/common/less/index.less'

// 引入vue ant design
import ant from "./ant/AntDesign";
Vue.use(ant);

Vue.config.productionTip = false

Vue.prototype.$http = http // Ajax 请求方法
//动态加载js
Vue.prototype.$loadScript = (script, url, callback) => {
    script = script || document.createElement('script')
    if (script.readyState) {
        // IE浏览器
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null
                callback()
            }
        }
    } else {
        // 其他浏览器
        script.onload = function () {
            callback()
        }
    }
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}

//自定义标题指令
Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
