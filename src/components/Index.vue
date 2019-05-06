<template>
  <el-container class="is-vertical">
    <!--顶部黑色-->

    <Header></Header>

    <!--菜单-->

    <Nav></Nav>

    <!--内容-->
    <el-main>
      <Contents></Contents>
    </el-main>
  </el-container>
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


</style>
