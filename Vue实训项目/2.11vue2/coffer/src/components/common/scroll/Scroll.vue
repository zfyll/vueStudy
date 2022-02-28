<template>
    <div class="wrapper" ref="wrapper">
        <div class="context">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollX: true,
      probeType: 3
    })
  }
}
</script>
