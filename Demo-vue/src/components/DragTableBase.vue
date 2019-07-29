<template>
  <div class="wrapper">
    <div class="drag-item-wrapper">
      <div class="drag-item" v-for="item of dragItems" :key="item.id">{{item.name}}</div>
    </div>
    <div class="table-wrap">
      <a-table :columns="columns"
        :dataSource="dataSource"
        :rowKey="record => record.id"
      ></a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragTableBase',
  data () {
    return {

    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array
    },
    dragItems: {
      type: Array
    }
  },
  mounted () {
    console.log(this.columns)
    console.log(this.dragItems)
  }
}
</script>

<style scoped>
.drag-item {
  display: inline-block;
}
</style>
