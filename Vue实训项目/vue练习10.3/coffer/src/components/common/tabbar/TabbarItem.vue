<template>  
 <div  class="tab-bar-item" @click="itemClick">
 <div v-if="!isactive"> <slot name="item-icon"></slot></div>
 <div  v-else="isactive"><slot name="item-icon-active"></slot></div>
 <div :style="activeStyle"> <slot name="item-text"></slot></div>
 </div>
</template>

<script>
export default{
  name:'TabbarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  computed:{
   isactive(){
     return this.$route.path.indexOf(this.path)!==-1;
   },
   activeStyle(){
     return this.isactive ? {color: this.activeColor}:{};
   }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path);
    }
  }
}
</script>
<style scoped>
.tab-bar-item{
  flex:1;
  height:50px;
  font-size:14px;
  text-align:center;
}
.tab-bar-item img{
  margin-top: 3px;
  width:24px;
   vertical-align: middle;
}

</style>