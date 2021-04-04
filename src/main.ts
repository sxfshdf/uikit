import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    }, {
      path: '/doc',
      component: () => import('./views/Doc.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
