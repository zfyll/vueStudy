<template> 
   <div id="home">
   <navigate class="nav">
   <span slot="left">下午好</span>
  <div slot="center"> <van-search v-model="value" placeholder="请输入商品名称" /></div>
   </navigate>
   <child-swiper :banner="banner" class="ChildSwiper"></child-swiper>
   <div class="hot_box">
   <div class="hot_title">
   <div>热卖推荐</div>
   </div>
   </div>
     <product-list :productdata="productdata"></product-list>
   </div>
</template>

<script>
import Navigate from '../../components/context/nav/Navigate'
import{ getHomeMultidata ,getHomeProductdata} from '../../network/home.js'
import ProductList from './childcomp/ProductList'
import ChildSwiper from './childcomp/ChildSwiper'
import {Search} from 'vant'
export default{
  name:'Home',
  data(){
    return{
      value:'',
      banner:[],
      productdata:[]
    }
  },
  components:{
    Navigate,
    ChildSwiper,
    ProductList,
    "van-search": Search
    
  },
  created(){
    this.getHomeMultidata() 
    this. getHomeProductdata()
  },
  methods:{
     getHomeMultidata(){
       getHomeMultidata().then( res => {
      console.log(res.data.result);
      this.banner=res.data.result;
       } 
       )
         },
        getHomeProductdata(){
       getHomeProductdata().then((res2) => {
      console.log(res2.data.result, "热卖");
        this.productdata = res2.data.result;
       } 
       )
         },
  }
}
</script>
<style scoped>
#home{
  background-color: #D3D3D3;
}
.nav{
  width:100%;
  background-color:white;
  display:flex;
  position:fixed;
  top:0px;
  z-index:99;
}
.nav span{
  color: #676868;
  font-weight: 600;
  margin-right:15px;
}
.ChildSwiper{
  margin-top:22.4px;
}
.van-search {
  width: 60%;
  float: right;

}
.hot_title {
  height: 60px;
  width: 95%;
 text-align:center;
 margin-left:10px;
}
.hot_title div {
  float: center;
  color: white;
  background-color: rgb(43, 168, 226);
  height: 50px;
  width: x;
  margin-top: 20px;
  line-height: 45px;
  border-top-right-radius: 20px;
}

</style>