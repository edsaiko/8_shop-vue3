<!-- 购物车页 -->
<template>
  <div class="content cart">
    <h2>结算</h2>
    <el-table
        :data="tableData"
        style="width: 100%"
    >
      <el-table-column width="80px" label="图片">
        <el-image style="width: 80px; height: 80px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover"/>
      </el-table-column>
      <el-table-column property="name" label="名称" width="120"/>
      <el-table-column property="name" label="价格" width="120"/>
      <el-table-column property="address" label="分类" width="300"/>
      <el-table-column property="name" label="数量"/>
      <el-table-column property="name" label="总价" width="120"/>

    </el-table>
    <div class="cart-bottom">
      <span>已选商品1件</span>
      <span>合计 ￥998.00</span>
      <el-button>提交订单</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import {ElTable} from 'element-plus'

export default {
  name: "Cart",
  setup() {
    interface User {
      date: string
      name: string
      address: string
    }
    const num = ref(1)
    const handleChange = (value: number) => {
      console.log(value)
    }
    const multipleTableRef = ref<InstanceType<typeof ElTable>>()
    const multipleSelection = ref<User[]>([])
    const toggleSelection = (rows?: User[]) => {
      if (rows) {
        rows.forEach((row) => {
          // TODO: improvement typing when refactor table
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
      } else {
        multipleTableRef.value!.clearSelection()
      }
    }
    const handleSelectionChange = (val: User[]) => {
      multipleSelection.value = val
    }

    const tableData: User[] = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    return {
      tableData,handleSelectionChange,toggleSelection,handleChange,num
    }
  }
}
</script>

<style scoped>
.cart{
  margin-top: 20px;
  margin-bottom: 20px;
}
.cart h2{
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 72px;
  line-height: 72px;
}
.cart-bottom{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>