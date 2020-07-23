import Vue from 'vue'
import Router from 'vue-router';
import { getSessionStorage, setSessionStorage } from 'utils/store'
import { getCookie, setCookie } from '@/utils/store'
import store from '@/store'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/activity/detail',
      name: '详情',
      component: ()=>import('./views/detail.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (!store.state.online) {
    const toast = this.$createToast({
      txt: `网络已断开，请稍候再试......`,
      type: 'error',
      time: 2000
    })
    toast.show()
    return
  }
  // document.title = to.meta.title || to.name 改变标题名字
  next()
})
export default router;
