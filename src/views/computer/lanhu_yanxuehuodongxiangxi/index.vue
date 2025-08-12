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
            <router-link class="yanxuehuodongfanhui" to="/computer/yanxuehuodong">研学活动/</router-link>
            <div class="xiangxi">详细</div>
          </div>
        </div>
       </div>


       <div class="box_2 flex-row">

           <div class="box_left flex-col">
             <div class="huodongjinajiebox">
              <div class="huodongjianjietitle">活动简介</div>
              <div class="huodongjianjiecontent">testtesttest文本ttest文本testtesttesttesttesttesttesttesttesttesttest文本ttest文本tetest文本ttest文本tetest文本ttest文本tetest文本ttest文本tetest文本ttest文本tetest文本ttest文本tetest文本ttest文本tetest文本ttest文本tetest文本ttest文本te</div>
             </div>

             <div class="xingchenganpaibox flex-col">

              <div class="xingchenganpaititle">行程安排</div>

        <div class="itinerary-item" v-for="(item, index) in itineraryList" :key="index">

        <div class="timeline-content">
           <div class="timeline-dot"></div>
            <div class="item-day">{{ item.day }}</div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-content1">{{ item.content1 }}</div>
            
            <div class="item-details-wrapper">
                <div class="detail-block flex-row" v-for="(detail, detailIndex) in item.content" :key="detailIndex">
                    <div class="item-subtitle">&bull;{{ detail.subtitle }}:</div>
                    <div class="item-text">{{ detail.text }}</div>
                </div>
            </div>
        </div>
    </div>
             </div>

           </div>
          
           <div class="box_right flex-col">
             <div class="baomingchuangkou flex-col">
              <div class="price"></div>
              <div class="baomingshijianwrapper flex-row">
                <img class="baomingshijianicon" src="/views/computer/lanhu_yanxuehuodongxiangxi/assets/img/baomingshijianicon.png">
                <div class="baomingshijian"></div>
              </div>
              
              <div class="yibaomingrenshuwrapper flex-row">
                <img class="yibaomingicon" src="/views/computer/lanhu_yanxuehuodongxiangxi/assets/img/rentouicon.png">
                <div class="yibaomingrenshu"></div>

              </div>
             </div>

           </div>
        </div>

        <div class="zhanwei"></div>

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
      itineraryList:[
      {
        day: '第一天',
        title: '抵达营地 & 开营仪式',
        // 'content' 是一个数组，里面包含多个对象
        content1:'testtesttest文本ttest文本testtesttest文本ttest文本tetest文本ttest文',
        content: [
          { subtitle: '小标题1', text: 'testtesttest文本ttest文本testtesttest文本ttest文本tetest文本ttest文' },
          { subtitle: '小标题2', text: 'testtesttest文本ttest文本testtesttest文本ttest文本tetest文本ttest文' },
          { subtitle: '小标题3', text: 'testtesttest文本ttest文本testtesttest文本ttest文本tetest文本ttest文' },
        ]
      },
      {
        day: '第二天',
        title: '机器人编程入门',
        content1:'testtesttest文本ttest文本testtesttest文本ttest文本tetest文本ttest文',
        content: [
          { subtitle: '上午', text: '学习图形化编程基础，了解传感器和马达的工作原理。' },
          { subtitle: '下午', text: '分组进行机器人搭建，并完成第一个“寻迹”挑战。' }
        ]
      },
      {
        day: '第三天',
        title: '创意发明工作坊 & 结营分享',
        content1:'testtesttest文本ttest文本testtesttest文本ttest文本tetest文本ttest文',
        content: [
          { subtitle: '上午', text: '自由发明环节，利用所学知识制作自己的创意作品。' },
          { subtitle: '下午', text: '进行成果展示和分享会，颁发结营证书。' }
        ]
      },
      ]
   };    
},
   
 methods: {}
};
</script>

<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />