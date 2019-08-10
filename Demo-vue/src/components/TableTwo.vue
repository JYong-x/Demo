<template>
  <div>
    <a-spin :spinning="spinning">
      <a-table
        :columns="columns"
        :dataSource="generalCourseData"
        :rowKey="record => record.id"
        :pagination="false">
        <div class="grade" slot="grade" slot-scope="text, item, number" v-if="number === 0">
          <div class="grade-dropdown-wrap">
            <a-dropdown :trigger="['click']">
              <span>
                <a-icon type="caret-down" />{{currentDataMes.currentGrade}}
              </span>
              <a-menu
                slot="overlay"
                @click="">
                <a-menu-item v-for="item of currentDataMes.gradeList" :key="item" @click="changeCurrentData(item, currentDataMes.currentCampu)">
                  <span>{{item}}</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
        <div class="campu" slot="campu" slot-scope="text, item, number" v-if="number === 1">
          <div class="campu-dropdown-wrap">
            <a-dropdown :trigger="['click']">
              <span>
                <a-icon type="caret-down" />{{currentDataMes.currentCampu}}
              </span>
              <a-menu
                slot="overlay"
                @click="">
                <a-menu-item v-for="item of currentDataMes.campuList" :key="item" @click="changeCurrentData(currentDataMes.currentGrade, item)">
                  <span>{{item}}</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </a-table>
    </a-spin>
  </div>
</template>

<script>
const columns = [
  {
    title: '年级',
    dataIndex: 'grade',
    scopedSlots: {customRender: 'grade'},
  },
  {
    title: '校区',
    dataIndex: 'campu',
    scopedSlots: {customRender: 'campu'}
  },
  {
    title: '专业',
    dataIndex: 'specialty',
    customRender: (value, row, index) => {
      if (index <= 1) {
        return ''
      } else {
        return value
      }
    }
  },
  {
    title: '各学分分布人数',
    dataIndex: 'creditDistribu',
    children: [
      {
        title: '0',
        dataIndex: 'creditZero',
      },
      {
        title: '1',
        dataIndex: 'creditOne',
      },
      {
        title: '2',
        dataIndex: 'creditTwo'
      },
      {
        title: '3',
        dataIndex: 'creditThree'
      },
      {
        title: '4',
        dataIndex: 'creditFour'
      },
      {
        title: '5',
        dataIndex: 'creditFive'
      },
      {
        title: '小计0-5',
        dataIndex: 'creditZeroToFive'
      },
      {
        title: '6',
        dataIndex: 'creditSix'
      },
      {
        title: '7',
        dataIndex: 'creditSeven'
      },
      {
        title: '>=8',
        dataIndex: 'greaterEight'
      },
      {
        title: '总计',
        dataIndex: 'total'
      }
    ]
  }
]
const data = [
  {
    id: 1,
    grade: '2015',
    campu: null,
    specialty: null,
    creditZero: '100',
    creditOne: '100',
    creditTwo: '100',
    creditThree: '100',
    creditFour: '100',
    creditFive: '100',
    creditZeroToFive: '500',
    creditSix: '100',
    creditSeven: '100',
    greaterEight: '100',
    total: '800',
  },
  {
    id: 2,
    grade: '2016',
    campu: 'A区',
    specialty: '计算机',
    creditZero: '100',
    creditOne: '100',
    creditTwo: '100',
    creditThree: '100',
    creditFour: '100',
    creditFive: '100',
    creditZeroToFive: '500',
    creditSix: '100',
    creditSeven: '100',
    greaterEight: '100',
    total: '800',
  },
  {
    id: 3,
    grade: '2015',
    campu: 'A区',
    specialty: '计算机',
    creditZero: '100',
    creditOne: '100',
    creditTwo: '100',
    creditThree: '100',
    creditFour: '100',
    creditFive: '100',
    creditZeroToFive: '500',
    creditSix: '100',
    creditSeven: '100',
    greaterEight: '100',
    total: '800',
  },
  {
    id: 4,
    grade: '2015',
    campu: 'A区',
    specialty: '计算机',
    creditZero: '100',
    creditOne: '100',
    creditTwo: '100',
    creditThree: '100',
    creditFour: '100',
    creditFive: '100',
    creditZeroToFive: '500',
    creditSix: '100',
    creditSeven: '100',
    greaterEight: '100',
    total: '800',
  },
]

export default {
  data () {
    return {
      columns,
      generalCourseData: [],
      currentDataMes: {}
    }
  },
  created() {
    this.getdata()
  },
  methods: {
    getdata () {
      this.spinning = true
      setTimeout(() => {
        const originGeneralCourse = data
        this.processGeneralCourseData([...originGeneralCourse])
      }, 500)
    },
    processGeneralCourseData (data) {
      const originData = data
      let gradeList = []
      let campuList = []
      originData.forEach(item => {
        if (!gradeList.includes(item.grade)) {
          gradeList.push(item.grade)
        }
        if (!campuList.includes(item.campu)) {
          campuList.push(item.campu)
        }
      })
      this.currentDataMes.gradeList = gradeList
      this.currentDataMes.campuList = campuList
      this.currentDataMes.currentGrade = gradeList[gradeList.length - 1]
      this.currentDataMes.currentCampu = campuList[campuList.length - 1]
      this.generalCourseData = originData
      this.spinning = false
    },
    changeCurrentData (grade, campu) {
      console.log(grade, campu)

    }
  }
  
}
</script>