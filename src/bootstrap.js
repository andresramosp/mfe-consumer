import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from "vue-router";
import App from './App.vue'

const routes = [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/about', component: () => import('@/views/About.vue')  },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
  
