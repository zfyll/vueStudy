<template> 
   <div><tabbar>
    <tabbar-item path="/home" activeColor="#CE1F6F">
    <img slot="item-icon" src="../../../assets/img/tabbar/shouye-2.png"/>
    <img slot="item-icon-active" src="../../../assets/img/tabbar/shouye-1.png"/>
    <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="#CE1F6F">
    <img slot="item-icon" src="../../../assets/img/tabbar/cart-2.png"/>
    <img slot="item-icon-active" src="../../../assets/img/tabbar/cart-1.png"/>
    <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="shopcar" activeColor="#CE1F6F">
    <img slot="item-icon" src="../../../assets/img/tabbar/fl-2.png"/>
     <img slot="item-icon-active" src="../../../assets/img/tabbar/fl-1.png"/>
    <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/my" activeColor="#CE1F6F">
    <img slot="item-icon" src="../../../assets/img/tabbar/person-2.png"/>
    <img slot="item-icon-active" src="../../../assets/img/tabbar/person-1.png"/>
    <div slot="item-text">我的</div>
    </tabbar-item>
    </tabbar></div>
</template>

<script>
import Tabbar from '../../common/tabbar/Tabbar.vue'
import TabbarItem from '../../common/tabbar/TabbarItem.vue'
export default{
  name:'MainTabbar',
  components:{
      Tabbar,TabbarItem
  }
}
</script>
<style scoped>


</style>