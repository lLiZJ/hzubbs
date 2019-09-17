<template>
  <div class="container-fluid">
    <div class="row appbody">
      <div class="col-md-2 left">
        <slider-view></slider-view>
      </div>
      <div class="col-md-10 right">
        <div class="row header">
          <div class="col-md-12">
            <header-view></header-view>
          </div>
        </div>
        <div class="row main">
          <div class="col-md-12">
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
    background-color:rgb(226, 169, 116);
  }
  .right {
    height: 100%;
    /* background: rgb(112, 112, 141); */
  }
  .header {
    height: 10%;
    background: rgb(210, 224, 145);
  }
  .main {
    height: 90%;
    /* background: rgb(106, 218, 203); */
  }

</style>