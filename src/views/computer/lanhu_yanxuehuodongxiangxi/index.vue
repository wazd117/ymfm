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
             <div class="huodongjianjiebox">
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
     <div class="feiyongshuomingbox">
              <div class="feiyongshuomingtitle">费用说明</div>
              <div class="feiyongshuomingwrapper">
              <div class="feiyongshuoming" v-for="(item1,index) in feiyongshuoming" :key="index">&bull;&nbsp;&nbsp;{{ item1.feiyongshuomingcontent }}</div>
              </div>
            </div>

             <div class="zhuyishixiangbox">
              <div class="feiyongshuomingtitle">注意事项</div>
              <div class="zhuyishixiangwrapper"></div>
              <div class="feiyongshuoming" v-for="(item,index) in zhuyishixiang" :key="index">&bull;&nbsp;&nbsp;{{ item.zhuyishixiangcontent }}
              </div>
            </div>

           </div>
          
          
          

           <div class="box_right flex-col">
             <div class="baomingchuangkou flex-col">
              <div class="price">￥&nbsp;{{ formattedPrice }}</div>
              <div class="baomingshijianwrapper flex-row">
                <img class="baomingshijianicon" :src="require('./assets/img/baomingshijianicon.png')">
                <div class="baomingshijian">&nbsp;报名时间：{{ baomingchuangkou.begintime }}至{{ baomingchuangkou.endtime }}</div>
              </div>
              
              <div class="yibaomingrenshuwrapper flex-row">
                <img class="yibaomingicon" :src="require('./assets/img/rentouicon.png')">
                <div class="yibaomingrenshu">&nbsp;已报名：{{ baomingchuangkou.shijirenshu }}/{{ baomingchuangkou.zongrenshu }}</div>
              </div>

              <el-button class="likebaoming" @click="dialogVisible = true">立刻报名</el-button>
             </div>

           </div>
        </div>

     <div class="bottomblank">
      <BottomBlank />
     </div>

     <el-dialog
      title="报名确认"
      :visible.sync="dialogVisible"
      width="29.86rem"
      :before-close="handleClose">
   <el-form :model="form" label-position="top"> 

  <el-row :gutter="20">
    <el-col :span="12">
      <el-form-item label="姓名" required>
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="手机号" required>
        <el-input v-model="form.phone" placeholder="请输入"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="12">
      <el-form-item label="邮箱">
        <el-input v-model="form.email" placeholder="请输入"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="身份证号" required>
        <el-input v-model="form.idNumber" placeholder="请输入"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-form-item label="报名人数" required>
  <el-input-number v-model="form.attendees" :min="1" :max="10"></el-input-number>
  <span class="per-person-price">（每人 ¥{{ formattedPrice }}）</span>
</el-form-item>

  <div class="registration-notes">
    <p class="notes-title">报名须知：</p>
    <ul>
      <li>请确保提供的个人信息准确无误</li>
      <li>成功提交后，工作人员将在24小时内与您联系确认</li>
      <li>如有疑问，请联系电话：15368258967</li>
    </ul>
  </div>

  <div class="total-price flex-row">
    总计：<span>¥ {{ dialogTotalPrice }}</span>
    <div class="fixed-footer-buttons">
      <el-button class="quxiao">取消</el-button>
      
      <el-button class="tijiaobaoming" type="primary">提交报名</el-button>
    </div>
  </div>
   
    
  </el-form>
    
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
     computed: {
          formattedPrice() {
      // 1. 先确保 baomingchuangkou 和 price 都存在
      if (this.baomingchuangkou && this.baomingchuangkou.price) {
        // 2. 将价格字符串转换为数字
        const priceNumber = Number(this.baomingchuangkou.price);

        // 3. 检查转换是否成功，如果不是一个有效数字，则返回原始值或空
        if (isNaN(priceNumber)) {
          return this.baomingchuangkou.price; 
        }

        // 4. 使用 toLocaleString() 进行格式化
        return priceNumber.toLocaleString('en-US'); // 'en-US' 是一个常用的标准，确保逗号分隔
      }
      // 如果数据不存在，返回空字符串
      return '';
    },

      dialogTotalPrice() {
    // 1. 将 baomingchuangkou.price 字符串转为数字
    const unitPrice = Number(this.baomingchuangkou.price);
    
    // 2. 检查转换是否有效
    if (isNaN(unitPrice)) {
      return '价格错误'; // 或者返回 0
    }
    
    // 3. 计算总价
    const total = this.form.attendees * unitPrice;
    
    // 4. 格式化并返回
    return total.toLocaleString('en-US');
  }


     },
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
      ],

      feiyongshuoming:[
        {
           feiyongshuomingcontent:'全程住宿（含早餐）：青城山度假酒店，标准双人间', 
        },
        {
           feiyongshuomingcontent:'交通：乘坐青城山公交车或地铁2号线到达营地，步行约5分钟。', 
        },
        {
           feiyongshuomingcontent:'到达时间：7月1日（周日）下午14:00。', 
        },
         {
           feiyongshuomingcontent:'测试。', 
        },
    ],

    zhuyishixiang:[
        {
           zhuyishixiangcontent:'行前准备 请携带防晒用品、雨具、舒适的运动鞋、保暖外套等。', 
        },
        {
           zhuyishixiangcontent:'行前准备 请携带防晒用品、雨具、舒适的运动鞋、保暖外套等。', 
        },
        {
           zhuyishixiangcontent:'行前准备 请携带防晒用品、雨具、舒适的运动鞋、保暖外套等。', 
        },
         {
           zhuyishixiangcontent:'测试。', 
        },
    ],

    baomingchuangkou:{
          price: '2000', 
          begintime: '2021-07-01', 
          endtime: '2021-07-31', 
          zongrenshu:'30',
          shijirenshu:'10',
    },
          dialogVisible: false, // 控制整个弹窗的显示
      
      // 表单数据对象，用于双向绑定
      form: {
        name: '',
        phone: '',
        email: '',
        idNumber: '',
        attendees: 1, // 报名人数默认为1
      },
    
   };    
},
   
 methods: {
  handleClose(done){
    done();
  },

  handleConfirm() {
    // 处理用户点击“确定”的逻辑
    console.log('用户确认报名，表单数据为:', this.form);
    this.dialogVisible = false; // 关闭弹窗
  }
 }
};
</script>

<style scoped lang="css" src="./assets/index.rem.css" />
<style scoped lang="css" src="@/assets/common.css" />