<template>
    <div>
            <div class="a">法治兴则民族兴 数读总书记重磅部署</div>
    <p class="c">　2月16日，《求是》杂志发表中共中央总书记、国家主席、中央军委主席习近平的重要文章《坚持走中国特色社会主义法治道路，更好推进中国特色社会主义法治体系建设》。该篇文章是2021年12月6日总书记在十九届中央政治局第三十五次集体学习时的讲话。
此次集体学习的内容是建设中国特色社会主义法治体系，学习目的是总结中国特色社会主义法治体系建设成效，分析存在的问题和不足，坚持走中国特色社会主义法治道路，更好推进中国特色社会主义法治体系建设。</p>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">危险按钮</van-button>
    <div class="box"></div>
    </div>
</template>
<script>
    export default {
        name:'button'
    }
</script>
<style lang="less" scoped>
 .a{
   font-size:20px;
   font-weight:bold;

 }
 .c{
   fon-size:14px
 }
 .box{
   height:100px;
   background: linear-gradient(to right, yellow, blue );
 }
</style>