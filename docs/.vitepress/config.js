const { getRouterConfig } = require('./router');
const { resolve } = require('path');

const base = process.env.NODE_ENV === 'production' ? '/doc' : '';

module.exports = {
  title: '公共组件文档库',
  description: '用于存储前端开发中常用的公共组件，公共方法，正则规则，以及一些特殊文档。',
  alias: {
    '@': resolve('./src'),
  },
  base,
  // outDir: '../dist',
  themeConfig: {
    lang: 'zh-CN',
    lastUpdated: '最近更新',
    repo: 'http://xxx.xxx.xx/xx/xx',
    repoLabel: '仓库地址',
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '公共组件文档库',
        description: '用于存储前端开发中常用的公共组件，公共方法，正则规则，以及一些特殊文档。',
        // label: '中文',
        // selectText: '语言',
        nav: [
          // { text: '指南', link: '/zh/' },
          // { text: '文档', link: `/zh/${kebabCase('useSize')}/` },
        ],
        sidebar: getRouterConfig('/'),
      },
    },
  },
};
