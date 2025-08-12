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
        <div class="text-wrapper_7 flex-row">
          <span class="text_33">全部</span>
          <router-link class="text_34" to="xiehuigaikuangxiehuizhangcheng">电子信息</router-link>
          <router-link class="text_35" to="xiehuigaikuangxiehuilingdao">生物医药</router-link>
          <router-link class="text_36" to="xiehuigaikuangxiehuiyeji">化学化工</router-link>
          <router-link class="text_37" to="xiehuigaikuangxiehuiyeji">机械装备</router-link>
          <router-link class="text_38" to="xiehuigaikuangxiehuiyeji">节能环保</router-link>
          <router-link class="text_39" to="xiehuigaikuangxiehuiyeji">新材料</router-link>
          <router-link class="text_40" to="xiehuigaikuangxiehuiyeji">其他</router-link>
        </div>
    </div>
    </div>

    <div class="tongzhigonggaorow_1">
    <el-row :gutter="30">
      <el-col
        v-for="(item, index) in zhuanjiaList"
        :key="index"
        :span="12"
      >
        <div class="image-wrapper_1 flex-row">
         <div class="youce_box flex-col">
              <div class="zhuanjiatoulan flex-row">
                 <div class="zhuanjianame">{{ item.zhuanjianame }}</div>
              </div>
              <div class="time">{{ item.time }}</div>
            <div class="zhuanjiajieshao flex-col">
             
              <div class="wenzijieshao">{{ item.wenzijieshao }}</div>
              <div class="jishuyoushi">技术优势</div>
               <div class="zhuanjiatagwrapper flex-row">
              <div
                class="zhuanjiatag"
                v-for="(tag, tagIndex) in item.zhuanjiatags"
                :key="tagIndex"
              >
                {{ tag }}
            </div>
             </div>

             <div class="yingyonglingyu">应用领域</div>
             <div class="yingyongtagwrapper flex-row">
              <div
                class="yingyongtag"
                v-for="(tag1, tagIndex1) in item.yingyongtags"
                :key="tagIndex1"
              >
                {{ tag1 }}
            </div>
            </div>
            </div>
             <router-link class="chakanxiangxi flex-col" to="/computer/zuixinjishutuiguangxiangxi" ><span class="ckxx">查看详细&nbsp;→</span></router-link>
          </div>
        </div>
      </el-col>
      
    </el-row>
  </div>

  <el-pagination
        background
        size="small"
        :page-size="20"
        :pager-count="11"
         class="bottom-pagination"
         layout="prev, pager, next,jumper"
        :total="300"
       />

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
      zhuanjiaList: [
        {
          
          zhuanjianame:'项目a',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','机器学习','深度学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
        {
          zhuanjianame:'项目b',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','机器学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
        {

          zhuanjianame:'项目c',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','机器学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
        {
         
          zhuanjianame:'项目d',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['物联网','AIGC','地理信息'],
        },
        {
    
          zhuanjianame:'项目e',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['物联网','AIGC','地理信息'],
        },
        {

          zhuanjianame:'项目f',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['物联网','AIGC','地理信息'],
        },
        {
   
          zhuanjianame:'项目g',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
        {

          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['xx技术有限公司','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
        {
         
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
        {
        
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          time:'2021-01-01',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
          yingyongtags:['智能城市','智能医疗','物联网'],
        },
      ],
      constants: {}
    };
  },

  methods: {
    showModal(expert) {
      this.selectedExpert = expert;
      this.isModalVisible = true;
    },
    // 关闭弹窗的方法
    closeModal() {
      this.isModalVisible = false;
    },
  }
};


</script>

<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />