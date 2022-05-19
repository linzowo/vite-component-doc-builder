/* 
主题配置文件
*/
// 引入样式文件及全局js等
// import '/@/design/index.less';

import theme from 'vitepress/dist/client/theme-default';
// import Antd from 'ant-design-vue';

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    // app.component(Button.name, Button)
    // console.log('应用数据', app);
    // console.log('路由数据', router);

    // 安装组件等
    // app.use(Antd);
  },
};
