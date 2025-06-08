import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_xiehuigaikuangxiehuizhangcheng from '../views/computer/lanhu_xiehuigaikuangxiehuizhangcheng/index.vue'
import lanhu_lianxiwomen from '../views/computer/lanhu_lianxiwomen/index.vue'
import lanhu_xiehuigaikuangxiehuizhangcheng_1 from '../views/mobile/lanhu_xiehuigaikuangxiehuizhangcheng_1/index.vue'
import lanhu_xiehuigaikuangxiehuiyeji from '../views/computer/lanhu_xiehuigaikuangxiehuiyeji/index.vue'
import lanhu_xiehuigaikuangxiehuilingdao from '../views/computer/lanhu_xiehuigaikuangxiehuilingdao/index.vue'
import lanhu_xiehuigaikuangxiehuijianjie from '../views/computer/lanhu_xiehuigaikuangxiehuijianjie/index.vue'
import lanhu_xiehuigaikuangxiehuiyeji_1 from '../views/mobile/lanhu_xiehuigaikuangxiehuiyeji_1/index.vue'
import lanhu_huiyuanzhijiadanweihuiyuan from '../views/computer/lanhu_huiyuanzhijiadanweihuiyuan/index.vue'
import lanhu_huiyuanzhijiagerenhuiyuan from '../views/computer/lanhu_huiyuanzhijiagerenhuiyuan/index.vue'
import lanhu_lianxiwomen_1 from '../views/mobile/lanhu_lianxiwomen_1/index.vue'
import lanhu_xiehuidongtaitongzhigonggao from '../views/computer/lanhu_xiehuidongtaitongzhigonggao/index.vue'
import lanhu_xiehuigaikuangxiehuilingdao_1 from '../views/mobile/lanhu_xiehuigaikuangxiehuilingdao_1/index.vue'
import lanhu_shouye from '../views/computer/lanhu_shouye/index.vue'
import lanhu_xiehuidongtaitongzhigonggao_1 from '../views/mobile/lanhu_xiehuidongtaitongzhigonggao_1/index.vue'
import lanhu_jiangxiangzhuanqufamingchuangyejiang from '../views/computer/lanhu_jiangxiangzhuanqufamingchuangyejiang/index.vue'
import lanhu_huiyuanzhijiagerenhuiyuan_1 from '../views/mobile/lanhu_huiyuanzhijiagerenhuiyuan_1/index.vue'
import lanhu_huiyuanzhijiadanweihuiyuan_1 from '../views/mobile/lanhu_huiyuanzhijiadanweihuiyuan_1/index.vue'
import lanhu_jiangxiangzhuanqufamingchuangyejiang_1 from '../views/mobile/lanhu_jiangxiangzhuanqufamingchuangyejiang_1/index.vue'
import lanhu_xiehuigaikuangxiehuijianjie_1 from '../views/mobile/lanhu_xiehuigaikuangxiehuijianjie_1/index.vue'
import lanhu_shouye_1 from '../views/mobile/lanhu_shouye_1/index.vue'

Vue.use(VueRouter)

const isMobile = window.innerWidth <= 768;

const routes = [
    {
    path: '/',
     redirect: isMobile ? '/mobile/shouye' : '/computer/shouye'
  },
  {
    path: '/computer/shouye', 
    name: 'lanhu_shouye',
    component: lanhu_shouye
  },
  {
    path: '/computer/xiehuigaikuangxiehuizhangcheng', 
    name: 'lanhu_xiehuigaikuangxiehuizhangcheng',
    component: lanhu_xiehuigaikuangxiehuizhangcheng
  },
 
  {
    path: '/computer/lianxiwomen', 
    name: 'lanhu_lianxiwomen',
    component: lanhu_lianxiwomen
  },
  {
    path: '/mobile/xiehuigaikuangxiehuizhangcheng',
    name: 'lanhu_xiehuigaikuangxiehuizhangcheng_1',
    component: lanhu_xiehuigaikuangxiehuizhangcheng_1
  },
  {
    path: '/computer/xiehuigaikuangxiehuiyeji',
    name: 'lanhu_xiehuigaikuangxiehuiyeji',
    component: lanhu_xiehuigaikuangxiehuiyeji
  },
  {
    path: '/computer/xiehuigaikuangxiehuilingdao',
    name: 'lanhu_xiehuigaikuangxiehuilingdao',
    component: lanhu_xiehuigaikuangxiehuilingdao
  },
  {
    path: '/computer/xiehuigaikuangxiehuijianjie',
    name: 'lanhu_xiehuigaikuangxiehuijianjie',
    component: lanhu_xiehuigaikuangxiehuijianjie
  },
  {
    path: '/mobile/xiehuigaikuangxiehuiyeji',
    name: 'lanhu_xiehuigaikuangxiehuiyeji_1',
    component: lanhu_xiehuigaikuangxiehuiyeji_1
  },
  {
    path: '/computer/huiyuanzhijiadanweihuiyuan',
    name: 'lanhu_huiyuanzhijiadanweihuiyuan',
    component: lanhu_huiyuanzhijiadanweihuiyuan
  },
  {
    path: '/computer/huiyuanzhijiagerenhuiyuan',
    name: 'lanhu_huiyuanzhijiagerenhuiyuan',
    component: lanhu_huiyuanzhijiagerenhuiyuan
  },
  {
    path: '/mobile/lianxiwomen',
    name: 'lanhu_lianxiwomen_1',
    component: lanhu_lianxiwomen_1
  },
  {
    path: '/computer/xiehuidongtaitongzhigonggao',
    name: 'lanhu_xiehuidongtaitongzhigonggao',
    component: lanhu_xiehuidongtaitongzhigonggao
  },
  {
    path: '/mobile/xiehuigaikuangxiehuilingdao',
    name: 'lanhu_xiehuigaikuangxiehuilingdao_1',
    component: lanhu_xiehuigaikuangxiehuilingdao_1
  },
  {
    path: '/mobile/xiehuidongtaitongzhigonggao',  
    name: 'lanhu_xiehuidongtaitongzhigonggao_1',
    component: lanhu_xiehuidongtaitongzhigonggao_1
  },
  {
    path: '/computer/jiangxiangzhuanqufamingchuangyejiang',  
    name: 'lanhu_jiangxiangzhuanqufamingchuangyejiang',
    component: lanhu_jiangxiangzhuanqufamingchuangyejiang
  },
  {
    path: '/mobile/huiyuanzhijiagerenhuiyuan',
    name: 'lanhu_huiyuanzhijiagerenhuiyuan_1',
    component: lanhu_huiyuanzhijiagerenhuiyuan_1
  },
  {
    path: '/mobile/huiyuanzhijiadanweihuiyuan',
    name: 'lanhu_huiyuanzhijiadanweihuiyuan_1',
    component: lanhu_huiyuanzhijiadanweihuiyuan_1
  },
  {
    path: '/mobile/jiangxiangzhuanqufamingchuangyejiang',  
    name: 'lanhu_jiangxiangzhuanqufamingchuangyejiang_1',
    component: lanhu_jiangxiangzhuanqufamingchuangyejiang_1
  },
  {
    path: '/mobile/xiehuigaikuangxiehuijianjie',
    name: 'lanhu_xiehuigaikuangxiehuijianjie_1',
    component: lanhu_xiehuigaikuangxiehuijianjie_1
  },
  {
    path: '/mobile/shouye',
    name: 'lanhu_shouye_1',
    component: lanhu_shouye_1
  },
  {
    path: '/mobile/huiyuanzhijiadanweihuiyuan',
    name: 'lanhu_huiyuanzhijiadanweihuiyuan_1',
    component: lanhu_huiyuanzhijiadanweihuiyuan_1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
