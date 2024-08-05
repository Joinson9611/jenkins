import { KeepAlive } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/page1',
    component: () => import('@/pages/page1.vue')
  },
  {
    path: '/image',
    component: () => import('@/pages/imgChange.vue')
  },
  {
    path: '/page2',
    component: () => import('@/pages/page2.vue'),
    name: 'page2',
    meta: {
      KeepAlive: true
    }
  },
  {
    path: '/canvas',
    component: () => import('@/pages/canvas.vue'),
    name: 'canvas',
    meta: {
      KeepAlive: true
    }
  }
];
export default createRouter({
  history: createWebHashHistory(),
  routes
});
