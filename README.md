This project was bootstrapped with [vue-cli](https://github.com/vuejs/vue-cli)

## 介绍
适合想用`vue，ts以及class-component`写法开发手机端h5的项目基于`vue2.6.6`。状态管理`vuex`。路由是`vue-router`加入了`keep-alive`来做缓存。

### class-component写法
这里用的是[vue-property-decorato](https://github.com/kaorun343/vue-property-decorator)。可参考[vue-property-decorato用法](https://www.jianshu.com/p/d8ed3aa76e9b)

### 解决前进刷新后退不刷新问题
利用`keep-alive`解决[多路由，前进刷新，后退不刷新](https://segmentfault.com/a/1190000012083511)

### 手机适配方案
适配上我选择了`viewport`的方案可参考
[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

[再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)

### ui组建
项目引入的组件库是
[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)已经用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin)做了按需加载

### 数据请求
这边对[axios](https://github.com/axios/axios)中的post以及get等方法进行了一些封装。以及拦截器做好了配置，只需加入一些特定的处理。常用的`loading`已经加入。我们项目中还会选择在拦截器中做统一报错处理。

# 记录几个问题
## 一、safair浏览器兼容问题
### 1.input 去掉默认样式。
```css
 input {
   border: 0px;
   outline: none;
 }
```
### 2.image 显示不出 因为Viewport Units Buggyfill的原因。
```css
  img {
    content: normal !important;
  }
```
## 二、build问题
### 1.ts-loader问题。 解决：看vue-config。
### 2.按需加载 样式打不进去。 解决： parallel: false
### 3.publicPath 生产环境下记得改

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
