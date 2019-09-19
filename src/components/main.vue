<template>
  <!-- <div>
    {{ this.$store.state.user.userMsg }} <br>
    {{ this.$store.state.msg }} <br>  
    不变：{{ this.$store.state.count }} <br>
    变：{{ this.$store.getters.getStateCount }} <br>

    user.js 中的 getters：{{ this.$store.getters.userMsgAppend }} <br>
    
    <button @click="add">加一</button>
    <button @click="dec">减一</button>
    
  </div>-->
  <div>
    <Row :gutter="14">
      <i-col span="9">
        <Card>
          <p slot="title">全站十大</p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="9" class="padding-left-10">
        <Card>
          <p slot="title">校园热点</p>
          <a href="javascript:;" slot="extra" @click.prevent="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="6" class="padding-left-10">
        <Card>
          <p slot="title">热门版面</p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="9">
        <Card>
          <p slot="title">讲座动态</p>
          <a href="javascript:;" slot="extra" @click.prevent="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="9" class="padding-left-10">
        <Card>
          <p slot="title">站内热点</p>
          <a href="javascript:;" slot="extra" @click.prevent="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="6" class="padding-left-10">
        <Card>
          <p slot="title">失物招领</p>
          <a href="javascript:;" slot="extra" @click.prevent="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="9">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">一区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" align="middle" class="countto-page-row">
            <div class="padding-15">
              <p> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p class="margin-top-5"> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p class="margin-top-5"> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="9" class="padding-left-10">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">二区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="6" class="padding-left-10">
        <Card>
          <p slot="title">联系我们</p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="9">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">三区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" align="middle" class="countto-page-row">
            <div class="padding-15">
              <p> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p class="margin-top-5"> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p class="margin-top-5"> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p class="margin-top-5"> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
              <p class="margin-top-5"> 
                <a href="javascript:;" @click.prevent.stop="show" class="color-orangered">[版面]</a>
                <a href="javascript:;" @click.prevent.stop="show" class="color-yellowgreen">帖子</a>
              </p>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="9" class="padding-left-10">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">四区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="9">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">五区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="9" class="padding-left-10">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">六区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="9">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">七区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
      <i-col span="9" class="padding-left-10">
        <Card @click.native="show">
          <p slot="title">
            <a href="javascript:;" @click.prevent.stop="show">八区</a>
          </p>
          <a href="javascript:;" slot="extra" @click.prevent.stop="show">更多</a>
          <Row type="flex" justify="center" align="middle" class="countto-page-row"></Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    add() {
      var n = 10;
      //直接调用 mutations
      // this.$store.commit("add");
      //通过 actions 调用 mutations
      this.$store.dispatch("increase", n);
    },
    dec() {
      var n = 5;
      // this.$store.commit("dec");
      this.$store.dispatch("decrease", n);
      //测试调用 user.js 中的 mutations
      // this.$store.commit("show");
      //测试调用 user.js 中的 actions
      // this.$store.dispatch("show");
    },
    show() {
      alert("测试");
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.padding-15 {
  padding: 15px;
}
.margin-top-5 {
  margin-top: 5px;
}
.color-orangered {
  color: orangered;
}
.color-yellowgreen {
  color: yellowgreen;
}
</style>