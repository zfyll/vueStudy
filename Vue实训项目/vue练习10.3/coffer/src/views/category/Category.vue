<template> 
   <div>
   <van-search v-model="value" @keydown.enter="search" placeholder="请输入商品名称" />
   </div>
</template>

<script>
import {Search} from 'vant'
export default{
  name:'Category',
  components:{
  "VanSearch":Search
}
}

</script>
<style scoped>


</style>
