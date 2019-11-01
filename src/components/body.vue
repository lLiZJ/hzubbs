<template>
  <div class="container-fluid">
    <div class="row appbody">
      <div class="col-md-2 left">
        <slider-view></slider-view>
      </div>
      <!-- 侧边栏填充 -->
      <div class="col-md-2 left-box">
      </div>
      <div class="col-md-10 right">
        <div class="row">
          <div class="col-md-10 header">
            <header-view></header-view>
          </div>
        </div>
        <!-- 头部填充 -->
        <div class="row header-box">
          <div class="col-md-12">
          </div>
        </div>
        <div class="row">
          <div class="breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem to="/">
                  <Icon type="ios-home-outline"></Icon> Home
              </BreadcrumbItem>
              <BreadcrumbItem to="/components/breadcrumb">
                  <Icon type="logo-buffer"></Icon> Components
              </BreadcrumbItem>
              <BreadcrumbItem>
                  <Icon type="ios-cafe"></Icon> Breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="col-md-12 main">
            
            <main-view></main-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sliderView from "./slider"
import headerView from "./header"
import mainView from "./main"

export default {
  name: "",
  components: {
    sliderView,
    headerView,
    mainView
  },
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped>
  .container-fluid {
    height: 100%;
  }
  .appbody {
    height: 100%;
    /* background: rgb(189, 189, 243); */
  }
  .left {
    height: 100%;
    background-color:rgb(229, 186, 145);
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
  }
  .right {
    height: 100%;
    /* background: rgb(112, 112, 141); */
  }
  .header {
    height: 10%;
    background: rgb(179, 226, 178);
    position: fixed;
    z-index: 100;
    right: 0;
    top: 0;
  }
  .header-box {
    height: 10%;
  }
  .main {
    padding: 1% 5%;
    /* background: rgb(106, 218, 203); */
  }

  .breadcrumb {
    /* background-color: #fff; */
    background: #f0f0f0;
    margin: 1% 4%;
  }
</style>