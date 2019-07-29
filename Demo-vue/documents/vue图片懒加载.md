# vue图片懒加载(vue-lazyload)使用

>图片懒加载可以防止页面一次性向服务器发送大量请求，以达到减少或延迟请求数，缓解浏览器的压力，增强用户体验的作用

[插件源码](https://github.com/hilongjw/vue-lazyload)
[DEMO预览](https://jimmy-xiang.github.io/Demo/#/lazyLoad)
[DEMO地址](https://github.com/Jimmy-xiang/Demo/tree/master/Demo-vue)

## 使用

1. 安装插件

```javasxript
npm install vue-lazyload --save
```

2. 在main.js中引入

```javascript
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preload:1.3,//预加载的宽高
  loading:"img的加载中的显示的图片的路径",
  error:"img加载失败时现实的图片的路径",
  attempt:3,//尝试加载的次数
  listenEvents:['scroll','wheel','mousewheel','resize',
  'animationend','transitionend','touchmove'], //想让vue监听的事件
})
```

3. 在需要懒加载图片的组件中使用

```javascript
<li v-for="(item, index) of picList" :key="index">
  <img class="pic" v-lazy="item"> // item为图片的URL地址
</li>
```

over
