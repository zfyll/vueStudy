<template>
  <div id="app">
  <main-tabbar></main-tabbar>
 <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
    
     </div>
</template>
<script>
import MainTabbar from './components/common/tabbar/MainTabbar'
export default{
  name:'App',
  components:{
    MainTabbar
  }
}
</script>
<style>
@import "assets/css/base.css"
</style>
