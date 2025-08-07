<template>
 
  <div class="title-button">
      <div class="image-contianer_1">
          <a :href="'./shouye'">
        <img :src="require('./assets/img/MasterDDSSlicePNG9e4f0afb7009ff9f61fbd480c98d69ef.png')" class="image_1" />
        </a>
        <img :src="require('./assets/img/MasterDDSSlicePNGdca3da43733296a7c96e5d88d14cf365.png')" class="image_10" />
      </div> 
    
     <div class="block_2 flex-col">
        <router-link class="text-wrapper_1 flex-col" to="/computer/shouye"><span class="text_1">首页</span></router-link>
      </div>
      <div class="section_1 flex-col">
         <div class="text-wrapper_2 flex-col"><span class="text_4">协会概况</span>
          <div class="dropdown_1">
            <div class="dropdown_1-title">协会概况</div>
            <ul class="dropdown_1-list">
             <li><a href="/computer/xiehuigaikuangxiehuijianjie">协会简介</a></li>     
             <li><a href="/computer/xiehuigaikuangxiehuizhangcheng">协会章程</a></li> 
             <li><a href="/computer/xiehuigaikuangxiehuilingdao">协会领导</a></li>
             <li><a href="/computer/xiehuigaikuangxiehuiyeji">协会业绩</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section_2 flex-col">
        <div class="text-wrapper_3 flex-col"><span class="text_5">协会动态</span>
          <div class="dropdown_2">
            <div class="dropdown_2-title">协会动态</div>
            <ul class="dropdown_2-list">
             <li><a href="/computer/xiehuidongtaitongzhigonggao">通知公告</a></li>     
             <li><a href="/computer/xiehuidongtaihuiyuandongtai">要闻动态</a></li> 
             <li><a href="/computer/xiehuidongtaihuiyuandongtai">会员动态</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box_32 flex-col">
        <span class="text_2">Yunnan&nbsp;Province&nbsp;Association&nbsp;of&nbsp;Inventors</span>
        <span class="text_3">云南省发明协会</span>
        <div class="box_33 flex-row justify-between">
          <div class="section_3 flex-col">
            <div class="text-wrapper_4 flex-col"><span class="text_6">奖项专区</span>
            <div class="dropdown_3">
           <div class="dropdown_3-title">奖项专区</div>
            <ul class="dropdown_3-list">
             <li><a href="/computer/jiangxiangzhuanqufamingchuangyejiang">发明创业奖</a></li>     
             <li><a href="/computer/jiangxiangzhuanqushaoerfamingjiang">少儿发明奖</a></li> 
            </ul>
           </div>
           </div>
          </div>
          <div class="block_5 flex-col">
            <div class="text-wrapper_6 flex-col" to="/computer/huiyuanzhijiadanweihuiyuan"><span class="text_8">会员之家</span>
             <div class="dropdown_4">
              <div class="dropdown_4-title">会员之家</div>
              <ul class="dropdown_4-list">
              <li><a>入会申请</a></li>     
              <li><a>       </a></li>
              <li><a href="/computer/huiyuanzhijiadanweihuiyuan">单位会员</a></li>    
              <li><a href="/computer/huiyuanzhijiagerenhuiyuan">个人会员</a></li>
             </ul>
            </div>
            </div>
          </div>
          <div class="group_8 flex-col">
            <div class="text-wrapper_26 flex-col"><span class="text_47">研学活动</span></div>
          </div>
          <div class="group_9 flex-col">
            <div class="text-wrapper_27 flex-col"><span class="text_48">项目库</span></div>
          </div>
        </div>
      </div>
      <div class="box_30 flex-col">
        <router-link class="text-wrapper_28 flex-col" to="/computer/zhuanjiaku"><span class="text_49">专家库</span></router-link>
      </div>
      <div class="box_31 flex-col">
        <div class="text-wrapper_29 flex-col"><span class="text_50">最新技术推广</span></div>
      </div>
      <div class="box_34 flex-col">
        <router-link class="text-wrapper_30 flex-col" to="/computer/lianxiwomen"><span class="text_51">联系我们</span></router-link>
      </div>
      
      </div>


</template>


<script>
export default {
  name: 'TitleButton',

};
</script>


<style scoped>
/* 顶头导航按钮与左侧logo */

.image-contianer_1 {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
}

.image_1 {
  width: 3.707rem;
  height: 3.7rem;
  margin: 0.694rem 5.6rem 0 0.827rem;
}

.title-button {
  display: flex;
  flex: none;
  width: auto;
    background-color: rgba(255, 251, 239, 0.8) ;
    backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

}

.image_10 {
  width: 2.187rem;
  height: 0.64rem;
  margin: 0 auto 0.5rem 1.6rem;
}

.image-contianer_1 {
  display: flex;
  flex-direction: column; 
  margin-top: -0.4rem;
  align-items: center;
  justify-content: center; 
  background-color: transparent !important;
}

.block_2 {

  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 -0.9rem;
  align-items: center;    
  justify-content: center;
  background-color: transparent

}

/* 按钮背景鼠标悬置效果与文字效果 */
.text-wrapper_1:hover,
.text-wrapper_2:hover,
.text-wrapper_3:hover,
.text-wrapper_4:hover,
.text-wrapper_5:hover,
.text-wrapper_6:hover,
.text-wrapper_26:hover,
.text-wrapper_27:hover,
.text-wrapper_28:hover,
.text-wrapper_29:hover,
.text-wrapper_30:hover {
  background-color: white;
  border: 1px solid rgba(56, 70, 114, 1);
}

.text-wrapper_1:hover .text_1,
.text-wrapper_2:hover .text_4,
.text-wrapper_3:hover .text_5,
.text-wrapper_4:hover .text_6,
.text-wrapper_5:hover .text_7,
.text-wrapper_6:hover .text_8,
.text-wrapper_26:hover .text_47,
.text-wrapper_27:hover .text_48,
.text-wrapper_28:hover .text_49,
.text-wrapper_29:hover .text_50,
.text-wrapper_30:hover .text_51 {
  color: rgba(56, 70, 114, 1);
}



.text-wrapper_1 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_1 {
  width: 0.96rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;          
  text-align: center;
}

.section_1 {
    position: relative;
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 0.347rem;
  align-items: center;    
  justify-content: center;

}

.text-wrapper_2 {
  display: flex;
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}



.dropdown_1 {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 8px;
  width: 6rem;

}

.text-wrapper_2:hover .dropdown_1 {
  display: flex ;
}

.dropdown_1-title {
  position: relative !important;
  font-size: 0.5rem;
  font-weight: bold;
  color: rgba(56, 70, 114, 1);
  border-bottom: 2px solid rgba(56, 70, 114, 1); 
  width: 2rem;
  text-align: left;
  margin-left: -0.4rem;          
  padding-left: 0; 
}

.dropdown_1-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 0.05rem 0.1rem; 
  width: 4rem;

}

.dropdown_1-list li {
  display: block;      
  box-sizing: border-box;   
}

.dropdown_1-list li:nth-child(even) {
    position: relative;
    margin-left: 1rem; 
}

.dropdown_1-list li:nth-child(odd) {
     position: relative ;
     margin-left:-0.4rem ;
}


.dropdown_1-list a {
  color:rgba(51, 51, 51, 1) !important;
  font-size: 0.47rem !important;      
  line-height: 1.4;    
  white-space: nowrap ;      
}

.dropdown_1-list a {
  display: inline-block;
  font-size: 0.426rem;
  color: rgba(56, 70, 114, 1);
  text-decoration: none;
}

.dropdown_2 {
  display: none;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 8px;
  width: 6rem;

  position: absolute;
  left: 0;
  top: 100%;
}

.text-wrapper_3:hover .dropdown_2 {
  display: flex ;
}

.dropdown_2-title {
  position: relative !important;
  font-size: 0.5rem;
  font-weight: bold;
  color: rgba(56, 70, 114, 1);
  border-bottom: 2px solid rgba(56, 70, 114, 1); 
  width: 2rem;
  text-align: left;
  margin-left: -0.4rem;
  padding-left: 0; 
}

.dropdown_2-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 0.05rem 0.1rem; 
  width: 4rem;

}

.dropdown_2-list li {
  display: block;      
  box-sizing: border-box;   
}

.dropdown_2-list li:nth-child(even) {
    position: relative;
    margin-left: 1rem; 
}

.dropdown_2-list li:nth-child(odd) {
     position: relative ;
     margin-left:-0.4rem ;
}


.dropdown_2-list a {
  color:rgba(51, 51, 51, 1) !important;
  font-size: 0.47rem !important;      
  line-height: 1.4;    
  white-space: nowrap ;      
}

.dropdown_2-list a {
  display: inline-block;
  font-size: 0.426rem;
  color: rgba(56, 70, 114, 1);
  text-decoration: none;
}

.dropdown_3 {
  display: none;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 8px;
  width: 6.8rem;

  position: absolute;
  left: 0;
  top: 100%;
}

.text-wrapper_4:hover .dropdown_3 {
  display: flex ;
}

.dropdown_3-title {
  position: relative !important;
  font-size: 0.5rem;
  font-weight: bold;
  color: rgba(56, 70, 114, 1);
  border-bottom: 2px solid rgba(56, 70, 114, 1); 
  width: 2rem;
  text-align: left;
  margin-left: -0.4rem;
  padding-left: 0; 
}

.dropdown_3-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 0.05rem 0.1rem; 
  width: 4rem;

}

.dropdown_3-list li {
  display: block;      
  box-sizing: border-box;   
}

.dropdown_3-list li:nth-child(even) {
    position: relative;
    margin-left: 1rem; 
}

.dropdown_3-list li:nth-child(odd) {
     position: relative ;
     margin-left:-0.4rem ;
}


.dropdown_3-list a {
  color:rgba(51, 51, 51, 1) !important;
  font-size: 0.47rem !important;      
  line-height: 1.4;    
  white-space: nowrap ;      
}

.dropdown_3-list a {
  display: inline-block;
  font-size: 0.426rem;
  color: rgba(56, 70, 114, 1);
  text-decoration: none;
}

.dropdown_4 {
  display: none;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 8px;
  width: 6.8rem;

  position: absolute;
  left: 0;
  top: 100%;
}

.text-wrapper_6:hover .dropdown_4 {
  display: flex ;
}

.dropdown_4-title {
  position: relative !important;
  font-size: 0.5rem;
  font-weight: bold;
  color: rgba(56, 70, 114, 1);
  border-bottom: 2px solid rgba(56, 70, 114, 1); 
  width: 2rem;
  text-align: left;
  margin-left: -0.4rem;
  padding-left: 0; 
}

.dropdown_4-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 0.05rem 0.1rem; 
  width: 4rem;
  z-index:9999;
}

.dropdown_4-list li {
  display: block;      
  box-sizing: border-box;   
}

.dropdown_4-list li:nth-child(even) {
    position: relative;
    margin-left: 1rem; 
}

.dropdown_4-list li:nth-child(odd) {
     position: relative ;
     margin-left:-0.4rem ;
}


.dropdown_4-list a {
  color:rgba(51, 51, 51, 1) !important;
  font-size: 0.47rem !important;      
  line-height: 1.4;    
  white-space: nowrap ;      
}

.dropdown_4-list a {
  display: inline-block;
  font-size: 0.426rem;
  color: rgba(56, 70, 114, 1);
  text-decoration: none;
}

.text_4 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;          
  text-align: center;
}

.section_2 {

  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 0.32rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_3 {
  background-color: rgba(56, 70, 114, 1);
  position: relative;
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_5 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.box_32 {
  width: 14.08rem;
  height: 3.787rem;
  margin: 0.64rem 0 0 0.32rem;
}

.text_2 {
  width: 11.414rem;
  height: 0.774rem;
  overflow-wrap: break-word;
  color: rgba(198, 176, 91, 1);
  font-size: 0.533rem;
  font-family: Source Han Serif CN-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 0.774rem;
  margin-left: 1.334rem;
}

.text_3 {
  width: 6.72rem;
  height: 1.387rem;
  overflow-wrap: break-word;
  color: rgba(56, 70, 114, 1);
  font-size: 0.96rem;
  font-family: Source Han Sans-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 1.387rem;
  margin: 0.134rem 0 0 3.68rem;
}

.box_33 {
  width: 14.08rem;
  height: 1.227rem;
  margin-top: 0.267rem;
}

.section_3 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  justify-content: center;
  align-items: center;
}

.text-wrapper_4 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  position: relative;
  align-items: center;     
  justify-content: center;
}

.text_6 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.block_5 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  margin-left: 0.32rem;
  width: 3.28rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_6 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
  position: relative;
}

.text_8 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.group_8 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  margin-left: 0.32rem;
  width: 3.28rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_26 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_47 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.group_9 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  margin-left: 0.32rem;
  width: 3.28rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_27 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_48 {
  width: 1.44rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.box_30 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 0.32rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_28 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_49 {
  width: 1.44rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.box_31 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 0.32rem;
  align-items: center;    
  justify-content: center;
}

.box_34 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 0.32rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_29 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text-wrapper_30 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_50 {
  width: 2.88rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.text_51 {
  width: 2.88rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}

.section_4 {
  border-radius: 4px;
  height: 1.227rem;
  border: 1px solid rgba(56, 70, 114, 1);
  width: 3.28rem;
  margin: 3.2rem 0 0 0.32rem;
  align-items: center;    
  justify-content: center;
}

.text-wrapper_5 {
  background-color: rgba(56, 70, 114, 1);
  border-radius: 2px;
  height: 1.067rem;
  width: 3.12rem;
  margin: 0;
  align-items: center;     
  justify-content: center;
}

.text_7 {
  width: 1.92rem;
  height: 0.694rem;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 0.48rem;
  font-family: Source Han Serif CN-Regular;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 0.694rem;
  margin: 0;
  text-align: center;
}
</style>