<template>
  <a-select style="width: 200px"> 
  <a-select-option v-for="item of selectList" :class="{group: item.groupName, name: item.name}" :key="item.id">{{item.groupName || item.name}}</a-select-option>
  </a-select>
</template>
<script>
const list = [
  {
    id: 11,
    groupName: "一组",
    data: [
      {
        id: 21,
        name: "yi123"
      },
      {
        id: 22,
        name: "yi123"
      }
    ]
  },
  {
    id: 12,
    groupName: "二组",
    data: [
      {
        id: 31,
        name: "er123"
      },
      {
        id: 32,
        name: "er123"
      }
    ]
  },
  {
    id: 13,
    groupName: "三组",
    data: [
      {
        id: 41,
        name: "san123"
      },
      {
        id: 42,
        name: "san123"
      }
    ]
  }
];
export default {
  data() {
    return {
      selectList: []
    };
  },
  methods: {
    showData() {
      setTimeout(() => {
        this.selectList = list;
      }, 1000);
    },
    desbanceData () {
      let arr = [...list]
      list.forEach((item, index) => {
        console.log(item, index)
        let indexNum = 1
        for (let i = 0; i < item.data.length; i++) {
          arr.splice(indexNum, 0, item.data[i])
          indexNum++
          // console.log(arr)
        }
        indexNum++
      })
      this.selectList = arr
      console.log(this.selectList)
    }
  },
  mounted() {
    this.desbanceData()
    // this.showData()
  }
};
</script>

<style lang="">
  .group {
    color: red
  }
  .name {
    color: blue;
    margin-left: 10px;
  }
</style>
