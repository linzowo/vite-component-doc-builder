const fs = require('fs');
const yaml = require('js-yaml');

// 存储路由数据对象
const Router = {common: []};

/**
 * 获取头部信息并生成路由信息推入存储对象
 * @param {String} curPath 文件的路径
 * @returns {Boolean} 是否成功
 */
function getHeaderInfo(curPath) {
  // console.log('文件执行路径=======================>', curPath);

  const content = fs.readFileSync(curPath, 'utf-8');

  // console.log('文档数据', content);

  // 用于截取头部信息的 正则
  let re = /^---(.*?)---/gs;
  const res = re.exec(content);

  // console.log('正则结果:==============>', res);

  // 没有头部信息直接跳过
  if (!res) return false;
  // console.log('文件结果', res);

  // let s = res[1];
  const headObj = yaml.load(res[1]).map;
  // 头部信息无效 直接跳过
  if (!headObj) return false;

  // console.log('文件头部数据==============>：', headObj);
  // yaml.safeLoad(s)
  let { type, name, path } = headObj;

  // 没有路径信息 ==》 直接跳过
  if (!path) return false;

  const pathName = path.split('/').pop();

  /* console.log(
    '文件头部数据==============>：',
    'type:',
    type,
    'name:',
    name,
    'path:',
    path,
    'pathName:',
    pathName,
  ); */

  type = type || 'common';
  name = name || pathName;

  const curRouter = {
    text: name,
    link: `${path}/`,
  };

  // console.log('当前路由', curRouter);

  const routerList = Router[type];

  if (routerList) {
    routerList.push(curRouter);
  } else {
    Router[type] = [curRouter];
  }

  return true;
}

/**
 * 根据文件路径获取
 * @param {*} path
 */
function getRouter(path) {
  // 读取文件列表
  const files = fs.readdirSync(path);
  // console.log('文件列表', files);
  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    // console.log('执行文件', item);
    if (item === '.vitepres') continue;

    const curPath = path + '\\' + item;
    const cur = fs.lstatSync(curPath);

    if (cur.isDirectory() === true) {
      // console.log('子文件目录', fs.readdirSync(curPath));
      getRouter(curPath);
    } else if (
      item
        .split('.')
        .pop()
        .toLowerCase() === 'md'
    ) {
      getHeaderInfo(curPath);
    }
  }
}

const tempPath = process.cwd() + '\\docs\\.temp';
getRouter(tempPath);

if(!Router.common.length) delete Router.common

// console.log('路由数据', Router);
function getRouterConfig(langPrefix = '/') {
  return [
    {
      text: '文档介绍',
      link: `${langPrefix}`,
    },
    ...Object.entries(Router).map(([text, children]) => ({
      text,
      children,
    })),
  ];
}

module.exports = {
  getRouterConfig,
};
