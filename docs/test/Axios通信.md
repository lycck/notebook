# Axios通信

## 介绍

Axios 是一个开源的可以用在浏览器端和 NodeJS 的异步通信框架，她的主要作用就是实现 AJAX 异步通信

## 特点

### 大致原理

1

![image-20220608170957470](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20220608170957470.png)

## 原因

由于 Vue.js 是一个视图层框架且作者(尤雨溪) 严格准守SoC (关注度分离原则)，所以 Vue.js 并不包含 Ajax 的通信功能，为了解决通信问题，作者单独开发了一个名为 vue-resource 的插件，不过在进入2.0 版本以后停止了对该插件的维护并推荐了 Axios 框架。**就是不直接操作 DOM 元素发请求**

## 使用

```js
npm install axios

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

```xml
<script>
	axios.get("../data.json").then(res => (this.info=res.data));
</script>
```

