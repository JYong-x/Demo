<template>
  <div>
    <a-table :columns="myColumns" :dataSource="myData" bordered>
      <span slot="expandedRowRender" slot-scope="record,index">
        <div class="clearfix" style="margin-bottom: 20px;">
          <a-table
            :columns="myColumnsInner"
            :dataSource="record.data"
            :pagination="false"
            :showHeader="false"
            :rowKey="items => items.configId"
          ></a-table>
        </div>
      </span>
    </a-table>
  </div>
</template>

<script>
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {}
  };
  if (value == "一组") {
    obj.attrs.colSpan = 6;
  }
  return obj;
};

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park"
  },
  {
    key: "5",
    name: "Jake White",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park"
  }
];
const myData = [
  {
    group: "一组",
    data: [
      {
        key: 1,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 2,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 3,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 4,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      }
    ]
  },
  {
    group: "二组",
    data: [
      {
        key: 5,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 6,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 7,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      }
    ]
  },
  {
    group: "三组",
    data: [
      {
        key: 8,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 9,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      },
      {
        key: 10,
        chassName: "公共管理",
        classCode: "AE322FS",
        competent: "经管学院",
        credit: "3",
        period: "72",
        classNumber: "3"
      }
    ]
  }
];

export default {
  data() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        customRender: (text, row, index) => {
          if (index < 4) {
            return <a href="javascript:;">{text}</a>;
          }
          return {
            children: <a href="javascript:;">{text}</a>,
            attrs: {
              colSpan: 5
            }
          };
        }
      },
      {
        title: "Age",
        dataIndex: "age",
        customRender: renderContent
      },
      {
        title: "Home phone",
        colSpan: 2,
        dataIndex: "tel",
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          };
          if (index === 2) {
            obj.attrs.rowSpan = 2;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.attrs.rowSpan = 0;
          }
          if (index === 4) {
            obj.attrs.colSpan = 0;
          }
          return obj;
        }
      },
      {
        title: "Phone",
        colSpan: 0,
        dataIndex: "phone",
        customRender: renderContent
      },
      {
        title: "Address",
        dataIndex: "address",
        customRender: renderContent
      }
    ];
    const myColumns = [
      {
        title: "课程名称",
        dataIndex: "group",
        width: '20%',
        customRender: (value, row, index) => {
          return {
            children: value,
            attrs: {
              colSpan: 6
            }
          };
        }
      },
      {
        title: "课程代码",
        dataIndex: 2,
        width: '20%',
        customRender: (value, row, index) => {
          return {
            attrs: {
              colSpan: 0
            }
          };
        }
      },
      {
        title: "主管部门",
        dataIndex: 3,
        width: '20%',
        customRender: (value, row, index) => {
          return {
            attrs: {
              colSpan: 0
            }
          };
        }
      },
      {
        title: "学分",
        dataindex: 4,
        width: '12%',
        customRender: (value, row, index) => {
          return {
            attrs: {
              colSpan: 0
            }
          };
        }
      },
      {
        title: "总学时",
        dataIndex: 5,
        width: '12%',
        customRender: (value, row, index) => {
          return {
            attrs: {
              colSpan: 0
            }
          };
        }
      },
      {
        title: "教学班号",
        dataindex: 6,
        width: '12%',
        customRender: (value, row, index) => {
          return {
            attrs: {
              colSpan: 0
            }
          };
        }
      }
    ];
    const myColumnsInner = [
      {
        title: "课程名称",
        dataIndex: "chassName",
        width: '20%',
      },
      {
        title: "课程代码",
        dataIndex: 'classCode',
        width: '20%',
      },
      {
        title: "主管部门",
        dataIndex: 'competent',
        width: '20%',
      },
      {
        title: "学分",
        dataIndex: 'credit',
        width: '12%',
      },
      {
        title: "总学时",
        dataIndex: 'period',
        width: '12%',
      },
      {
        title: "教学班号",
        dataIndex: 'classNumber',
        width: '12%',
      }
    ];
    return {
      data,
      columns,
      myColumns,
      myData,
      myColumnsInner
    };
  }
};
</script>

<style lang="scss" scoped>
  /deep/ .ant-table-expanded-row-level-1 {
    td {
      border: 0
    }
  } 
  /deep/ .ant-table-bordered {
    .ant-table-tbody {
      td {
        border-right: 0
      }
    }
  } 
</style>