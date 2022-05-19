# 公共组件文档库

## 组件文档编写模板

如果你需要为某个项目内组件编写文档，可以按以下步骤操作。

1. 在该组件所在目录下创建一个 markdown 文件，名称随意，建议使用`index.md`或`组件名.md`

2. 在该组件所在目录下创建一个用于演示的`dome.vue`,如果不想做演示，可不创建

3. 复制以下模板到你的 md 中，进行修改

### 文档模板

````markdown
---
map:
  # 组件所属类别 ==》 不给此选项默认存入common类别
  type: 公共组件
  # 组件侧边栏显示标题 ==》 不给此选项默认采用路径名称作为名称
  name: 组织选择/树选择
  # 映射到docs的路径 ==》 必传项不传不显示
  path: /OrganizationSelect
---

# OrganizationSelect 组织选择组件

用于筛选组织的多级树级组件

## 组织选择组件

### 基本用法

<!-- 如果没有演示用的demo，去掉以下demo标签对内容 -->

<demo src="./demo.vue"
  language="vue"
  title="描述标题"
  desc="组件用法描述"> </demo>

## API

\```ts
 import OrganizationSelect from '/@/components/OrganizationSelect.vue';
\```

## Props

| 参数  |                   说明                    |  类型  |   值   |
| ----- | :---------------------------------------: | :----: | :----: |
| value | 组织 id，可以是 undefined，参数为双向绑定 | Number | 例如 1 |
````

## 普通文档编写

按照标准markdown语法编写即可，无其他特殊需求。

## 启动文档项目

```bash
npm run dev

或

yarn run dev
```

## 特殊说明

1. 编写了路由自动生成机制会根据文档顶部的 yaml 信息生成对应的路由无须手动编写路由

::: tip
问题：路由自动生成工具，仅在每次项目启动时工作，后续不会进行热更新，如果更改了部分文档的顶部配置信息，需重启项目后路由才会生效。
:::

## 项目结构及文件说明

文档项目入口`/docs`

```
docs:.
|   index.md // 项目首页展示的内容
|   vite.config.js // 文档的vite配置，大部分配置可以采用你当前项目的配置
|
+---.temp // 临时文件夹，项目运行后会将文档数据打包到此目录
|
\---.vitepress // 文档项目配置文件
    |   config.js // 基础配置
    |   router.js // 生成路由相关方法和配置
    |
    \---theme
            index.js // 主题相关配置，此文件为项目的主入口，等价于我们项目src下的index或main文件，可以在此对app，router进行运行时处理，也可在此引入一些全局资源，如公共样式等
```
