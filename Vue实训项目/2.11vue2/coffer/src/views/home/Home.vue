<template>
 <div id="home">
    <navigate>
      <span slot="left">下午好</span>
      <div slot="center"><input type="text" style="width:100%" placeholder="请输入商品名"/></div>
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
import { getHomeMultidata, getHomeProductdata } from '../../network/home.js'
import ProductList from './childcomp/ProductList'
import ChildSwiper from './childcomp/ChildSwiper'
export default {
  name: 'Home',
  data () {
    return {
      value: '',
      banner: [],
      productdata: []
    }
  },
  components: {
    Navigate,
    ChildSwiper,
    ProductList
  },
  created () {
    this.getHomeMultidata()
    this.getHomeProductdata()
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(
        res => {
          this.banner = res.data.result
        }
      )
    },
    getHomeProductdata () {
      getHomeProductdata().then(
        res2 => {
          this.productdata = res2.data.result
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
