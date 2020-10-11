import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Icon from 'vue-svg-icon/Icon.vue'

Vue.config.productionTip = false

// Vue.component('Icon', Icon) // 引入svg.icon

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
