<script setup>

</script>
<!--头部导航-->
<template>
  <div class="header">
    <nav>
      <ul>
        <li>USERNAME <i class="iconfont">&#xe661;</i></li>
        <li><a href="">消息</a></li>
        <li><a href="">订单</a></li>
        <li><a href="">甄选</a></li>
        <li>企业采购 <i class="iconfont">&#xe661;</i></li>
        <li>客户服务 <i class="iconfont">&#xe661;</i></li>
        <li><a href="">APP</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.header{
  width: 1920px;

  /*width: 100%;*/
  height: 48px;
  background-color: var(--color-balck);
  position: sticky;
  top: 0;
  z-index: 1200;
}
.header nav{
  width: var(--width-middle);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: end;
}
.header nav ul{
  display: flex;
  line-height: 100%;
  height: 100%;
  color: var(--color-white);
}
.header li {
  /* height: 100%;
  line-height: 100%; */
  height: 48px;
  line-height: 48px;
  padding: 0 10px 0 10px;
  cursor: pointer;
  position: relative;
}
.header li a{
  /* height: 100%; */
  line-height: inherit;
}
.header li:not(:first-child)::after{
  content: '';
  height: 1em;
  line-height: inherit;
  width: 1px;
  /* 不准用bgc？？？ */
  border-left: 1px solid #D8DADF;
  position: absolute;
  /* 底下有隐藏栏的，把两者放一个div，共享宽度，且可top:100% */
  top: 20px;
  left: 0;
}

</style>
