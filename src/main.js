import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
