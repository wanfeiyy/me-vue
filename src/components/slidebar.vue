<template>
   <div id='slidebar'>
      <div class="sidebar-main">
         <h1>
            <i class="iconfont icon-menu" @click="toggleSidebar()"></i>
            <span>首页</span>
         </h1>
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
</style>
<script>

</script>
