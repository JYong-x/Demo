<template>
  <div class="nav-bar">
    <router-link tag="a" id="a-map" to="/helloAMap">AMap</router-link>
    <router-link tag="a" id="lazy-load" to="/lazyLoad">lazyLoad</router-link>
    <!-- <router-link tag="a" id="table" to="/table">Table</router-link> -->
    <router-link tag="a" id="drag-table" to="/dragTable">DragTable</router-link>
    <!-- <router-link tag="a" id="table-Two" to="/tableTwo">TableTwo</router-link> -->
    <router-link tag="a" to="/guide">Guide</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    /* border-bottom: 1px solid #ccc; */
    text-align: center
  }
  a {
    display: inline-block;
    margin: 0 10px;
    padding: 0 10px;
    background: #eee;
    border-radius: 5px;
    line-height: 40px;
  }
</style>
