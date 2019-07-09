# vue图片懒加载(vue-lazyload)使用

>官方地址[点这里](https://github.com/hilongjw/vue-lazyload),[demo预览](https://jimmy-xiang.github.io/Demo/#/lazyLoad), demo地址[点这里](https://github.com/Jimmy-xiang/Demo/tree/master/Demo-vue)
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
