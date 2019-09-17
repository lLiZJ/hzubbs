<template>
  <div class>
    <form class="form-horizontal search-form">
      <div class="col-md-4 form-group">
        <input type="text" class="form-control" placeholder="搜索版面、帖子、用户" />
        <a href=""><img class="search-icon" src="../assets/search.png" alt="搜索图标"></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-form {
  margin: 1.5% 0 0 5%;
}
.search-form input {
  border-radius: 10px;
}
.search-form input:hover {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.search-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 5%;
  top: 20%;
  background-image: url("../assets/search.png");
}
</style>