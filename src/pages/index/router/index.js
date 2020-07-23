import Vue from 'vue'
import Router from 'vue-router';
import { getSessionStorage, setSessionStorage } from 'utils/store'
import { getCookie, setCookie } from '@/utils/store'
import store from '@/store'
Vue.use(Router)
let routeList=[];
// 转换路由
function importAllRouter(routerArr){
  routerArr.keys().forEach(item=>{
    routeList.push(routerArr(item).default)
  })
}
importAllRouter(require.context('.', true, /\.route\.js/));
const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: 'home'},
    ...routeList
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
