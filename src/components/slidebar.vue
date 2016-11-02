<template>
   <div id='slidebar'>
      <div class="sidebar-main">
         <h1>
            <i class="iconfont icon-menu" @click="toggleSidebar()"></i>
            <span v-if="this.$route.path === '/index'">首页</span>
            <span v-else>{{ title }}</span>
         </h1>
      </div>
      <div class="sidebar-mask"
           :class="{'sidebar-block-hide': hide}"
           @click="toggleSidebar()">
      </div>
      <div class="sidebar-block" :class="{'sidebar-block-hide': hide}">
         <div class="sidebar-homepage">
            <div class="sidebar-about" @click="toggleSidebar()" v-link="'/about'">
               <img src="http://tva2.sinaimg.cn/crop.518.65.901.901.180/b2f93831jw8evp8z6co3vj21gx0ts4c2.jpg">
               <span>gundam1993</span>
            </div>
            <div @click="toggleSidebar()" v-link="'/index'">
                  <i class="iconfont icon-home"></i>
                  <span>首页</span>
            </div>
         </div>
      </div>
         <div v-for="topic in topics"
              class="sidebar-topics"
              @click="toggleSidebar()">
              v-link="{name: 'theme', params: { themeId: topic.id }}" >
               <div>
                  {{ topic.name }}
                  <i class="iconfont icon-jiahao"></i>
               </div>
         </div>
   </div>
</template>
<style lang="scss" scoped>
   #slidebar{
      position: fixed;
      height: 1rem;
      width: 100%;
      background: #282828;
      top: 0;
      left: 0;
      z-index: 999;
      .sidebar-main {
         height: 1rem;
         line-height: 1rem;
         i {
            font-size: .9rem;
            margin: 0 0.5rem;
            color: #fff;
            opacity:0.9;
          }
         span {
            letter-spacing: .02rem;
            vertical-align: top;
            font-size: .5rem;
            line-height: 1rem;
            color: #efefef;
            font-weight: 500;
         }
      }
   }

   .sidebar-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1000;
   }
   .sidebar-block-hide {
      transform: translateX(-100%);
      opacity: 0;
      transition: all 0.3s ease-in-out;
   }
</style>
<script>
   export default {
       data() {
           return {
               hide : true,
               topics: [],
         }
      }
   }
</script>
