<template> 
  <div>
  <tabbar>
  <tabbar-item path="/home" activeColor="#CE1F6F">
  <img slot="item-icon" src="../../../assets/images/home.png"/>
  <img slot="item-icon-active" src="../../../assets/images/home_active.png"/>
  <div slot="item-text">首页</div>
  </tabbar-item>
   <tabbar-item path="/category" activeColor="#CE1F6F">
  <img slot="item-icon" src="../../../assets/images/menu.png"/>
  <img slot="item-icon-active" src="../../../assets/images/menu_active.png"/>
  <div slot="item-text">菜单</div>
  </tabbar-item>
   <tabbar-item path="/shopcar" activeColor="#CE1F6F">
  <img slot="item-icon" src="../../../assets/images/shopbag.png"/>
  <img slot="item-icon-active" src="../../../assets/images/shopbag_active.png"/>
  <div slot="item-text">购物车</div>
  </tabbar-item>
   <tabbar-item path="/my" activeColor="#CE1F6F">
  <img slot="item-icon" src="../../../assets/images/my.png"/>
  <img slot="item-icon-active" src="../../../assets/images/my_active.png"/>
  <div slot="item-text">我的</div>
  </tabbar-item>
  </tabbar>
  </div>
</template>

<script>
import Tabbar from './Tabbar.vue'
import TabbarItem from './TabbarItem.vue'
export default{
  name:'MainTabbar',
  components:{
   Tabbar,TabbarItem
  }
}
</script>
<style scoped>


</style>