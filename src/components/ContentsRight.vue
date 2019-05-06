<template>
  <!--右边-->
  <el-col :span="6">
    <!--排行-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>排行</span>
      </div>
      <div class="text item">列表内容1</div>
      <div class="text item">列表内容2</div>
      <div class="text item">列表内容3</div>
      <div class="text item">列表内容4</div>
    </el-card>

    <!--友情链接-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>友情链接</span>
      </div>
      <!--          <div  class="text item">列表内容1</div>-->

    </el-card>

    <!--网站信息-->
    <el-card class="box-card">
      <!--          <div slot="header" class="clearfix">-->
      <!--            <span>排行</span>-->
      <!--          </div>-->
      <div class="text item">
        小人物 版权所有丨京ICP备18015597号-1 | 站长统计
      </div>

    </el-card>
  </el-col>
</template>

<script>
    export default {
        name: "ContentsRight"
    }
</script>

<style scoped>
  .box-card {
    /*width: 900px;*/
    margin-bottom: 10px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
</style>
