<template> 
   <div class="cart">
   <div slot="center" class="center"> 购物车({{cartLength}})</div>
   <shop-list class="shop"/>
   </div>
</template>

<script>
import Navigate from '../../components/context/nav/Navigate'
import ShopList from './ShopList'
export default{
  name:'Shopcar',
   components:{
     Navigate,
     ShopList
   },
   computed:{
     cartLength(){
       return this.$store.getters.cartLength
     }
   }
}
</script>
<style scoped>
.cart{
  height:100vh;
}
.center{
    line-height:44px;
   background:#ff8198;
   text-align:center;
    box-shadow:0 1px 1px rgba(100,100,100,.1);
    color:#fff;
    position:fixed;
    width:100%;
}
.shop{
   height:calc(100vh - 94px);
}

</style>