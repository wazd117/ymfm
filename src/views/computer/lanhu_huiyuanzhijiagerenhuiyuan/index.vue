<template>
  <div class="page flex-col">
    <div class="box_1 flex-row">
      <div class="box_2 flex-col">
        <a class="text-wrapper_1 flex-col" :href="'/computer/shouye'" target="_blank"><span class="text_1">首页</span></a>
      </div>
      <div class="box_3 flex-col">
        <span class="text_2">Yunnan&nbsp;Province&nbsp;Association&nbsp;of&nbsp;Inventors</span>
        <span class="text_3">云南省发明协会</span>
        <div class="group_1 flex-row justify-between">
          <div class="group_2 flex-col">
            <a class="text-wrapper_2 flex-col" :href="'/computer/xiehuigaikuangxiehuijianjie'" target="_blank"><span class="text_4">协会概况</span></a>
          </div>
          <div class="group_3 flex-col">
            <a class="text-wrapper_3 flex-col" :href="'/computer/xiehuidongtaitongzhigonggao'" target="_blank"><span class="text_5">协会动态</span></a>
          </div>
          <div class="group_4 flex-col">
            <a class="text-wrapper_4 flex-col" :href="'/computer/jiangxiangzhuanqufamingchuangyejiang'" target="_blank"><span class="text_6">奖项专区</span></a>
          </div>
          <div class="group_5 flex-col">
            <a class="text-wrapper_5 flex-col" href="/computer/lianxiwomen" target="_blank"><span class="text_7">联系我们</span></a>
          </div>
        </div>
      </div>
      <div class="box_4 flex-col">
        <div class="text-wrapper_6 flex-col"><span class="text_8">会员之家</span></div>
      </div>
      <img
        class="image_1"
        referrerpolicy="no-referrer"
        src="./assets/img/MasterDDSSlicePNG9e4f0afb7009ff9f61fbd480c98d69ef.png"
      />
    </div>
    <div class="box_5 flex-col">
      <div class="block_1 flex-col justify-end">
        <span class="paragraph_1">
          会员之家
          <br />
          创新者的港湾
        </span>
        <div class="text-wrapper_7 flex-row">
          <span class="text_9">入会申请</span>
          <router-link class="text_10" to="huiyuanzhijiadanweihuiyuan">单位会员</router-link>
          <span class="text_11">个人会员</span>
        </div>
      </div>
      <div class="list_1 flex-col">
        <div class="list-items_1 flex-row" v-for="(item, index) in loopData0" :key="index">
          <div class="text-wrapper_8 flex-col"><span class="text_12" v-html="item.lanhutext0"></span></div>
          <div class="text-wrapper_9 flex-col"><span class="text_13" v-html="item.lanhutext1"></span></div>
          <div class="text-wrapper_10 flex-col"><span class="text_14" v-html="item.lanhutext2"></span></div>
          <div class="text-wrapper_11 flex-col"><span class="text_15" v-html="item.lanhutext3"></span></div>
          <div class="text-wrapper_12 flex-col"><span class="text_16" v-html="item.lanhutext4"></span></div>
          <div class="text-wrapper_13 flex-col"><span class="text_17" v-html="item.lanhutext5"></span></div>
          <div class="text-wrapper_14 flex-col"><span class="text_18" v-html="item.lanhutext6"></span></div>
          <div class="text-wrapper_15 flex-col"><span class="text_19" v-html="item.lanhutext7"></span></div>
          <div class="text-wrapper_16 flex-col"><span class="text_20" v-html="item.lanhutext8"></span></div>
        </div>
      </div>
      <div class="block_2 flex-row justify-between">
        <div class="section_1 flex-col">
          <span class="text_21">友情链接</span>
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG043729ae413b7a336b77f28000fa5e64.png"
          />
        </div>
        <div class="section_2 flex-col">
          <div class="box_6 flex-row">
            <div class="text-group_1 flex-col justify-between">
              <span class="text_22">云南省发明协会</span>
              <span class="text_23">地址：云南省昆明市五华区学府路海伦先生&nbsp;1&nbsp;栋&nbsp;11&nbsp;楼</span>
            </div>
          </div>
          <div class="box_7 flex-row justify-between">
            <div class="text-group_2 flex-col justify-between">
              <span class="text_24">联系方式</span>
              <span class="paragraph_2">
                副秘书长—刘志强：15368258967
                <br />
                副秘书长—张毓洀：18669000423
                <br />
                电话总机：0871-68588876
                <br />
                邮编：655000
              </span>
            </div>
            <a class="text-wrapper_17 flex-col" :href="'/computer/lianxiwomen'" target="_blank"><span class="text_25">联系我们&nbsp;→</span></a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-wrapper_18 flex-col">
      <span class="text_26">版权所有：Copyright&nbsp;©&nbsp;云南省发明协会&nbsp;All&nbsp;rights&nbsp;reserved.</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '吕春齐',
          lanhutext1: '鹿益辰',
          lanhutext2: '皮雄霖',
          lanhutext3: '邹建政',
          lanhutext4: '柏汝鑫',
          lanhutext5: '金佳怡',
          lanhutext6: '张晨涵',
          lanhutext7: '许洋辉',
          lanhutext8: '秦涵涵'
        },
        {
          lanhutext0: '金榕汕',
          lanhutext1: '防己科',
          lanhutext2: '关忍毅',
          lanhutext3: '朱民',
          lanhutext4: '范佳昊',
          lanhutext5: '贺汝舰',
          lanhutext6: '潘泽远',
          lanhutext7: '慕容信峰',
          lanhutext8: '霍佳玉'
        },
        {
          lanhutext0: '唐佳玉',
          lanhutext1: '卫雅晗',
          lanhutext2: '张宏伟',
          lanhutext3: '滕佳毅',
          lanhutext4: '黄文杰',
          lanhutext5: '尤洋辉',
          lanhutext6: '谢语晨',
          lanhutext7: '华美欣',
          lanhutext8: '苏子辰'
        },
        {
          lanhutext0: '秦佳惠',
          lanhutext1: '安佩玉',
          lanhutext2: '关淳美',
          lanhutext3: '苏嘉怡',
          lanhutext4: '秦益冉',
          lanhutext5: '魏铭',
          lanhutext6: '庄彬',
          lanhutext7: '方贺祥',
          lanhutext8: '郝苒溪'
        },
        {
          lanhutext0: '章翔',
          lanhutext1: '张佳怡',
          lanhutext2: '华佳惠',
          lanhutext3: '苗欣汝',
          lanhutext4: '常晓东',
          lanhutext5: '窦晨璐',
          lanhutext6: '苗浩晨',
          lanhutext7: '穆文杰',
          lanhutext8: '彭瑾昆'
        },
        {
          lanhutext0: '于涵涵',
          lanhutext1: '周威',
          lanhutext2: '何甜',
          lanhutext3: '鹿潇潇',
          lanhutext4: '李佩雯',
          lanhutext5: '姜潇潇',
          lanhutext6: '贺益帆',
          lanhutext7: '尤文轩',
          lanhutext8: '何思亮'
        },
        {
          lanhutext0: '邱文轩',
          lanhutext1: '杨榕汕',
          lanhutext2: '欧阳子园',
          lanhutext3: '傅欣慧',
          lanhutext4: '刘苒溪',
          lanhutext5: '卫潇潇',
          lanhutext6: '薛春阳',
          lanhutext7: '费昊轩',
          lanhutext8: '于佩玉'
        },
        {
          lanhutext0: '顾爽',
          lanhutext1: '霍夫子',
          lanhutext2: '许嘉乐',
          lanhutext3: '苏涵越',
          lanhutext4: '尤瑞堂',
          lanhutext5: '戚彬',
          lanhutext6: '汤杰瑞',
          lanhutext7: '岑欣汝',
          lanhutext8: '袁欣汝'
        },
        {
          lanhutext0: '鹿硕',
          lanhutext1: '潘斌辉',
          lanhutext2: '孙新建',
          lanhutext3: '韩建林',
          lanhutext4: '赵天赫',
          lanhutext5: '何伟洋',
          lanhutext6: '郑新建',
          lanhutext7: '闫清妍',
          lanhutext8: '马嘉怡'
        },
        {
          lanhutext0: '皮泽惠',
          lanhutext1: '曹春齐',
          lanhutext2: '费慧嘉',
          lanhutext3: '霍昕蕊',
          lanhutext4: '殷爽',
          lanhutext5: '何振宇',
          lanhutext6: '钱欣欣',
          lanhutext7: '朱浩晨',
          lanhutext8: '薛子辰'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.css" />
<style scoped lang="css" src="@/assets/common.css" />
