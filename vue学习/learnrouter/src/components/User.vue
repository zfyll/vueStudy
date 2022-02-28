<template>
  <div>
  <h2>我是用户</h2>
  <h2>{{useId}}</h2>
   <h2>{{this.$route.params.useId}}</h2>
  </div>
</template>
<script>
export default{
  name:'User',
  computed:{
      useId(){
          return this.$route.params.useId
      }
  }
}
</script>
<style>

</style>
