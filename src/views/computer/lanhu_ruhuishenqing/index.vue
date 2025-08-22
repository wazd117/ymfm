<template>
  <div class="page flex-col">
    <div class="box_1 flex-row">
      <div class="titlebutton">
        <TitleButton />
      </div>
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
          <router-link class="text_10" to="huiyuanzhijiaform">单位会员</router-link>
          <router-link class="text_11" to="huiyuanzhijiagerenhuiyuan">个人会员</router-link>
        </div>
      </div>
     
      <div v-if="form.membershipType === '单位会员'">
       <el-form :model="form" label-position="top">
       <div class="box_8 flex-row">
        <div class="column_1 flex-col">
           <el-form-item label="入会类型">
               <el-radio-group v-model="form.membershipType">
                       <el-radio label="单位会员"></el-radio>
                       <el-radio label="个人会员"></el-radio>
               </el-radio-group>
           </el-form-item>

           <el-form-item label="法人代表">
               <el-input placeholder="请输入" v-model="form.faren"></el-input>
            </el-form-item>

            <el-form-item label="电子邮箱">
               <el-input placeholder="请输入" v-model="form.dianziyouxiang"></el-input>
            </el-form-item>

            <el-form-item label="单位性质">
               <el-radio-group v-model="form.danweixingzhi">
                       <el-radio label="企业"></el-radio>
                       <el-radio label="事业"></el-radio>
                       <el-radio label="其他"></el-radio>
               </el-radio-group>
           </el-form-item>

           <el-form-item label="中级技术人员">
               <el-input placeholder="请输入" v-model="form.zhongjijishurenyuan"></el-input>
            </el-form-item>

     <el-form :model="form" label-position="top">
      <div class="box_10 flex-row">
        <div class="column_1 flex-col">
          <el-form-item label="单位logo">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          </div>
        </div>
        </el-form>

        </div>

        <div class="column_2 flex-col">
          <el-form-item  class="danweimingcheng" label="单位名称">
               <el-input placeholder="请输入" v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item class="lianxiren" label="联系人">
               <el-input placeholder="请输入" v-model="form.lianxiren"></el-input>
            </el-form-item>

            <el-form-item class="danweidizhi" label="单位地址">
               <el-input  placeholder="请输入" v-model="form.danweidizhi"></el-input>
            </el-form-item>

            <el-form-item class="zhigongrenshu" label="职工人数">
               <el-input placeholder="请输入" v-model="form.zhigongrenshu"></el-input>
            </el-form-item>

            <el-form-item class="chujijisuhrenyuan" label="初级技术人员">
               <el-input placeholder="请输入" v-model="form.chujijishurenyuan"></el-input>
            </el-form-item>
        </div>

        <div class="column_3 flex-col">

            <el-form-item label="社会信用代码">
               <el-input placeholder="请输入" v-model="form.shehuixinyongma"></el-input>
            </el-form-item>

            <el-form-item label="电话">
               <el-input placeholder="请输入" v-model="form.dianhua"></el-input>
            </el-form-item>

            <el-form-item label="邮编">
               <el-input placeholder="请输入" v-model="form.youbian"></el-input>
            </el-form-item>

            <el-form-item label="高技术人员">
               <el-input placeholder="请输入" v-model="form.gaojijishurenyuan"></el-input>
            </el-form-item>

            <el-form-item label="总计">
               <el-input placeholder="请输入" v-model="form.zongji"></el-input>
            </el-form-item>

        </div>

       </div>

       <div class="box_9 flex-col">
        
        <div class="jianyaoqingkuangtitle">近年来科技及发明创造工作发展简要情况(包括知识产权创造、运用、管理和保护工作情况)</div>          
        <el-input
               type="textarea"
               :rows="8"  
                placeholder="请输入"
                 v-model="form.developmentInfo">
             </el-input>
        <div class="zhuyishixiang">注意：会员必须遵守云南省发明协会章程，按时缴纳会费，积极参加会员活动</div>

         <el-button class="submit-btn2" @click="onSubmit" type="primary" size="small">提交</el-button>

       </div>
       </el-form>
       </div>

       <div v-if="form.membershipType === '个人会员'">
        <el-form :model="form" label-position="top">
       <div class="box_8 flex-row">
        <div class="column_1 flex-col">
           <el-form-item label="入会类型">
               <el-radio-group v-model="form.membershipType">
                       <el-radio label="单位会员"></el-radio>
                       <el-radio label="个人会员"></el-radio>
               </el-radio-group>
           </el-form-item>

           <el-form-item label="出生年月">
               <el-date-picker
                 v-model="form.establishmentDate"
                 type="date"
                 placeholder="请选择"
                 format="yyyy 年 MM 月 dd 日"
                class="shengrikuang"
                  value-format="yyyy-MM-dd">
             </el-date-picker>
            </el-form-item>

            <el-form-item label="民族">
               <el-input placeholder="请输入" v-model="form.ethnic"></el-input>
            </el-form-item>

            <el-form-item label="职务">
               <el-input placeholder="请输入" v-model="form.zhiwu"></el-input>
            </el-form-item>

           <el-form-item label="通讯地址">
               <el-input placeholder="请输入" v-model="form.tongxundizhi"></el-input>
            </el-form-item>

     <el-form :model="form" label-position="top">
      <div class="box_10 flex-row">
        <div class="column_1 flex-col">
          <el-form-item label="个人照片">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="gerenzhaopianUrl" :src="gerenzhaopianUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          </div>
        </div>
        </el-form>

        </div>

        <div class="column_2 flex-col">

          <el-form-item  class="danweimingcheng" label="姓名">
               <el-input placeholder="请输入" v-model="form.gerenname"></el-input>
            </el-form-item>

            <el-form-item class="lianxiren" label="学历">
               <el-input placeholder="请输入" v-model="form.xueli"></el-input>
            </el-form-item>

            <el-form-item class="danweidizhi" label="党派">
               <el-input  placeholder="请输入" v-model="form.dangpai"></el-input>
            </el-form-item>

            <el-form-item class="zhigongrenshu" label="职称">
               <el-input placeholder="请输入" v-model="form.zhicheng"></el-input>
            </el-form-item>

            <el-form-item class="chujijisuhrenyuan" label="邮编">
               <el-input placeholder="请输入" v-model="form.gerenyoubian"></el-input>
            </el-form-item>
        </div>

        <div class="column_3 flex-col">

                 <el-form-item label="性别">
               <el-radio-group v-model="form.gender">
                       <el-radio label="男"></el-radio>
                       <el-radio label="女"></el-radio>
                       <el-radio label="不详"></el-radio>
               </el-radio-group>
           </el-form-item>

            <el-form-item label="籍贯">
               <el-input placeholder="请输入" v-model="form.jiguan"></el-input>
            </el-form-item>

            <el-form-item label="工作单位">
               <el-input placeholder="请输入" v-model="form.gongzuodanwei"></el-input>
            </el-form-item>

            <el-form-item label="手机号">
               <el-input placeholder="请输入" v-model="form.shoujihaoma"></el-input>
            </el-form-item>

            <el-form-item label="E-MAIL">
               <el-input placeholder="请输入" v-model="form.email"></el-input>
            </el-form-item>

        </div>

       </div>

       <div class="box_9 flex-col">
        <div class="gongzuojianli">工作简历</div>          
        <el-input
               type="textarea"
               :rows="8"  
                placeholder="请输入"
                 v-model="form.gongzuojianli">
             </el-input>
        <div class="jianyaoqingkuangtitle">近年来科技及发明创造工作发展简要情况(包括知识产权创造、运用、管理和保护工作情况)</div>          
        <el-input
               type="textarea"
               :rows="8"  
                placeholder="请输入"
                 v-model="form.gerendevelopmentInfo">
             </el-input>
        <div class="zhuyishixiang">注意：会员必须遵守云南省发明协会章程，按时缴纳会费，积极参加会员活动</div>

         <el-button class="submit-btn" @click="onSubmit" type="primary" size="small">提交</el-button>

       </div>
       </el-form>
      </div>

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
          lianxiren: '',
          danweidizhi: '',
          dianziyouxiang: '',
          delivery: false,
          zhongjijishurenyuan: '',
          type: [],
          danweixingzhi: '企业',
          membershipType:'单位会员',
          higongrenshu: '',
          chujijishurenyuan: '',
          shehuixinyongma: '',
          dianhua: '',
          youbian: '',
          gaojijishurenyuan: '',
          faren: '',
          jianyaoqingkuang:'',
          zongji: '',
          developmentInfo:'',
          gerenname:'',
           birthday: '',
          ethnic: '',
          zhiwu: '',
          tongxundizhi: '',
          gender:'男',
          xueli:'',
          dangpai:'',
          zhicheng:'',
          gerenyoubian:'',
          jiguan:'',
          gongzuodanwei:'',
          shoujihaoma:'',
          email:'',
          gongzuojianli:'',
          gerendevelopmentInfo:'',
        },
        imageUrl: '',
        gerenzhaopianUrl:'',
      constants: {},
    };
  },
  methods: {
    onSubmit() {
        console.log('已提交!');
      },

       handleAvatarSuccess(res, file) {
      // URL.createObjectURL 会创建一个临时的URL，用于在本地预览图片
      this.imageUrl = URL.createObjectURL(file.raw); 
    },

     beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return (isJPG || isPNG) && isLt2M;
    }
  }
};
</script>
<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />
