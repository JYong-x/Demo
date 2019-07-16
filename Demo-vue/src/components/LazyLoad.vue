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
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562650577937&di=14a13f763c01986e28d36784becd9718&imgtype=0&src=http%3A%2F%2Fimg.yanj.cn%2Fstore%2Fgoods%2F4824%2F4824_e7bc5d96ccc3c9e27ba662d47299f435.jpg_max.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563291749929&di=a9cc75ca948e8d6802fe991b78284bbe&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0f939e0e12d267c543daf515d0a85b15d3fc40cc5248a-so7Q7E_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563291802494&di=10ef64d3b00e238d45ba0ca37ed09b2b&imgtype=0&src=http%3A%2F%2Fimages.ofweek.com%2FUpload%2FNews%2F2018-11%2F05%2Fruanxueke%2F1541381519780092303.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563291846310&di=459392ebff1d3a0b81fef8b286e1e9d9&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F02%2F65%2F67d58PICkMZ_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563291866300&di=28ad6b3812124785e631a82986dc5e30&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170923%2F8eaf9c4654874b2dbc2154780b97c9df.jpeg'
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
