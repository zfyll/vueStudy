<template>
  <div id="app">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
   .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
