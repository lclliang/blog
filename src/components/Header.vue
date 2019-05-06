<template>
  <el-header>
    <div class="header-box">

      <div class="header-top">
        小人物的博客
      </div>
      <div class="header-bottom">
        <span>IT nobody</span>
      </div>
    </div>
  </el-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

  .el-header{
    background-color:#409EFF;
    height:auto!important;
    padding:10px;
  }
  .header-box{
    padding:10px;
    width:1200px;
    margin:auto;
    color:#ffffff;
  }
  .header-top{
    font-size:24px;
  }
</style>
