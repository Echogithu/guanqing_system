# guanqing_system

[![React](https://img.shields.io/badge/react-^16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.0.3-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![dva](https://img.shields.io/badge/dva-^2.1.0-orange.svg?style=flat-square)](https://github.com/dvajs/dva)

* 基于[react](https://github.com/facebook/react)，[ant-design](https://github.com/ant-design/ant-design)，[dva](https://github.com/dvajs/dva)，[Mock](https://github.com/nuysoft/Mock) 企业级后台管理系统最佳实践。
* 基于 Antd UI 设计语言，提供后台管理系统常见使用场景。
* 基于[dva](https://github.com/dvajs/dva)动态加载 Model 和路由，按需加载。
* 使用[umi](https://github.com/umijs/umi)本地调试和构建，其中 Mock 功能实现脱离后端独立开发。
* 浅度响应式设计。

### 快速开始

克隆项目文件:

```bash
git clone https://github.com/Echogithu/guanqing_system.git
```

进入目录安装依赖:

```bash
#开始前请确保没有安装roadhog、webpack到NPM全局目录, 国内用户推荐yarn或者cnpm
npm i 或者 yarn install
```

开发：

```bash
npm run start
打开 http://localhost:8000 #端口在package.json中cross-env后加上 PORT=8000指定
```

构建：
[详情](https://github.com/zuiidea/antd-admin/issues/269)

代码检测：

```bash
npm run lint
```

## FAQ

* 项目打包后如何部署？ [#269](https://github.com/zuiidea/antd-admin/issues/269)
* 如何做权限管理？ [#384](https://github.com/zuiidea/antd-admin/issues/384)
* 如何使用 mock.js 模拟接口，怎么使用线上接口？ [#348](https://github.com/zuiidea/antd-admin/issues/348)
* 如何使用 Iconfont，如何使用本地的 svg 图标？ [#270](https://github.com/zuiidea/antd-admin/issues/270)
* 怎么按版本打包，上线时不影响正在访问的用户？ [#449](https://github.com/zuiidea/antd-admin/issues/449)
* windows 处理 CRLF？[参考](http://blog.csdn.net/lysc_forever/article/details/42835203)

  ```bash
  git config --global core.autocrlf false
  ```
