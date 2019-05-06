<template>
  <div>
    <el-container>
      <!--顶部黑色-->
      <el-header>
        <Header></Header>
      </el-header>
      <!--菜单-->
      <div class="header-nav">
        <Nav></Nav>
      </div>
      <!--内容-->
      <el-main>
        <Contents></Contents>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import Header from './Header';
  import Nav from './Nav';
  import Contents from './Contents';

  export default {
    name: "Index",
    components: {
      Header,
      Nav,
      Contents
    }
  }
</script>

<style scoped>
.el-header{
  background-color:#409EFF;
  height:auto!important;
  padding:10px;
}

  .header-nav{
    height: 60px;
  }
</style>
