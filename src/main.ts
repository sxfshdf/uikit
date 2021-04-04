import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: () => import('./components/HelloWorld.vue')
    }, {
      path: '/test',
      component: () => import('./components/Test.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
