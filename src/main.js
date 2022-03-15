import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import ViewUI, { Message } from 'view-design'
import 'view-design/dist/styles/iview.css'
import router from './router'
import App from './App'
import store from './store'

Vue.use(VueCompositionAPI)
Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
