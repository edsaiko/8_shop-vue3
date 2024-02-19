<script setup>
// export default {
//   name: "ProItem"
// }
</script>

<template>
  <div class="pro-item">
    <img src="../../assets/images/cart/cup2.png" alt="">
    <h3>治愈系氛围营造者，mini日式超声波香薰机</h3>
    <div class="item-price">
      <span class="now-price">￥998</span>
      <span class="old-price">￥199</span>
    </div>
  </div>
</template>

<style scoped>
.pro-item{
  height: 329px;
  width: 243.2px;
  cursor: pointer;
  /* background-color: antiquewhite; */
  /* border-radius: 4px; */
}
.pro-item:hover img{
  box-shadow: var(--color-shadow);
}
ul{
  display: flex;
  justify-content: space-between;
}
.pro-item img{
  width: 100%;
  height: 240px;
  border-radius: 8px;
}

.pro-item h3{
  margin: 12px 0 12px 0;
  letter-spacing: 2.5px;
  line-height: 20px;
}
.pro-item .item-price .now-price{
  margin-right: 8px;
}
</style>
