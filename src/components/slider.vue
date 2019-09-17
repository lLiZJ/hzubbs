<template>
  <div class="sidebar">
    <!-- 左上角logo -->
    <div class="row logo">
      <div class="col-md-12">
        <h2>logo</h2>
      </div>
    </div>
    <!-- 用户登录/个人信息 -->
    <div class="row login">
      <div class="col-md-12 ">
        <div class="row login-page">
          <div class="col-md-12">
            <img src="../assets/header.jpeg" alt="头像" width="150" height="150" />
          </div>
        </div>
        <div class="row login-form">
          <div class="col-md-12">
            <form action="" method="">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="用户名 / username" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="密码 / password" />
              </div>
              <button type="submit" class="btn btn-info login-form-button">登录</button>
              <button type="button" class="btn btn-info login-form-button">注册</button>
            </form>
          </div>
          <div class="col-md-12">
            <a href="">找回密码</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航 -->
      <div class="row nav">
        <div class="col-md-12">
          <p><a href="">首页</a></p>
          <p><a href="">目录</a></p>
          <p><a href="">精华区</a></p>
          <p><a href="">关注/粉丝</a></p>
        </div>
      </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  /* margin-top: 100%; */
  /* padding-top: 10%; */
}
.logo {
  height: 10%;
  background: rgb(125, 214, 187);
  
}

.login {
  height: 60%;
  /* background: rgb(99, 151, 119); */
}
.login-page {
  height: 40%;
  padding: 50px 0 0 0;
  /* background: rgb(167, 61, 61); */
  text-align: center;
}
.login-page img {
  border-radius: 50%;
}
.login-form {
  height: 50%;
  padding: 0 15px;
  text-align: center;
}
.login-form input {
  width: 80%;
  margin: 30px auto;
}
.login-form input:hover {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.login-form a {
  color: #fff;
  padding-top: 20px;
}
.login-form-button {
  height: 30px;
  width: 60px;
  margin: 0 10px;
  line-height: 1;
  background-color: rgb(90, 154, 197);
  border-color: rgb(126, 186, 226);
}
.login-form-button:hover {
  color: #fff;
  background-color: #62a9ca;
  border-color: #80b9e0;
}
.login-form-button:focus, .login-form-button.focus {
  box-shadow: 0 0 0 0.1rem rgba(58, 176, 195, 0.5);
}

.nav{
  height: 30%;
  padding: 0 20%;
}
.nav a{
  color: #495057;
}
.nav a:hover {
  font-size: 1.5em;
  font-weight: bold;
  text-decoration-line: none;
}
</style>