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
import lanhu_xiehuidongtaihuiyuandongtai from '../views/computer/lanhu_xiehuidongtaihuiyuandongtai/index.vue'
import lanhu_xiehuidongtaiyaowendongtai from '../views/computer/lanhu_xiehuidongtaiyaowendongtai/index.vue'
import lanhu_xiehuigaikuangxiehuilingdao_1 from '../views/mobile/lanhu_xiehuigaikuangxiehuilingdao_1/index.vue'
import lanhu_shouye from '../views/computer/lanhu_shouye/index.vue'
import lanhu_xiehuidongtaitongzhigonggao_1 from '../views/mobile/lanhu_xiehuidongtaitongzhigonggao_1/index.vue'
import lanhu_jiangxiangzhuanqufamingchuangyejiang from '../views/computer/lanhu_jiangxiangzhuanqufamingchuangyejiang/index.vue'
import lanhu_jiangxiangzhuanqushaoerfamingjiang from '../views/computer/lanhu_jiangxiangzhuanqushaoerfamingjiang/index.vue'
import lanhu_huiyuanzhijiagerenhuiyuan_1 from '../views/mobile/lanhu_huiyuanzhijiagerenhuiyuan_1/index.vue'
import lanhu_huiyuanzhijiadanweihuiyuan_1 from '../views/mobile/lanhu_huiyuanzhijiadanweihuiyuan_1/index.vue'
import lanhu_jiangxiangzhuanqufamingchuangyejiang_1 from '../views/mobile/lanhu_jiangxiangzhuanqufamingchuangyejiang_1/index.vue'
import lanhu_xiehuigaikuangxiehuijianjie_1 from '../views/mobile/lanhu_xiehuigaikuangxiehuijianjie_1/index.vue'
import lanhu_shouye_1 from '../views/mobile/lanhu_shouye_1/index.vue'
import lanhu_zhuanjiaku from '../views/computer/lanhu_zhuanjiaku/index.vue'
import lanhu_xiangmuku from '../views/computer/lanhu_xiangmuku/index.vue'
import lanhu_xiangmukuxiangxi from '../views/computer/lanhu_xiangmukuxiangxi/index.vue'
import lanhu_yanxuehuodong from '../views/computer/lanhu_yanxuehuodong/index.vue'
import lanhu_yanxuehuodongxiangxi from '../views/computer/lanhu_yanxuehuodongxiangxi/index.vue'
import lanhu_zuixinjishutuiguang from '../views/computer/lanhu_zuixinjishutuiguang/index.vue'
import lanhu_zuixinjishutuiguangxiangxi from '../views/computer/lanhu_zuixinjishutuiguangxiangxi/index.vue'
import lanhu_ruhuishenqing from '../views/computer/lanhu_ruhuishenqing/index.vue'

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
    path: '/computer/xiehuidongtaihuiyuandongtai',
    name: 'lanhu_xiehuidongtaihuiyuandongtai',
    component: lanhu_xiehuidongtaihuiyuandongtai
  },
  {
    path: '/computer/xiehuidongtaiyaowendongtai',
    name: 'lanhu_xiehuidongtaiyaowendongtai',
    component: lanhu_xiehuidongtaiyaowendongtai
  },
  {
    path: '/computer/ruhuishenqing',
    name: 'lanhu_ruhuishenqing',
    component: lanhu_ruhuishenqing
  },
  {
    path: '/computer/zuixinjishutuiguang',
    name: 'lanhu_zuixinjishutuiguang',
    component: lanhu_zuixinjishutuiguang
  },
   {
    path: '/computer/zuixinjishutuiguangxiangxi',
    name: 'lanhu_zuixinjishutuiguangxiangxi',
    component: lanhu_zuixinjishutuiguangxiangxi
  },
  {
    path: '/computer/zhuanjiaku',
    name: 'zhuanjiaku',
    component: lanhu_zhuanjiaku
  },
  {
    path: '/computer/xiangmuku',
    name: 'xiangmuku',
    component: lanhu_xiangmuku
  },
  {
    path: '/computer/xiangmukuxiangxi',
    name: 'xiangmukuxiangxi',
    component: lanhu_xiangmukuxiangxi
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
    path: '/computer/jiangxiangzhuanqushaoerfamingjiang',  
    name: 'lanhu_jiangxiangzhuanqushaoerfamingjiang',
    component: lanhu_jiangxiangzhuanqushaoerfamingjiang
  },
  {
    path: '/computer/yanxuehuodong',  
    name: 'lanhu_yanxuehuodong',
    component: lanhu_yanxuehuodong
  },
  {
    path: '/computer/yanxuehuodongxiangxi',  
    name: 'lanhu_yanxuehuodongxiangxi',
    component: lanhu_yanxuehuodongxiangxi
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
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
