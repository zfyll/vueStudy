<template> 
   <div class="ShopList">
   <div v-for="item in cartList" class="shop-item">
   <div class="item-img">
   <img :src="item.small_img"/>
   </div>
   <div class="item-info">
   <div class="item-title">{{item.name}}</div>
   <div class="item-desc">{{item.desc}}</div>
   <div class="info-bottom">
   <div class="item-price left">￥{{item.price}}</div>
   <div class="item-count right">x{{item.count}}</div>
   </div>
   </div>
   </div>
   </div>

</template>

<script>
export default{
  name:'ShopList',
  data(){
      return {
          cartList:[]
      }
  },
  created(){
      this.cartList=this.$store.state.cartList
  },
  methods:{
      
  }
}
</script>
<style scoped>
.shop-item{
    display:flex;
    padding:5px;
    border-bottom:1px solid #ccc;
    width:100%;
}
.item-img img
{
  width:100px;
  height:101px;
}
.item-info{
    padding-left:10px;
    width:300px;
}
.item-title,.item-desc{
    padding:8px 0px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.info-bottom
{
    padding-top:10px;
    color:red;
}
</style>