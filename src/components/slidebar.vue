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
               <img src="../assets/images/common/avatr.jpg">
               <span>.Yi.</span>
            </div>
            <div class="sidebar-index" @click="toggleSidebar()" v-link="'/index'">
                  <i class="iconfont icon-home"></i>
                  <span>首页</span>
            </div>
         </div>
         <div v-for="topic in getThemes"
              class="sidebar-topics"
              @click="toggleSidebar()"
              v-link = "{name: 'theme', params: { themeId: topic.id }}"
         >
               <div>
                  {{ topic.name }}
                  <i class="iconfont icon-jiahao"></i>
               </div>
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

   .sidebar-block {
       position: fixed;
       top: 0;
       left: 0;
       height: 100%;
       width: 65%;
       margin: 0;
       background-color: #fff;
       z-index: 10000;
       transition: all 0.3s ease-in-out;
       overflow: auto;
       .sidebar-homepage {
           color: #FFF;
           width: 100%;
           box-sizing: border-box;
           line-height: 2rem;
           font-size: 1rem;
           background-color: #FF4B84;
           opacity: .8;
           padding: 0.2rem 0 0 0.5rem;
           .sidebar-about {
               height: 2rem;
               width: 100%;
               line-height: 2rem;
               img {
                   height: 1.2rem;
                   width: 1.2rem;
                   border-radius: 1rem;
               }
               span {
                   font-size: .6rem;
                   color: #ffffff;
                   position: absolute;
                   top: 0.3rem;
                   left: 2rem;
               }

           }
       }
       .sidebar-index {
           height: 1rem;
           line-height: 1rem;
           margin-left: .3rem;
           font-size: .6rem;
           .iconfont {
           }
           span{
               margin-left: .4rem;
               font-size: .5rem;
               vertical-align: top;
           }
       }
       .sidebar-topics {
           border-bottom: 1px solid #ccc !important;
           display: block;
           width: 100%;
           height: 1.2rem;
           line-height: 1.2rem;
           color: #000;
           padding-left: .78rem;
           box-sizing: border-box;
           background-color: #FFF;
           position: relative;
           border: none;
           font-size: 0.5rem;

           a {
               color: #000;
           }

           i {
               position: absolute;
               right: .4rem;
               font-size: .6rem;
           }
       }
   }

</style>
<script>
   import {getThemes} from  '../vuex/getters'
   export default {
       data() {
           return {
               hide : true,
           }
       },
       vuex: {
          getters: {
             getThemes,
          }
       },
       props: {
           title: {
               type: String,
               default() {
                   return ''
               }
           }

       },
       methods: {
           toggleSidebar() {
               this.hide = !this.hide;
           }
       },
   }
</script>
