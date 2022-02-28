<template>
   <div class="detail">
   <navigate class="nav">
  <div slot="left" class="nav_left" @click="backClick">《</div>
  <div slot="center" class="nav_center">商品详情</div>
   </navigate>
  <div class="detailsp" v-for="(item,index) in detailList" :key="index">
  <img :src="item.large_img"/>
  <div class="detailsp_center">
  <div class="detailsp_name">{{ item.name }}</div>
   <div class="detailsp_enname">{{ item.enname }}</div>
   <div class="detailsp_price">￥{{ item.price }}</div>
   <div class="temperature">
          <span class="optionnum">{{ item.tem_desc }}</span>
          <div class="btnErea">
            <button class="temperature_coolBtn Btn">{{ cool }}</button>
            <button class="temperature_warmBtn Btn">{{ warm }}</button>
          </div>
  </div>
   <div class="sugar">
          <span class="optionnum">{{ item.sugar_desc }}</span>
          <div class="btnErea">
            <button class="sugar_allBtn Btn">{{ sugarAll }}</button>
            <button class="sugar_halfBtn Btn">{{ sugarHalf }}</button>
          </div>
        </div>
         <hr/>
          <div class="detailMiddle">
        <span class="optionnum">选择数量</span>
         <div class="changeNum">
          <button class="btn" v-on:click="sub">-</button>
          <span class="num">{{ num }}</span>
          <button class="btn" v-on:click="add">+</button>
        </div>
      </div>
      <hr/>
       <div class="describe">
          <h3>商品描述</h3>
          <p>1、 {{describe1}}</p>
          <p>2、 {{describe2}}</p>
          <p>3、 {{describe3}}</p>
          <p>4、 {{describe4}}</p>
      </div>
  </div>
   </div>
   <div class="zuihou"></div>
   <detail-bottom-bar @addCart="addCart"/>
   </div>

</template>

<script>
import Navigate from '../nav/Navigate'
import { getDetail } from '../../../network/detail'
import DetailBottomBar from './DetailBottomBar'
export default {
  name: 'Detail',
  data () {
    return {
      pid: null,
      detailList: [],
      num: 1

    }
  },
  components: {
    Navigate,
    DetailBottomBar
  },
  created () {
    this.pid = this.$route.params.pid
    this.getDetail()
  },
  methods: {
    getDetail () {
      getDetail(this.pid).then(res => {
        console.log(res)
        this.detailList = res.data.result
      })
    },
    backClick () {
      this.$router.back()
    },
    sub () {
      if (this.num > 0) {
        this.num -= 1
      }
    },
    add () {
      this.num += 1
    },
    addCart () {
      const product = {}
      product.desc = this.detailList[0].desc
      product.price = this.detailList[0].price
      product.small_img = this.detailList[0].small_img
      product.name = this.detailList[0].name
      product.pid = this.pid
      this.$store.dispatch('addCart', product)
      console.log(product)
    }
  },
  computed: {
    cool () {
      return this.detailList[0].tem.slice(0, 1)
    },
    warm () {
      return this.detailList[0].tem.slice(2)
    },
    sugarAll () {
      return this.detailList[0].sugar.slice(0, 2)
    },
    sugarHalf () {
      return this.detailList[0].sugar.slice(3)
    },
    describe1 () {
      return this.detailList[0].desc.split('。')[0]
    },
    describe2 () {
      return this.detailList[0].desc.split('。')[1]
    },
    describe3 () {
      return this.detailList[0].desc.split('。')[2]
    },
    describe4 () {
      return this.detailList[0].desc.split('。')[3]
    }

  }

}
</script>
<style scoped>
.detail{
    width:100%;
    overflow:hidden;
    z-index:999;
}
.nav{
    display:flex;
    height:44px;
    font-size:20px;
    position:fixed;
    width:100%;
  background-color:white;

}
.nav_left{
     margin-left:20px;
     margin-top:10px;
     color:skyblue;
}
.nav_center{
    margin-left:130px;
     margin-top:10px;
}
.detailsp img{
    margin-top:55px;
    width:100%;

}

.detailsp_name {
  font-size: 18px;
  color: #646566;
  text-align: left;
  margin: 5px 0;
  padding-left: 10px;
  font-weight: 600;
}
.detailsp_enname {
  font-size: 14px;
  color: #666666;
  text-align: left;
  margin: 5px 0;
  padding-left: 10px;
}
.detailsp_price {
  font-size: 20px;
  font-weight: 600;
  color: skyblue;
  text-align: left;
  padding-left: 10px;
}
.temperature{
    margin-top:15px;
    font-size:18px;
    margin-left:20px;
}
.btnErea{
   position:relative;
   left:100px;
   top:-22px;
}
.Btn {
  width: 70px;
  height: 30px;
  margin-right: 15px;
  border: none;
  border-radius: 20px;
  font-weight: 300;
  font=size:9px
}
.sugar {
  margin-top:-6px;
    font-size:18px;
    margin-left:20px;
}
.detailMiddle {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;

}
.optionnum {
  position: relative;
  left: 20px;
  font-size: 18px;
}
.changeNum {
  position: absolute;
  left: 200px;
  top:550px;
}

.num {
  margin: 0 10px;
}
.btn {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: tan 1px solid;
}
.describe{
    text-align: left;
    margin-left: 20px;
    margin-top:20px;
}
.zuihou{
  height:100px;
}
</style>
