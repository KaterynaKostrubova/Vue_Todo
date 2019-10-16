import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //отключает предупреждение о работе в режиме разработки при запуске Vue

new Vue({
  render: h => h(App),
}).$mount('#app')
