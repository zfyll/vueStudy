<template> 
   <div>
   <div><slot name="left"></slot></div>
   <div class="center"> <slot name="center"></slot></div>
   <div><slot name="right"></slot></div>
   </div>
</template>

<script>
export default{
  name:'Navigate'
}
</script>
<style scoped>


</style>