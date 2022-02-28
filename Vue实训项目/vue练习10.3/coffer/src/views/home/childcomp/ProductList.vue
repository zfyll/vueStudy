<template> 
   <div class="productlist">
   <div class="productlist_item" v-for="item in productdata" :key="item.id" @click="goto(item.pid)">
   <img :src="item.smallImg" alt=""/>
     <div class="productlist_cn_name">{{ item.name }}</div>
      <div class="productlist_en_name">{{ item.enname }}</div>
      <p class="productlist_price">￥{{ item.price }}</p>
      <i class="hotIcon">Hot</i>
   </div>
   <div class="space"></div>
   </div>
</template>

<script>
export default{
  name:'ProductList',
  props:{
     productdata:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
    goto(e){
          console.log(e)
         this.$router.push('/detail/'+e)
      }
  }
}
</script>
<style scoped>
.productlist {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 10px auto;
  z-index:-1;
}
.productlist_item {
  flex: 1;
  background-color: white;
  margin: 10px 5px;
  padding-top: 10px;
  border-radius: 15px;
}
.productlist_item {
  position: relative;
}
.productlist_item > img {
  width: 170px;
  border-radius: 15px;
}
.productlist_item .hotIcon {
  border-radius: 20px;
  color:  white;
  position: absolute;
  top: 13px;
  left: 15px;
  font-size: 12px;
  line-height: 20px;
  display: block;
  width: 20px;
  height: 20px;
  background-color: rgb(135, 220, 235);
}
.productlist_cn_name {
  font-size: 12px;
  text-align: center;
  color: rgb(255, 185, 80);
  padding-left: 10px;
  margin: 3px 0;
}
.productlist_en_name {
  font-size: 12px;
  text-align: center;
  color: rgb(222, 181, 135);
  padding-left: 10px;
}
.productlist_price {
  font-weight: 600px;
  color: #e81b81;
  text-align: center;
  margin: 0 0 0 6px;
}
.space {
  height: 90px;
  width: 95%;
}

</style>