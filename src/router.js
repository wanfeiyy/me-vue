/**
 * Created by wy on 2016/10/20.
 */
module.exports = function (router) {
  router.map({
      // 首页
      '/index': {
          name: 'index',
          component: require('./views/home/index')
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