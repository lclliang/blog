<template>
  <el-container class="is-vertical">
    <!--顶部黑色-->

    <Header></Header>

    <!--菜单-->

    <Nav></Nav>

    <!--内容-->
    <el-main>
      <div class="el-content">
        <el-row :gutter="20">
          <el-col :span="18">

              <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                  <el-tag type="danger">PHP</el-tag>
                  <span>php ftp上传 + 图片服务器</span>
                  <span class="time" style="float: right; padding: 3px 0">2018-09-28 14:26:55</span>
                </div>
                <div class="text item">
                  1.需要安装nginx

                  2.安装nginx    http_image_filter_module 模块

                  3.上代码


                  server {
                  listen       80;
                  server_name  自己的图片网站域名;

                  # http://xxx.com/1.jpg
                  location / {
                  root   图片所在位置;
                  }


                  # http://xxx.com/1.jpg!100x100
                  location ~* /(.+)\.(jpg|gif|png)!(\d+)x(\d+)$ {
                  set $w $3;
                  set $h $4;

                  #这里一定要写
                  root 图片所在位置;
                  image_filter crop $w $h;
                  image_filter_buffer  10M;



                  try_files /$1.$2  /notfound.jpg;
                  }
                  }
                   
                  ---------------------
                  作者：oxiaorenwu001
                  来源：CSDN
                  原文：https://blog.csdn.net/itnobody/article/details/82882636
                  版权声明：本文为博主原创文章，转载请附上博文链接！
                </div>
                <div class="bottom clearfix">

                  <span class="read-num">阅读数:<span class="num">1891</span></span>
                  <span class="pinglun-num">评论数:<span class="num">1891</span></span>
                </div>
              </el-card>

          </el-col>

          <!--右侧-->
          <ContentsRight></ContentsRight>
        </el-row>
      </div>

    </el-main>
  </el-container>
</template>

<script>
  import Header from '../Header';
  import Nav from '../Nav';
  import ContentsRight from '../ContentsRight';

  export default {
    name: "Article",
    components: {
      Header,
      Nav,
      ContentsRight
    }
  }
</script>

<style scoped>
  .el-content {
    width: 1200px;
    margin: auto;
    text-align: left;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    /*width: 900px;*/
    margin-bottom: 10px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  /**评论**/
  .pinglun-num, .read-num {
    float: right;
    padding: 3px 3px;
    font-size: 13px;
    color: #909399;
  }

  .pinglun-num {
    margin-right: 10px;
  }

  .num {
    color: #909399;
  }

  .is-selected {
    color: #1989FA;
  }

  .calendars > .el-card__body {
    padding: 0px !important;
  }
</style>
