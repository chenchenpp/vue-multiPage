export default {
  path: '/home',
  name: '首页',
  meta: { skipAuth: true },
  component: () => import('@/pages/index/views/home.vue')
}
