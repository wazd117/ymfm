<template>
  <div class="page flex-col">
   <div class="titlebutton">
        <TitleButton />
   </div>

      <div class="box_1 flex-col">
          <div class="section_1 flex-col justify-end">
          <span class="paragraph_1">
          推动发明
           <br />
          保护创新
           </span>
           <div class="headblank flex-row">
            <router-link class="shouyefanhui" to="/computer/shouye">首页/</router-link>
            <router-link class="xiangmukufanhui" to="/computer/xiangmuku">项目库/</router-link>
            <div class="xiangxi">详细</div>
          </div>
        </div>
       </div>


       <div class="box_2 flex-col">
          <div class="zhuanjianame flex-col">测试标题</div>
          <div class="time">2021-01-01</div>
        </div>

        <div class="box_3 flex-col">
           <div class="wenzijieshao">测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test测试内容test</div>
        </div>


     <div class="bottomblank">
      <BottomBlank />
     </div>

   </div>
</template>

<script>

import BottomBlank from '../bottom_blank/BottomBlank.vue';
import TitleButton from '../title_button/TitleButton.vue';


export default {
  components: {
    TitleButton,
    BottomBlank,
  },
     computed: {},
   data() {
    return {
      // 这里可以放置一些数据
   };    
},
   
 methods: {}
};
</script>

<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />