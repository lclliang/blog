<template>
  <div class="header-nav">
    <div class="el-header-nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="goHome()">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">后端</template>
          <el-menu-item index="2-1">PHP</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">前端</template>
          <el-menu-item index="3-1">html</el-menu-item>
          <el-menu-item index="3-2">javascript</el-menu-item>
          <el-menu-item index="3-3">VUE</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">服务器</template>
          <el-menu-item index="4-1">nginx</el-menu-item>
          <el-menu-item index="4-2">apache</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">Git</el-menu-item>
        <el-menu-item index="6">关于小人物</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goHome(){
        this.$router.push({
          name:'/index'
        })
      }
    }
  }
</script>

<style scoped>
  .el-header-nav {
    width: 1200px;
    margin: auto;
  }

  .header-nav {
    height: 60px;
  }
</style>
