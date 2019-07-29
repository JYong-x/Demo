<template>
  <drag-table-base
   :columns="columns"
   :dragItems="dragItems"
   :dataSource="dataSource"></drag-table-base>
</template>

<script>
import DragTableBase from './DragTableBase'

const dataSource = [
  {
    targetType: '拖拽块1'
  },
  {
    targetType: '拖拽块2'
  },
  {
    targetType: '拖拽块3'
  },
]

const dragItems = [
  {
    name: '推拽块1',
    id: 1,
  },
  {
    name: '推拽块2',
    id: 2,
  },
  {
    name: '推拽块3',
    id: 3,
  },
  {
    name: '推拽块4',
    id: 4,
  },
  {
    name: '推拽块5',
    id: 5,
  }
]
const columns = [
  {
    title:'学生范围',
      dataIndex: 'targetType',
      key: 'targetType',
      width:120,
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
      dataSource
    }
  },
  components: {
    DragTableBase
  }
}
</script>

<style>

</style>

