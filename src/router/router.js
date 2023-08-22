import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //     path: '/home',
  //     name: 'home',
  //     component: () => import('@/views/Home/index.vue'), //可能问题1  注意这里要带上 文件后缀.vue
  // },
  // {
  //     path: '/',
  //     name: 'helloWorld',
  //     component: () => import('@/components/HelloWorld.vue'),
  // },
  // {
  //     path: '/helloWorld',
  //     name: 'helloWorld',
  //     component: () => import('@/components/HelloWorld.vue'),
  // },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
