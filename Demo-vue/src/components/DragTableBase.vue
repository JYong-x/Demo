<!--
  /**
  * 表格推拽组件
  * @desc  DragTable的子组件
  * @author 
  * @param {Array} [columns]    - 表头数据
  * @param {Array} [dataSource] - 表格数据
  * @param {Array} [dataItems] - 表格外的可推拽块
  * @param {Number} [dataTargetCol] - 表格的推拽目标列项
  * changeDataSource - 推拽完成后的表格数据
  * @example 调用示例
  *  <drag-table-base
   :columns="columns"
   :dragItems="dragItems"
   :dataSource="dataSource"
   :dragTargetCol="dragTargetCol"
   @changeDataSource="changeDataSource"></drag-table-base>
  */
   -->

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
      <span class="table-row-drag" slot="tags" slot-scope="tags">
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
          dragstart: e => {
            this.originItem = e.target
            this.originRecord = record
            this.originRowIndex = rowIndex
          },
          // dragenter: e => {},
          dragover: e => {
            e.preventDefault()
          },
          drop: e => {
            e.preventDefault()
            let targetDom = e.target
            let origin = this.dragItem.innerText
            if (!this.checkSameItem(record.tags, origin)) {
              record.tags.push(origin)
              this.dataSource[rowIndex] = record
              if (this.dragParent.className === 'table-row-drag') {
                let index = this.findIndex(this.originRecord.tags, this.originItem.innerText)
                this.originRecord.tags.splice(index, 1)
                this.dataSource[this.originRowIndex]
              }
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
      this.dragParent = e.path[1]
    },
    checkSameItem (arrData, checkItem) {
      return arrData.some((item) => {
        return item === checkItem
    })
    },
    findIndex (list, item) {
      return list.findIndex(it => {
        return it === item
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
