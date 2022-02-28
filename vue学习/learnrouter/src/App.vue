<template>
  <div id="app">
  <router-link to="/home" tag="button" active-class="aaa">首页 </router-link>
  <router-link to="/about" tag="button" active-class="aaa">关于 </router-link>
   <router-link :to="'/User/'+useId" tag="button" active-class="aaa">用户 </router-link>
   <router-link :to="{path:'/profile',query:{name:'why',age:18,height:'1.88'}}" tag="button" active-class="aaa">文档 </router-link>
  
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
  </div>
</template>
<script>
export default{
  name:'App',
  data(){
    return{useId:'zhangsan'}
  }
}
</script>
<style>
.aaa{
  color:#f00;
}
</style>
