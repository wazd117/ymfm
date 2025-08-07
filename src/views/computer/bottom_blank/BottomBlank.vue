<template>
    <div class="page flex-col">
    <div class="box_36 flex-row justify-between">
        <div class="section_6 flex-col">
          <div class="text-wrapper_36 flex-row"><span class="text_36">友情链接</span></div>
          <div class="image-wrapper_3">
            <a class="zhongguofamingixiehuilink" :href="'https://www.cainet.org.cn/'" >
            <img
              class="image_7"
              referrerpolicy="no-referrer"
              src="./assets/img/MasterDDSSlicePNGb18d287589993e64ebd6fe1390f91706.png"
            /></a>

            <a class="shengwuyiyaolink" :href="'http://bmh.iflora.cn/'" >
            <img
              class="image_8"
              referrerpolicy="no-referrer"
              src="./assets/img/MasterDDSSlicePNGe086f39daa6c2b8955a5a6bb7d0108ce.png"
            /></a>
            
            <a class="ynuzhishichanquanlink" :href="'http://www.ip.ynu.edu.cn/'" >
            <img
              class="image_9"
              referrerpolicy="no-referrer"
              src="./assets/img/MasterDDSSlicePNGb0c18b56b45b37da6eee4b78a3741774.png"
            /></a>
          </div>
        </div>
        <div class="section_7 flex-col">
          <div class="block_20 flex-row">
            <div class="text-group_27 flex-col justify-between">
              <span class="text_37">云南省发明协会</span>
              <span class="text_38">地址：云南省昆明市五华区学府路海伦先生&nbsp;1&nbsp;栋&nbsp;11&nbsp;楼</span>
            </div>
          </div>
          <div class="block_21 flex-row justify-between">
            <div class="text-group_28 flex-col justify-between">
              <span class="text_39">联系方式</span>
              <span class="paragraph_6">
                副秘书长—刘志强：15368258967
                <br />
                副秘书长—张毓洀：18669000423
                <br />
                电话总机：0871-68588876
                <br />
                邮编：655000
              </span>
            </div>
            <a class="text-wrapper_15 flex-col" :href="'/computer/lianxiwomen'"><span class="text_40">联系我们&nbsp;→</span></a>
          </div>
        </div>
      </div>
      <div class="text-wrapper_18 flex-col">
      <span class="text_45">版权所有：Copyright&nbsp;©&nbsp;云南省发明协会&nbsp;All&nbsp;rights&nbsp;reserved.</span>
    </div>
    </div>
</template>

<script>
export default {
  name: 'BottomBlank',

};
</script>

<style scoped>

.box_36 {
  width: 51.2rem;
  height: 8.4rem;
  margin-bottom: 0.027rem;
}

.section_6 {
  background-color: rgba(255, 251, 239, 1);
  height: 8.4rem;
  border: 1px solid rgba(204, 204, 204, 1);
  width: 29.867rem;
  border-top:none;
  border-bottom: none;
}

.text-wrapper_36 {
  width: 1.92rem;
  height: 0.694rem;
  margin: 1.067rem 0 0 16.107rem;
}

.text_36 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
}

.image-wrapper_3 {
  overflow: hidden;
  width: 24.56rem;
  height: 3.094rem;
  margin: 1.067rem 0 2.48rem 4.8rem;
}

.image-wrapper_3 a {
  position: relative;
  display: inline-block;
  transition: transform 1s ease; /* 添加过渡效果 */
  overflow: hidden;
}

.image-wrapper_3 a:hover img {
  transform: scale(1.1); /* 鼠标悬停时放大图片 */
    border: none;
}

.image_7 {
  width: 7.84rem;
  height: 3.094rem;
}

.image_8 {
  width: 7.84rem;
  height: 3.094rem;
  margin-left: 0.534rem;
}

.image_9 {
  width: 7.84rem;
  height: 3.094rem;
  margin-left: 0.507rem;
}

.section_7 {
  background-color: rgba(255, 251, 239, 1);
  height: 8.4rem;
  width: 21.334rem;
}

.block_20 {
  width: 8.854rem;
  height: 1.494rem;
  margin: 1.067rem 0 0 1.067rem;
}

.text-group_27 {
  width: 8.854rem;
  height: 1.494rem;
}

.text_37 {
  width: 3.36rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 0.694rem;
}

.text_38 {
  width: 8.854rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.373rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 0.534rem;
  margin-top: 0.267rem;
}

.block_21 {
  width: 16rem;
  height: 4.16rem;
  margin: 0.534rem 0 1.147rem 1.067rem;
}

.text-group_28 {
  width: 5.547rem;
  height: 4.16rem;
}

.text_39 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 0.694rem;
}

.paragraph_6 {
  width: 5.547rem;
  height: 3.2rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.3rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: left;
  line-height: 0.8rem;
  margin-top: 0.267rem;
}

.text-wrapper_15 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 4px;
  height: 1.067rem;
  margin-top: 0.454rem;
  width: 3.04rem;
}

.text_40 {
  width: 1.974rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.373rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 0.267rem 0 0 0.534rem;
}

.text-wrapper_18 {
  background-color: rgba(255, 251, 239, 1);
  height: 2.667rem;
  border: 1px solid rgba(204, 204, 204, 1);
  margin-top: -0.026rem;
  width: 51.2rem;
  border-bottom: none;
  border-right: none;
  border-left: none;
}

.text_45 {
  width: 10.32rem;
  height: 0.534rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.373rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.534rem;
  margin: 1.067rem 0 0 20.454rem;
}

</style>