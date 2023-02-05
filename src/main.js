import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.scss'

createApp(App).use(router).mount('#app')






// createApp(App).mount('#app')
// Vue.use(VueRouter)


// new Vue({
//   el: '#app',
//   render: h => h(App),
// });