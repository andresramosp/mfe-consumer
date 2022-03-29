import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'

import './styles/styles.css'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/map', component: () => import('@/views/Map.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

