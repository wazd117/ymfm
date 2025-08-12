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

          <img class="headphoto_1" referrerpolicy="no-referrer" :src="item.headphotoSrc" />

         <div class="youce_box flex-col">
              <div class="zhuanjiatoulan flex-row">
                 <div class="zhuanjianame">{{ item.zhuanjianame }}</div>
                 <div class="zhuanjiatouxian">{{item.zhuanjiatouxian}}</div>
              </div>
            <div class="zhuanjiajieshao flex-col">
              <div class="zhuanjiatagwrapper flex-row">
              <div
                class="zhuanjiatag"
                v-for="(tag, tagIndex) in item.zhuanjiatags"
                :key="tagIndex"
              >
                {{ tag }}
            </div>
             </div>
              <div class="wenzijieshao">{{ item.wenzijieshao }}</div>
            </div>
             <el-button plain @click="showExpertDetails(item)" class="chakanxiangxi flex-col"><span class="ckxx">查看详细&nbsp;→</span></el-button>
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

    <el-dialog
      title="专家详情"
      :visible.sync="dialogVisible"
      width="22.36rem"
      class="expert-dialog"
    >

   <div v-if="selectedExpert">
    <div class="dialog-header flex-row">
      <img
        :src="selectedExpert.headphotoSrc"
        class="dialog-headphoto"
        referrerpolicy="no-referrer"
      />
      <div class="dialog-title-wrapper flex-col">
      <div class="dialog-title-info flex-row">
        <span class="dialog-name">{{ selectedExpert.zhuanjianame }}</span>
        <span class="dialog-title">{{ selectedExpert.zhuanjiatouxian }}</span>
        </div>
        <div class="dialog-tags">
          <span
            v-for="tag in selectedExpert.zhuanjiatags"
           :key="tag"
            class="dialog-tag-item"
           >{{ tag }}</span>
         </div>
      </div>
    </div>

    <div class="gerenjianjie">个人简介</div>

    <p class="dialog-intro">{{ selectedExpert.wenzijieshao }}</p>

        <div class="yanjiuchengguotitle">研究成果</div>
        <ul class="yanjiuchengguowrapper">

      <li
            v-for="neirong1 in selectedExpert.yanjiuchengguo"
           :key="neirong1"
            class="yanjiuchengguo"
           >&bull;&nbsp;&nbsp;{{ neirong1 }}</li>
    </ul>
  </div>




 
     
    </el-dialog>

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

      dialogVisible: false,
      selectedExpert: null,

      zhuanjiaList: [
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 50 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto2.png'),
          zhuanjianame:'李四',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 11111 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto3.png'),
          zhuanjianame:'王五',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 344432423 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto4.png'),
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 555555 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 67546 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto2.png'),
          zhuanjianame:'王五',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 243234324 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto3.png'),
          zhuanjianame:'李四',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 2340 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto4.png'),
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 55540 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto3.png'),
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 78678 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto2.png'),
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。',
             yanjiuchengguo: [
          '发表 SCI 论文 9876 余篇',
          '获得国家科技进步一等奖',
          '主持“国家重点研发计划”项目'
        ]
        },
      ],
      constants: {}
    };
  },

  methods: {
    showExpertDetails(expert) {
      this.selectedExpert = expert;
      this.dialogVisible = true;
    },
  }
};


</script>

<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />