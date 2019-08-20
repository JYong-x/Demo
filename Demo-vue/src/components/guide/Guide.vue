<template>
  <div class="container">
    <a-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">开始引导</a-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'
export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      nextBtnText: '下一步',
      prevBtnText: '上一步',
      closeBtnText: '关闭引导',
      doneBtnText: '结束'
    })
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style scoped>
 .container {
   margin-top: 30px;
   text-align: center
 }
</style>