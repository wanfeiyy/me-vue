/**
 * Created by wy on 2016/10/20.
 */
module.exports = function (router) {
  router.map({
      // 首页
      '/index': {
          name: 'index',
          component: require('./views/home/index')
        },
      'story/:storyId': {
          name: 'content',
          component: require('./views/content/index')
      },
      'comment/:commentId': {
          name: 'comment',
          component: require('./views/comment/index.vue')
      },
      '/theme/:themeId': {
          name: 'theme',
          component: require('./views/theme/index.vue')
      },
      '/about': {
          name: 'about',
          component: require('./views/about/index.vue')
      },
      '/editor': {
          name: 'editor',
          component: require('./views/theme/editor.vue')
      }
  })
    // 默认主页
  router.redirect({
      '/':"index"
  });

    //注册路由切换前
  router.beforeEach(function (transition) {
      transition.next();
  });
    //注册路由切换后
  router.afterEach(function (transition) {
      console.log('成功浏览到: ' + transition.to.path)
  });

}
// export default (router) =>router.map({
//
// })