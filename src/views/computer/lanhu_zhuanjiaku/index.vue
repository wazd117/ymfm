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
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'李四',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'王五',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'王五',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'李四',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'张三',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
        {
          headphotoSrc: require('@/views/computer/lanhu_zhuanjiaku/assets/img/testphoto.png'),
          zhuanjianame:'赵六',
          zhuanjiatouxian:'教授',
          zhuanjiatags:['人工智能','机器学习','深度学习','国家教授'],
          wenzijieshao:'国家特聘专家，在人工智能领域有二十余年研究经验。主持多项国家重点研发计划项目，发表高水平论文100余篇，获得国家科技进步奖一等奖。'
        },
      ],
      constants: {}
    };
  },

  methods: {}
};


</script>

<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />