<template>
  <div class="page flex-col">

      <div class="text-container_1 flex-col">
        <div class="text-container_2 flex-row justify-between align-center">
          <div class="text-with-image flex-row align-center"></div>
             <span class="text_31">Yunnan&nbsp;Province&nbsp;Association&nbsp;of&nbsp;Inventors </span>
          <img class="thumbnail_1" src="./assets/img/MasterDDSSlicePNG5226391ac2d1006ca17818153b41a789.png" />
        </div>
        <div class="text-wrapper_13 flex-col"><span class="text_32">云南省发明协会</span>
          <div class="image-wrapper_1 flex-col">
          <img
            class="label_1"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG8de44bc4b86c0f0d99c3e2face903706.png"
          />
          <img
            class="label_2"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNGdca3da43733296a7c96e5d88d14cf365.png"
          /> 
        </div>
      </div>
    </div>

    <div class="box_14 flex-col justify-end">
        <span class="paragraph_20">
          推动发明
          <br />
          保护创新
        </span>
        <div class="text-wrapper_14 flex-row">
          <span class="text_33">协会简介</span>
          <router-link class="text_34" to="xiehuigaikuangxiehuizhangcheng">协会章程</router-link>
          <router-link class="text_35" to="xiehuigaikuangxiehuilingdao">协会领导</router-link>
          <router-link class="text_36" to="xiehuigaikuangxiehuiyeji">协会业绩</router-link>
        </div>
      </div>

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
        class="image_10"
        referrerpolicy="no-referrer"
        src="./assets/img/MasterDDSSlicePNGdca3da43733296a7c96e5d88d14cf365.png"
      />
    </div>
      <div class="block_1 flex-col">
        <a class="text-wrapper_1 flex-col" :href="'/computer/shouye'" target="_blank"><span class="text_1">首页</span></a>
      </div>
      <div class="block_2 flex-col">
        <span class="text_2">Yunnan&nbsp;Province&nbsp;Association&nbsp;of&nbsp;Inventors</span>
        <span class="text_3">云南省发明协会</span>
        <div class="section_1 flex-row justify-between">
          <div class="box_2 flex-col">
            <a class="text-wrapper_2 flex-col" :href="'/computer/xiehuigaikuangxiehuijianjie'" target="_blank"><span class="text_4">协会概况</span></a>
          </div>
          <div class="box_3 flex-col">
            <a class="text-wrapper_3 flex-col" :href="'/computer/xiehuidongtaitongzhigonggao'" target="_blank"><span class="text_5">协会动态</span></a>
          </div>
          <div class="box_4 flex-col">
            <a class="text-wrapper_4 flex-col" :href="'/computer/jiangxiangzhuanqufamingchuangyejiang'" target="_blank"><span class="text_6">奖项专区</span></a>
          </div>
          <div class="box_5 flex-col">
            <a class="text-wrapper_5 flex-col" :href="'/computer/lianxiwomen'" target="_blank"><span class="text_7">联系我们</span></a>
          </div>
        </div>
      </div>
      <div class="block_3 flex-col">
        <a class="text-wrapper_6 flex-col" :href="'/computer/huiyuanzhijiadanweihuiyuan'" target="_blank"><span class="text_8">会员之家</span></a>
      </div> -->
    </div>
    <div class="box_6 flex-col">
      <div class="section_2 flex-col justify-end">
        <span class="paragraph_1">
          推动发明
          <br />
          保护创新
        </span>
        <div class="text-wrapper_7 flex-row">
          <span class="text_9">协会简介</span>
          <router-link class="text_10" :to="'/computer/xiehuigaikuangxiehuizhangcheng'">协会章程</router-link>
          <router-link class="text_11" :to="'/computer/xiehuigaikuangxiehuilingdao'">协会领导</router-link>
          <router-link class="text_12" :to="'/computer/xiehuigaikuangxiehuiyeji'">协会业绩</router-link>
        </div>
      </div>
      <span class="text_13">关于协会</span>
      <div class="text-wrapper_8 flex-col">
        <span class="text_14">
          云南省发明协会在中国发明协会的指导下成立于1986年7月25日，协会的宗旨是：遵守宪法、法律、法规和国家政策，践行社会主义核心价值观，遵守社会道德风尚，倡导创新精神、坚持习近平新时代中国特色社会主义思想为指导，引导和推动发明创造、创新创业活动的开展，发掘和支持发明创造人才，促进发明创造成果的转化和运用，为建设创新型云南和经济社会发展做出贡献。
        </span>
      </div>
    <div class="text-wrapper_15 flex-col">
      <span class="text_15">业务范围</span>
      <span class="text_16">Scope&nbsp;of&nbsp;business</span>
    </div>
      <div class="section_3 flex-row justify-between">
        <div class="group_1 flex-col">
          <span class="text_17">友情链接</span>
          <div class="image-wrapper">
          <a class="zhongguofamingixiehuilink" :href="'https://www.cainet.org.cn/'" target="_blank">
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/fmxh.png"
          /></a>
          <a class="ynuzhishichanqunalink" :href="'http://www.ip.ynu.edu.cn/'" target="_blank">
          <img
            class="image_8"
            referrerpolicy="no-referrer"
            src="./assets/img/ydzscq.png"
          /></a>
          <a class="shengwuyiyaolink" :href="'http://bmh.iflora.cn/'" target="_blank">
          <img
            class="image_9"
            referrerpolicy="no-referrer"
            src="./assets/img/swyy.png"
          /></a>
          </div>
        </div>
        <div class="group_2 flex-col">
          <div class="box_7 flex-col">
            <div class="text-group_1 flex-col justify-between">
              <span class="text_18">云南省发明协会</span>
              <span class="text_19">地址：云南省昆明市五华区学府路海伦先生&nbsp;1&nbsp;栋&nbsp;11&nbsp;楼</span>
            </div>
            <div class="text-group_2_1 flex-col justify-between">
              <span class="text_20_1">联系方式</span>
              <span class="paragraph_2_1">
                副秘书长—刘志强：15368258967
                <br />
                副秘书长—张毓洀：18669000423
                <br />
                电话总机：0871-68588876
                <br />
                邮编：655000
              </span>
              <a class="text-wrapper_9_1 flex-col" :href="'/computer/lianxiwomen'" target="_blank"><span class="text_21_1">联系我们&nbsp;→</span></a>
            </div>
          </div>
          <div class="box_8 flex-row justify-between">
            <div class="text-group_2 flex-col justify-between">
              <span class="text_20">联系方式</span>
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
            <a class="text-wrapper_9 flex-col" :href="'/computer/lianxiwomen'" target="_blank"><span class="text_21">联系我们&nbsp;→</span></a>
          </div>
        </div>
      </div>
      <span class="text_22">About&nbsp;the&nbsp;association</span>
    
 <div class="section_4 flex-row">

  <!-- 用来确定最基础的鼠标移入后的返回index逻辑，以及对应的box索引 -->
  <div
    v-for="(box, index) in boxes"
    :key="index"
    :class="getBoxClass(index)"
    @mouseover="hoveredIndex = index"
    @mouseleave="hoveredIndex = null"
  >
   
    <img
      :class="getImageClass(index)"
      :src="getIconSrc(index)" 
      alt="icon"
    />

    <div :class="getTextClass(index)">
      {{ box.text }}
    </div>

    <div v-if="shouldShowContent(index)" class="text-wrapper_10">
      <p class="paragraph_3" v-html="box.paragraph"></p>
    </div>
  </div>
  
  </div>
        <!-- <div class="box_9 flex-col">
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNGacaaecfbe9ebafd529e883612cd86640.png"
          />
          <span class="text_23">&nbsp;政策宣传与创新引导</span>
          <div class="text-wrapper_10">
            <span class="paragraph_3">
              󰀠政策普及：宣传国家科技创新、知识产权相关法规，推动发明创造与创新创业实践；
              <br />
              󰀠氛围营造：倡导“尊重知识、崇尚创新、诚信守法”的社会环境，激励群众参与发明活动。
            </span>
            <span class="text_24"></span>
          </div>
        </div>
        <div class="box_10 flex-col">
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG8cb406f431c7707c47f95449d6611f60.png"
          />
          <span class="text_25">活动组织与成果转化</span>
          <div class="text-wrapper_12">
            <span class="paragraph_4">
              󰀠展示交流：举办发明成果展览、推介会，组织参与国内外发明展会（如中国国际发明展）；
              <br />
              󰀠成果应用：促进发明成果转化落地，服务知识产权商业化运用。
            </span>
          </div>
        </div>
        <div class="box_11 flex-col">
          <img
            class="image_5"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG90270cf460214645e6ae55a16ff28d18.png"
          />
          <span class="text_26">会员服务与权益保障</span>
          <div class="text-wrapper_13">
            <span class="paragraph_5">
              󰀠权益维护：保障发明者合法权益，收集并反馈相关诉求；
              <br />
              󰀠人才激励：推荐优秀发明人才，表彰杰出发明者、创业者和支持单位/个人。
            </span>
          </div>
        </div>
        <div class="box_12 flex-col">
          <img
            class="image_6"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG5687267abfd31340efa0df3778456b67.png"
          />
          <span class="text_27">能力建设与咨询服务</span>
          <div class="text-wrapper_14">
            <span class="paragraph_6">
              󰀠培训赋能：开展发明创造、技术创新及知识产权领域的专业培训和咨询；
              <br />
              󰀠课题研究：承接政府及企业委托的科技、知识产权类课题研究与项目策划。
            </span>
          </div>
        </div>
        <div class="box_13 flex-col">
          <img
            class="image_7"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG7469424679d0e7140c2c3137e6449936.png"
          />
          <span class="text_28">国际合作与交流</span>
          <div class="text-wrapper_16">
            <span class="paragraph_7">
              󰀠国际联动：与国内外发明协会建立合作，推动跨区域技术交流与资源对接。
            </span>
          </div>
        </div> -->
     
    </div>
    <div class="text-wrapper_11 flex-col">
      <span class="text_29">版权所有：Copyright&nbsp;©&nbsp;云南省发明协会&nbsp;All&nbsp;rights&nbsp;reserved.</span>
    </div>

  </div>
</template>
<script>

import TitleButton from '../title_button/TitleButton.vue';

export default {

    components: {
    TitleButton,
  },
  data() {
    return {
      hoveredIndex: null,  // 当前悬浮的盒子索引

      boxes: [
        { text: '政策宣传与创新引导', paragraph: '&#8226政策普及：宣传国家科技创新、知识产权相关法规，推动发明创造与创新创业实践；<br />&#8226氛围营造：倡导“尊重知识、崇尚创新、诚信守法”的社会环境，激励群众参与发明活动。',icon_hover:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/xuanchuantuiguangnormal.png'),icon_normal:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/xuanchuantuiguang.png') },
        { text: '活动组织与成果转化', paragraph: '&#8226展示交流：举办发明成果展览、推介会，组织参与国内外发明展会（如中国国际发明展）；<br />&#8226成果应用：促进发明成果转化落地，服务知识产权商业化运用。' ,icon_hover:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/MasterDDSSlicePNG8cb406f431c7707c47f95449d6611f60.png'),icon_normal:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/zhaochengguo-copy.png')},
        { text: '会员服务与权益保障', paragraph: '&#8226权益维护：保障发明者合法权益，收集并反馈相关诉求；<br />&#8226人才激励：推荐优秀发明人才，表彰杰出发明者、创业者和支持单位/个人。' ,icon_hover:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/MasterDDSSlicePNG90270cf460214645e6ae55a16ff28d18.png'),icon_normal:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/huiyuan-copy.png')},
        { text: '能力建设与咨询服务', paragraph: '&#8226培训赋能：开展发明创造、技术创新及知识产权领域的专业培训和咨询；<br />&#8226课题研究：承接政府及企业委托的科技、知识产权类课题研究与项目策划。' ,icon_hover:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/MasterDDSSlicePNG5687267abfd31340efa0df3778456b67.png'),icon_normal:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/zixun.png')},
        { text: '国际合作与交流', paragraph: '&#8226国际联动：与国内外发明协会建立合作，推动跨区域技术交流与资源对接。',icon_hover:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/MasterDDSSlicePNG7469424679d0e7140c2c3137e6449936.png'),icon_normal:require('@/views/computer/lanhu_xiehuigaikuangxiehuijianjie/assets/img/hezuo-copy.png') },
      ],
      constants: {}
    };
  },
methods: {


  getBoxClass(index) {
    if (index === 0) {   // 政策引导盒子显示逻辑，由于第一个盒子逻辑特殊因此单独用一个控制流处理
      
    if (this.hoveredIndex !== null && this.hoveredIndex !== 0) {   
      return 'box_10';
    }
    else {
      return 'box_9';  
    }
  }
    return this.hoveredIndex === index ? 'box_9' : 'box_10';  // 其他盒子显示逻辑
  },

  getIconSrc(index) {
    if (index === 0) { 
      //第一个盒子的icon显示逻辑
    if (this.hoveredIndex !== null && this.hoveredIndex !== 0) {   
      return this.boxes[index].icon_normal;
    }
    else {
      return this.boxes[index].icon_hover; 
    }
  }
    return this.hoveredIndex === index ? this.boxes[index].icon_normal : this.boxes[index].icon_hover ;  // 其他盒子显示逻辑
  },

  getImageClass(index) {
    if (index === 0) {
      if (this.hoveredIndex !== null && this.hoveredIndex !== 0){
        return 'image_4';
      }
      else  {
        return 'image_3';
      }
    }
    return this.hoveredIndex === index ? 'image_3' : 'image_4';
  },

  getTextClass(index) {
    if (index === 0 ) return 'text_23';
    return this.hoveredIndex === index ? 'text_23' : 'text_25';
  },
  shouldShowContent(index) {
    if (index === 0) {
      if (this.hoveredIndex !== null && this.hoveredIndex !== 0){
        return 0;
      }
      else  {
        return 1;
      }
    }
    return this.hoveredIndex === index ? 1 : 0 ;
  }

},

};
</script>
<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />
<style scoped>
.section_4 {
  width: 100%;
  padding: 0;
}

.box {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s ease; /* 平滑过渡 */
}

.box-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  background-color: #b0bec5;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.text {
  font-size: 1.5rem;
  font-weight: bold;
}

.paragraph {
  font-size: 1rem;
  color: #777;
}

/* 悬浮时的效果 */
.is-hovered {
  background-color: #409EFF;
  color: white;
}

.is-hovered .image {
  background-color: #fff;
}

</style>