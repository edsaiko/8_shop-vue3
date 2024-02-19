<!-- 购物车页 -->
<template>
  <div class="content cart">
    <h2>购物车</h2>
    <el-table
        ref="tableData"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"/>
      <el-table-column width="80px" label="图片">
        <el-image style="width: 80px; height: 80px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover"/>
      </el-table-column>
      <el-table-column property="name" label="名称" width="120"/>
      <el-table-column property="price" label="价格" width="120">
        <template #default="{row,$index}">
          ￥{{ row.price }}
        </template>
      </el-table-column>
      <el-table-column property="category" label="分类" width="300"/>
      <el-table-column property="num" label="数量">
        <template #default="{row,$index}">
          <el-input-number v-model="row.num" :min="1" :max="10" @change="handleChange(row.id,row.num)"/>
        </template>
      </el-table-column>
      <el-table-column property="totalPrice" label="总价" width="120">
        <template #default="{row,$index}">
          ￥{{ row.num * row.price }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >收藏
          </el-button
          >
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="cart-bottom">
      <span>已选商品1件</span>
      <span>合计 ￥{{ allProPrice }}.00</span>
      <el-button @click="test()">结算</el-button>
    </div>
    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange1(num)" />
  </div>
</template>

<script>
import {ref,computed,reactive} from 'vue'
import {ElTable} from 'element-plus'

export default {
  name: "Cart",
  setup() {
    const num = 1
    const handleChange1 = (value) => {
      console.log(value)
    }


    const handleChange = (id,num) => {
      console.log(tableData)
      console.log(tableData.map((item)=>{
        if(item.id===id) console.log('num=',item.num)
        // return item.id===id
      }))

    }
    const multipleTableRef = ref()
    const multipleSelection = ref([])
    const toggleSelection = (rows) => {
      if (rows) {
        rows.forEach((row) => {
          // TODO: improvement typing when refactor table
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          multipleTableRef.value.toggleRowSelection(row, undefined)
        })
      } else {
        multipleTableRef.value.clearSelection()
      }
    }
    const handleSelectionChange = (val) => {
      multipleSelection.value = val
    }
    // const tableData= reactive([
    //   {
    //     image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    //     name: '鸟一只',
    //     price: 998,
    //     category: '颜色分类：棕色',
    //     num: 9,
    //     isChoose: false,
    //     totalPrice: '998'
    //   },
    //   {
    //     image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    //     name: '鸟一只',
    //     price: 998,
    //     category: '颜色分类：棕色',
    //     num: 1,
    //     isChoose: false,
    //     totalPrice: '998'
    //   },
    //   {
    //     image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    //     name: '鸟一只',
    //     price: 998,
    //     category: '颜色分类：棕色',
    //     num: 1,
    //     isChoose: false,
    //     totalPrice: '998'
    //   },
    // ])
    const tableData= [
      {
        id:1,
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: '鸟一只',
        price: 998,
        category: '颜色分类：棕色',
        num: 9,
        isChoose: false,
        totalPrice: '998'
      },
      {
        id:2,
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: '鸟一只',
        price: 998,
        category: '颜色分类：棕色',
        num: 1,
        isChoose: false,
        totalPrice: '998'
      },
      {
        id:3,
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: '鸟一只',
        price: 998,
        category: '颜色分类：棕色',
        num: 1,
        isChoose: false,
        totalPrice: '998'
      },
    ]
    let allProPrice=computed(()=>{
        console.log('get')
        return tableData.reduce((prev,cur)=>{
          return prev+=cur.price*cur.num
        },0)
    })
    return {
      tableData, handleSelectionChange, toggleSelection, handleChange,allProPrice,
      num,handleChange1
    }
  }
}
</script>

<style scoped>
.cart {
  margin-top: 20px;
  margin-bottom: 20px;
}

.cart h2 {
  color: #000;
  font-size: 18px;
  font-weight: 600;
  height: 72px;
  line-height: 72px;
}

.cart-bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>