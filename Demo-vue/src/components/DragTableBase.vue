<template>
  <div class="wrapper">
    <div class="drag-item-wrapper">
      <div
        class="drag-item"
        draggable="true"
        v-for="item of dragItems"
        @dragstart="dragstart"
        :key="item.id"
      >{{item.name}}</div>
    </div>
    <div class="table-wrap">
      <a-table
        class="table-row"
        :columns="columns"
        :dataSource="dataSource"
        :rowKey="record => record.id"
      >
      <span slot="tags" slot-scope="tags">
        <div class="drag-item" draggable="true" @dragstart="dragstart" v-for="item in tags" :key="item">{{item}}</div>
      </span>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragTableBase",
  data() {
    return {};
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
    },
    dragTargetCol: {
      type: Number
    }
  },
  created() {
    this.columns[this.dragTargetCol].customCell = (record, rowIndex) => {
      return {
        on: {
          // dragenter: e => {},
          dragover: e => {
            e.preventDefault()
          },
          drop: e => {
            e.preventDefault()
            let targetDom = e.target
            let origin = this.dragItem.innerText
            console.log(record)
            if (!this.checkSameItem(record.tags, origin)) {
              record.tags.push(origin)
              this.dataSource[rowIndex] = record
              this.$emit('changeDataSource', this.dataSource)
            }
          }
        }
      };
    };
  },
  // mounted() {},
  methods: {
    dragstart (e) {
      this.dragItem = e.target
    },
    checkSameItem (arrData, checkItem) {
      return arrData.some((item) => {
        return item === checkItem
    })
    }
  }
};
</script>

<style scoped>
.drag-item {
  display: inline-block;
  margin: 0 10px;
  padding: 0 5px;
  border: 1px solid #999;
  line-height: 21px;
}
</style>
