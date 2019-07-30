<template>
  <drag-table-base
   :columns="columns"
   :dragItems="dragItems"
   :dataSource="dataSource"
   :dragTargetCol="dragTargetCol"
   @changeDataSource="changeDataSource"></drag-table-base>
</template>

<script>
import DragTableBase from './DragTableBase'

const dataSource = [
  {
    id: 1,
    tags: ['拖拽块1', '拖拽块4']
  },
  {
    id: 2,
    tags: ['拖拽块2']
  },
  {
    id: 3,
    tags: ['拖拽块3']
  },
]

const dragItems = [
  {
    name: '拖拽块1',
    id: 1,
  },
  {
    name: '拖拽块2',
    id: 2,
  },
  {
    name: '拖拽块3',
    id: 3,
  },
  {
    name: '拖拽块4',
    id: 4,
  },
  {
    name: '拖拽块5',
    id: 5,
  }
]
const columns = [
  {
    title:'学生范围',
      dataIndex: 'tags',
      key: 'tags',
      width:120,
      scopedSlots: { customRender: 'tags' },
  },
  {
    title:'年级',
      dataIndex: 'targetGrade',
      key: 'targetGrade',
      width:120,
  },
  {
    title:'学院',
      key: 'stuDeptName',
      dataIndex: 'stuDeptName',
      width:150,
  },
  {
    title:'专业',
      key: 'stuMajorName',
      dataIndex: 'stuMajorName',
      width:280,
  },
  {
    title:'操作',
      key: 'action',
      dataIndex: 'action',
      width:120,
  }
  ]




export default {
  name: 'DragTable',
  data () {
    return {
      columns,
      dragItems,
      dataSource,
      dragTargetCol: 0
    }
  },
  components: {
    DragTableBase
  },
  methods: {
    changeDataSource (data) {
      this.dataSource = data
      console.log(this.dataSource)
    }
  }
}
</script>

<style>

</style>

