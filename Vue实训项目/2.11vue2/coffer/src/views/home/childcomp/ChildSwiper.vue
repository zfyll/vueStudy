<template>
   <div>
   <swiper>
   <swiper-item v-for="(item,index) in banner" :key="index">
   <img :src="item.bannerImg"/>
   </swiper-item>
   </swiper>
   </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'

export default {
  name: 'ChildSwiper',
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    SwiperItem,
    Swiper
  }
}
</script>
<style scoped>

</style>
