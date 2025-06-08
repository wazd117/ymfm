<template>
  <div class="page flex-col">
    <div class="text-wrapper_1 flex-col"><span class="text_1">云南省发明协会</span></div>
    <div class="block_1 flex-col">
      <div class="group_1 flex-col">
        <div class="box_1 flex-row justify-between">
          <span class="text_2">Yunnan&nbsp;Province&nbsp;Association&nbsp;of&nbsp;Inventors</span>
          <img
            class="thumbnail_1"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG5226391ac2d1006ca17818153b41a789.png"
          />
        </div>
        <div class="text-wrapper_2 flex-row"><span class="text_3">云南省发明协会</span></div>
        <div class="image-wrapper_1 flex-row">
          <img
            class="label_1"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNG8de44bc4b86c0f0d99c3e2face903706.png"
          />
        </div>
      </div>
      <div class="group_2 flex-col justify-end">
        <span class="paragraph_1">
          推动发明
          <br />
          保护创新
        </span>
        <div class="text-wrapper_3 flex-row">
          <span class="text_4">协会简介</span>
          <router-link class="text_5" to="xiehuigaikuangxiehuizhangcheng">协会章程</router-link>
          <router-link class="text_6" to="xiehuigaikuangxiehuilingdao">协会领导</router-link>
          <router-link class="text_7" to="xiehuigaikuangxiehuiyeji">协会业绩</router-link>
        </div>
      </div>
      <span class="text_8">关于协会</span>
      <div class="text-group_1 flex-col">
        <span class="text_9">About&nbsp;the&nbsp;association</span>
        <span class="text_10">
          云南省发明协会在中国发明协会的指导下成立于1986年7月25日，协会的宗旨是：遵守宪法、法律、法规和国家政策，践行社会主义核心价值观，遵守社会道德风尚，倡导创新精神、坚持习近平新时代中国特色社会主义思想为指导，引导和推动发明创造、创新创业活动的开展，发掘和支持发明创造人才，促进发明创造成果的转化和运用，为建设创新型云南和经济社会发展做出贡献。
        </span>
        <span class="text_11">业务范围</span>
        <span class="text_12">Scope&nbsp;of&nbsp;business</span>
      </div>
    </div>
    <div class="block_2 flex-col justify-between">
      <div class="list_1 flex-col">
        <div class="list-items_1 flex-col" v-for="(item, index) in loopData0" :key="index">
          <img class="label_2" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
          <div class="text-group_2 flex-col justify-between">
            <span class="text_13" v-html="item.lanhutext0"></span>
            <div class="text-wrapper_4">
              <span class="text_14" v-html="item.lanhutext1"></span>
              <span class="text_15" v-html="item.lanhutext2"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="block_3 flex-col">
        <img
          class="label_3"
          referrerpolicy="no-referrer"
          src="./assets/img/MasterDDSSlicePNGf5d7f495adbdc513364f193da467b07b.png"
        />
        <div class="text-group_3 flex-col justify-between">
          <span class="text_16">会员服务与权益保障</span>
          <div class="text-wrapper_5">
            <span class="paragraph_2">
              󰀠权益维护：保障发明者合法权益，收集并反馈相关诉求；
              <br />
              󰀠人才激励：推荐优秀发明人才，表彰杰出发明者、创业者和支持单位/个人。
            </span>
            <span class="text_17"></span>
          </div>
        </div>
      </div>
      <div class="block_4 flex-col">
        <img
          class="label_4"
          referrerpolicy="no-referrer"
          src="./assets/img/MasterDDSSlicePNG30a8b448ec12efcdf1f0803a93a0fb43.png"
        />
        <div class="text-group_4 flex-col justify-between">
          <span class="text_18">能力建设与咨询服务</span>
          <div class="text-wrapper_6">
            <span class="paragraph_3">
              󰀠培训赋能：开展发明创造、技术创新及知识产权领域的专业培训和咨询；
              <br />
              󰀠课题研究：承接政府及企业委托的科技、知识产权类课题研究与项目策划。
            </span>
            <span class="text_19"></span>
          </div>
        </div>
      </div>
      <div class="block_5 flex-row">
        <div class="image-text_1 flex-col justify-between">
          <img
            class="label_5"
            referrerpolicy="no-referrer"
            src="./assets/img/MasterDDSSlicePNGf982fee3a25773a2fca69ee1cf239d7f.png"
          />
          <div class="text-group_5 flex-col justify-between">
            <span class="text_20">国际合作与交流</span>
            <div class="text-wrapper_7">
              <span class="text_21">󰀠国际联动：与国内外发明协会建立合作，推动跨区域技术交流与资源对接。</span>
              <span class="text_22"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block_6 flex-col">
      <span class="text_23">友情链接</span>
      <img
        class="image_1"
        referrerpolicy="no-referrer"
        src="./assets/img/MasterDDSSlicePNG1a4e5004671c2c145736a8e21542b14b.png"
      />
    </div>
    <div class="block_7 flex-col">
      <div class="text-group_6 flex-col justify-between">
        <span class="text_24">云南省发明协会</span>
        <span class="text_25">地址：云南省昆明市五华区学府路海伦先生&nbsp;1&nbsp;栋&nbsp;11&nbsp;楼</span>
      </div>
      <div class="text-group_7 flex-col justify-between">
        <span class="text_26">联系方式</span>
        <span class="paragraph_4">
          副秘书长—刘志强：15368258967
          <br />
          副秘书长—张毓洀：18669000423
          <br />
          电话总机：0871-68588876
          <br />
          邮编：655000
        </span>
      </div>
      <a class="text-wrapper_8 flex-col" :href="'/mobile/lianxiwomen'"><span class="text_27">联系我们&nbsp;→</span></a>
    </div>
    <div class="text-wrapper_9 flex-col">
      <span class="text_28">版权所有：Copyright&nbsp;©&nbsp;云南省发明协会&nbsp;All&nbsp;rights&nbsp;reserved.</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuimage0: 'https://lanhu-oss.lanhuapp.com/MasterDDSSlicePNG2e15d47555b230701a5d3d381cfd2dcd.png',
          lanhutext0: '&nbsp;政策宣传与创新引导',
          lanhutext1:
            '󰀠政策普及：宣传国家科技创新、知识产权相关法规，推动发明创造与创新创业实践；<br/>󰀠氛围营造：倡导“尊重知识、崇尚创新、诚信守法”的社会环境，激励群众参与发明活动。',
          lanhutext2: ''
        },
        {
          lanhuimage0: 'https://lanhu-oss.lanhuapp.com/MasterDDSSlicePNG34a3104d7eeff6e919aac53416d840fb.png',
          lanhutext0: '活动组织与成果转化',
          lanhutext1:
            '󰀠展示交流：举办发明成果展览、推介会，组织参与国内外发明展会（如中国国际发明展）；<br/>󰀠成果应用：促进发明成果转化落地，服务知识产权商业化运用。',
          lanhutext2: ''
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