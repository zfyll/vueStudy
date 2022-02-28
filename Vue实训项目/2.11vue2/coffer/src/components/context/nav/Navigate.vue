<template>
<div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div><slot name="right"></slot></div>
</div>
</template>
<script>
export default {
  name: 'Navigate'
}
</script>
<style scoped>
.nav{
    width:90%;
    display:flex;
}
.left{
    width:50px;
}
.center{
    flex:1;
}
</style>
