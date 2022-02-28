<template>
   <div class="bottom-bar">
   <div class="bar-item bar-left">
   <div>
   <i class="icon server"></i>
   <span class="text">客服</span>
   </div>
    <div>
   <i class="icon shop"></i>
   <span class="text">店铺</span>
   </div>
   <div>
   <i class="icon select"></i>
   <span class="text">收藏</span>
   </div>
   </div>
   <div class="bar-item bar-right">
   <div class="cart" @click="addClick">加入购物车</div>
   <div class="buy">购买</div>
   </div>
   </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addClick () {
      this.$emit('addCart')
    }
  }
}
</script>
<style scoped>
.bottom-bar{
    display:flex;
    z-index:999;
    position:fixed;
    bottom:0px;
    left:0px;
    right:0px;
    width:100%;
    height:58px;
    background-color:#fff;
    text-align:center;
}
 .bar-left{
     display:flex;
    flex:1;
   line-height:44px;
}
.bar-right{
     display:flex;
    flex:1;
   line-height:44px;
}
.text{
    margin:0px 10px 0px 20px;
}
.buy{
    padding:0px 20px;
    background:#f69;
}
.cart{
     margin:0px 0px 0px 30px;
      padding:0px 10px;
  background:#ffe817;
}
</style>
