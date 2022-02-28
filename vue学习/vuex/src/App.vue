<template>
  <div id="app">
<h2>---app的内容modules---</h2>
<h2>{{$store.state.a.name}}</h2>
<button @click="updatename">修改modules里的内容</button>
<h2>{{$store.getters.fullname}}</h2>
<h2>{{$store.getters.fullname2}}</h2>
<h2>{{$store.getters.fullname3}}</h2>
<button @click="aupdatename">modules里的action</button>
<h2></h2>

  <h2>---app的内容---</h2>
  <h2>{{$store.state.counter}}</h2>
  <h2>{{$store.state.message}}</h2>
  <h2>{{counter}}</h2>

  <h2>---mutations的内容---</h2>
  <button @click="add">+</button>
  <button @click="jianjian">-</button>
  <button @click="addcount(5)">+5</button>
  <button @click="addstu">加学生</button>
  <h2>---hellowvuex的内容---</h2>
  <hellow-vuex/>

<h2>---getters的内容---</h2>
  <h2>{{$store.getters.cheng}}</h2>
  <h2>{{$store.getters.more20stu}}</h2>
  <h2>{{$store.getters.more20stulenght}}</h2>
  <h2>{{$store.getters.moreAge(31)}}</h2>

  <h2>---action的内容---</h2>
     <button @click=update>修改信息</button>
     </div>
</template>
<script>
import HellowVuex from './components/HellowVuex'
export default{
  name:'App',
  components:{
    HellowVuex
  },
  methods:{
    add(){
      this.$store.commit('jia')
    },
    jianjian(){
      this.$store.commit('jian')
    },
    addcount(count){
    this.$store.commit('jiacount',count)
    },
    addstu(){
      const stu = {id:114,name:"fff",age:33}
      this.$store.commit('jiastu',stu)
    },
    update(){
      this.$store.dispatch('aupdateinfo','我是携带信息')
      .then(res => {
        console.log('里面完成了提交');
        console.log(res);
      })
    },
     updatename(){
    this.$store.commit('updateName','lisi')
       },
       aupdatename(){
         this.$store.dispatch('aupdateName','wangwu')
       }
  },
  computed:{
    counter(){
         return this.$store.state.counter
    }
  }
  
}
</script>
<style>

</style>