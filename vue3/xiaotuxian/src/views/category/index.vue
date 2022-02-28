<template>
  <div class='container'>
          <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <Transition name="fade-right" mode="out-in">
          <XtxBreadItem :key="topCategory.id">{{topCategory.name}}</XtxBreadItem>
        </Transition>
      </XtxBread>
  </div>
</template>

<script>
export default {
  name: 'TopCategory'
}
</script>

<style scoped lang='less'></style>
