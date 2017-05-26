import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.filter("timeChange", function (value) {
    return value.split('T')[0]
});

Vue.filter("class", function (value) {
    let object={
        1:'生活',
        2:'学习',
        3:'旅行',
        4:'回忆'
    }
    return object[value]
});


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
