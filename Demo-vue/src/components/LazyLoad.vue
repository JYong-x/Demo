<template>
  <div class="lazy-load">
    <li v-for="(item, index) of picList" :key="index">
      <img class="pic" v-lazy="item">
    </li>
  </div>
</template>

<script>
export default {
  name: 'LazyLoad',
  data () {
    return {
      picList: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562650577938&di=d83dc20192090337c3ae1ac4af4a6a76&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F15%2F20180815104043_bocaq.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562650577938&di=248279fa82cce97bca99196b7d08d4e7&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20150731%2Fliubianxingkejiganshipinsucai_4753838.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562650577937&di=14a13f763c01986e28d36784becd9718&imgtype=0&src=http%3A%2F%2Fimg.yanj.cn%2Fstore%2Fgoods%2F4824%2F4824_e7bc5d96ccc3c9e27ba662d47299f435.jpg_max.jpg'
      ]
    }
  }
}
</script>

<style scoped>
  .lazy-load {
    margin-top: 30px;
    text-align: center
  }
  .pic {
    width: 300px;
    height: 200px;
    margin: 6px
  }
</style>
