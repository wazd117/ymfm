<template>
  <div class="page flex-col">
    <div class="box_1 flex-row">
      <div class="titlebutton">
        <TitleButton />
      </div>
     <!-- <div class="image-contianer_1">
      <img
        class="image_1"
        referrerpolicy="no-referrer"
        src="./assets/img/MasterDDSSlicePNG9e4f0afb7009ff9f61fbd480c98d69ef.png"
      />

      <img
        class="image_20"
        referrerpolicy="no-referrer"
        src="./assets/img/MasterDDSSlicePNGdca3da43733296a7c96e5d88d14cf365.png"
      />
     </div>
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
      </div> -->
      
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
          <router-link class="text_11" to="huiyuanzhijiagerenhuiyuan">个人会员</router-link>
        </div>
      </div>
     
      <!-- <div class="block_2 flex-row justify-between">
        <div class="section_1 flex-col">
        <span class="text_21">友情链接</span>
        <div class="image-wrapper">
          <a class="zhongguofamingixiehuilink" :href="'https://www.cainet.org.cn/'" target="_blank">
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/fmxh.png"
          /></a>

          <a class="ynuzhishichanqunalink" :href="'http://www.ip.ynu.edu.cn/'" target="_blank">
          <img
            class="image_18"
            referrerpolicy="no-referrer"
            src="./assets/img/ydzscq.png"
          /></a>

          <a class="shengwuyiyaolink" :href="'http://bmh.iflora.cn/'" target="_blank">
          <img
            class="image_19"
            referrerpolicy="no-referrer"
            src="./assets/img/swyy.png"
          /></a>

        </div>
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
    </div> -->
       <el-form :model="form" label-position="top">
       <div class="box_8 flex-row">
        <div class="column_1 flex-col">
           <el-form-item label="入会类型">
               <el-radio-group v-model="form.resource">
                       <el-radio label="单位会员"></el-radio>
                       <el-radio label="个人会员"></el-radio>
               </el-radio-group>
           </el-form-item>

           <el-form-item label="法人代表">
               <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="电子邮箱">
               <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="单位性质">
               <el-radio-group v-model="form.resource">
                       <el-radio label="企业"></el-radio>
                       <el-radio label="事业"></el-radio>
                       <el-radio label="其他"></el-radio>
               </el-radio-group>
           </el-form-item>

           <el-form-item label="中级技术人员">
               <el-input v-model="form.name"></el-input>
            </el-form-item>
        </div>
       </div>

       <div class="box_9 flex-col"></div>
       </el-form>
    <div class="bottomblank">
      <BottomBlank />
    </div>
    </div>
  </div>
</template>
<script>

import TitleButton from "../title_button/TitleButton";
import BottomBlank from '../bottom_blank/BottomBlank.vue';
export default {
  components: {
    TitleButton,
    BottomBlank,
  },
  data() {
    return {
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      constants: {}
    };
  },
  methods: {
    onSubmit() {
        console.log('已提交!');
      }
  }
};
</script>
<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />
