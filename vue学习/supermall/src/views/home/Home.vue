<template> 
   <div id="Home">
   <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
     @tabClick="tabClick" 
     ref="tabControl1"
     class="tab-control"
     v-show="isTabFixed"
     ></tab-control>
   <scroll class="content" 
   ref="scroll" 
   :probe-type="3" 
   @scroll="currentscroll"
    :pull-up-load="true"
    @pullingUp="loadMore"
   >
   <child-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></child-swiper>
   <recommend-view :recommends=recommends></recommend-view>
   <feature-view></feature-view>
   <tab-control :titles="['流行','新款','精选']" 
     @tabClick="tabClick" 
     ref="tabControl2"
       
     ></tab-control>
   <goods-list :goods="showGoods"></goods-list>
   
   </scroll>
   <back-top  v-show="isShowBackTop" @click.native="backClick"/>
   </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll'
import NavBar from '../../components/common/navbar/NavBar'

import TabControl from '../../components/context/tabcontrol/TabControl'
import GoodsList from '../../components/context/goods/GoodsList'
import BackTop from '../../components/context/backTop/BackTop'


import ChildSwiper from './childcomp/ChildSwiper'
import RecommendView from './childcomp/RecommendView'
import FeatureView from './childcomp/FeatureView'

import {getHomeMultidata,getHomeGoods} from '../../network/home.js'
import {debounce} from "../../common/utils.js"
export default{
  name:'Home',
  data(){
   return {
      banners:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:"pop",
    isShowBackTop:false,
    tabOffsetTop:0,
    isTabFixed:false,
    saveY:0
   }
  }
  ,
  components:{
    NavBar,
   ChildSwiper,
   RecommendView,
   FeatureView,
   TabControl,
   GoodsList,
   Scroll,
   BackTop
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created(){
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
  },
  mounted(){
     const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
  },
  methods:{
    

   tabClick(index){
     switch(index){
       case 0: 
       this.currentType='pop' 
       break
         case 1: 
         this.currentType='new' 
         break
           case 2:
            this.currentType='sell' 
            break

     }
         this.$refs.tabControl1.currentIndex = index;
         this.$refs.tabControl2.currentIndex = index;
   },


    getHomeMultidata(){
       getHomeMultidata().then( res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
       } 
       )
         },

         getHomeGoods(type){
           const page = this.goods[type].page +1
               getHomeGoods(type,page).then(res => {
                 this.goods[type].list.push(...res.data.data.list)
                 this.goods[type].page +=1
               this.$refs.scroll.finishPullUp()
               })
         },
         
          backClick(){
       this.$refs.scroll.scrollTo(0,0);
     },
     
     currentscroll(position){
          this.isShowBackTop = (-position.y) > 1000 
         this.isTabFixed = (-position.y) > this.tabOffsetTop
        
         
     },
     loadMore(){
       this.getHomeGoods(this.currentType)
     },
   
   swiperImageLoad(){
     this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    
   }
    
    

  }
}
</script>
<style scoped>
#home{
  height:100vh;
  
}
.home-nav{
  background-color:var(--color-tint);
  color:#fff;
  height:40px;
}
.tab-control{
  position:relative;
  z-index:9;
}
.content{
  height:calc(100vh - 93px);
  overflow:hidden;
  position:absolute;
  top:40px;
}

</style>