<style src="./assets/styles/base.css"></style>
<style>
  [v-cloak]{
    display: none;
  }
  .v-cloak--block,.v-cloak--inline,.v-cloak--inlineBlock{
    display: none;
  }
  .ui-view {
    min-width: 320px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
  }
  .fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-leave {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .back-enter {
    opacity: 1;
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);
  }
  .back-leave{
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1475735604_8068495.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/font_1475735604_8068495.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), /* chrome,firefox */
    url('//at.alicdn.com/t/font_1475735604_8068495.ttf') format('truetype'), /* chrome,firefox,opera,Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_1475735604_8068495.svg#iconfont') format('svg'); /* iOS 4.1- */
    src: url('//at.alicdn.com/t/font_1475735604_8068495.eot')\0; /* ie8 fix */

  }

  .iconfont {
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-duotu:before { content: "\e601"; }
  .icon-iconfontjiantou1:before { content: "\e600"; }
  .icon-loading:before { content: "\e602"; }
  .icon-jiahao:before { content: "\e603"; }
  .icon-plusone:before { content: "\e604"; }
  .icon-comment:before { content: "\e605"; }
  .icon-signalwifioff:before { content: "\e606"; }
  .icon-like:before { content: "\e607"; }
  .icon-weekend:before { content: "\e608"; }
  .icon-home:before { content: "\e609"; }
  .icon-infooutline:before { content: "\e60a"; }
  .icon-menu:before { content: "\e60b"; }

</style>
<template>
  <div class='main'>
    <icon v-if="getShowLogo"></icon>
    <router-view class="ui-view" keep-alive :transition="effect"  transition-mode="out-in"></router-view>
  </div>
</template>
<script>
    import Icon from './components/icon.vue'
    import store from './vuex/store'
    import {initStore,showLogo} from './vuex/action'
    import {getShowLogo} from  './vuex/getters'
    export default {
      store,
      vuex: {
        actions: {
          initStore,
          showLogo
        },
        getters: {
          getShowLogo
        }
      },
      components: {
        Icon
      },
      ready () {
        this.getStory();
      },
      methods: {
        getStory () {
          this.$http.get('/api/4/news/latest').then( function (response) {
            this.initStore(response)
            this.showLogo(false)
          })
        }
      },
      data () {
        return {
          effect: 'fade', //路由模板动画参数
          routeList: [],     //访问周期中所访问了那些路径,在route.js中设置
          show_logo: true,
        }
      },
    }

</script>