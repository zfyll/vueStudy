<template>
   <div class="cart">
   <div class="center"> 购物车({{cartLength}})</div>
  <div class="cartlist">
       <scroll class="content">
    <shop-list />
   </scroll>
  </div>
   </div>
</template>

<script>
import ShopList from './ShopList'
import Scroll from '../../components/common/scroll/Scroll'
export default {
  name: 'Shopcar',
  components: {
    ShopList,
    Scroll
  },
  computed: {
    cartLength () {
      return this.$store.getters.cartLength
    }
  }
}
</script>
<style scoped>
.cart{
height:100%
}
.center{
  height:44px;
    line-height:44px;
   background:#ff8198;
   text-align:center;
    box-shadow:0 1px 1px rgba(100,100,100,.1);
    color:#fff;
    position:fixed;
    top:0px;
    width:100%;
}
.cartlist{
  height:calc(100% - 94px);
}
.content{
  height:100%;
  overflow:hidden;
  position:absolute;
  top:44px;
}

</style>
