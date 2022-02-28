<template>
    <div id="mySwiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
  </div>
  <div class="indicator">
  <div
  class="indicatorItem" v-for="(item,index) in slideCount":key="index"
  :class="{active:index === currentIndex-1}" >
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animalDuration: {
      type: Number,
      default: 1000
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      slideCount: 0,
      imgWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false,
      playTimer: null
    }
  },
  methods: {
    handleDom () {
      const swiperEle = document.querySelector('.swiper')
      const slideEles = document.getElementsByClassName('slide')
      this.slideCount = slideEles.length
      if (this.slideCount > 1) {
        const cloneFirst = slideEles[0].cloneNode(true)
        const cloneLast = slideEles[this.slideCount - 1].cloneNode(true)
        swiperEle.insertBefore(cloneLast, slideEles[0])
        swiperEle.appendChild(cloneFirst)
        this.imgWidth = swiperEle.offsetWidth
        this.swiperStyle = swiperEle.style
      }
      this.setTransform(-this.imgWidth)
    },
    startTimer () {
      const that = this
      this.playTimer = setInterval(function () {
        that.currentIndex++
        that.scrollContent(-that.currentIndex * that.imgWidth)
      }, that.interval)
    },
    setTransform (movePosition) {
      this.swiperStyle.transform = `translateX(${movePosition}px)`
      this.swiperStyle['-webkit-transform'] = `translateX(${movePosition}px)`
      this.swiperStyle['-ms-transform'] = `translateX(${movePosition}px)`
    },
    scrollContent (position) {
      this.scrolling = true
      this.swiperStyle.transition = `transform ${this.animalDuration}ms ease`
      this.setTransform(position)
      this.checkPosition()
      this.scrolling = false
    },
    checkPosition () {
      const that = this
      setTimeout(function () {
        that.swiperStyle.transition = '0ms'
        if (that.currentIndex >= that.slideCount + 1) {
          that.currentIndex = 1
          that.setTransform(-that.currentIndex * that.imgWidth)
        } else if (that.currentIndex <= 0) {
          that.currentIndex = that.slideCount
          that.setTransform(-that.currentIndex * that.imgWidth)
        }
      }, that.animalDuration)
    },
    touchStart (e) {
      if (this.scrolling) return
      this.stopTimer()
      this.startX = e.touches[0].pageX
    },
    touchMove (e) {
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      const currentPosition = -this.currentIndex * this.imgWidth
      const moveDistance = this.distance + currentPosition
      this.setTransform(moveDistance)
    },
    touchEnd (e) {
      const endDistance = Math.abs(this.distance)
      const movePercentage = this.imgWidth * this.moveRatio
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && endDistance > movePercentage) {
        this.currentIndex--
      } else {
        this.currentIndex++
      }
      this.scrollContent(-this.currentIndex * this.imgWidth)
      this.startTimer()
    },
    stopTimer () {
      clearInterval(this.playTimer)
    }
  },
  mounted () {
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 200)
  }
}
</script>
<style scoped>
*{
  margin:0px;
  padding:0px;
}
#mySwiper{
  overflow:hidden;
  position:relative;
}
.swiper{
  display:flex;
}
.indicator{
  display:flex;
  position:absolute;
  left:40%;
  bottom:12px;
  width:100%；
}
.indicatorItem{
  width:8px;
  height:8px;
  margin:5px 3px;
  border-radius:50%;
  background-color:#fff;
}
.active{
  background-color:rgba(212,62,46,1);
}

</style>
