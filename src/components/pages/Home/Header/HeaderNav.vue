<template>
  <header>
    <b-navbar class="navbar justify-content-between">
      <b-navbar-brand class="navbar-brand" href="#">
        <img class="img-fluid" src="@images/logo.png" alt="" />
      </b-navbar-brand>
      <div class="d-flex member-btn">
        <div class="d-flex align-items-center">
          <span class="get-in-label">Already a member?</span>
        </div>
        <div class="d-flex align-items-center">
          <a href="#" class="mbtn btn-secondary btn-smoo-secondary">Get in</a>
        </div>
      </div>
    </b-navbar>
  </header>
</template>

<script>
  export default {
    name:'HeaderNav'
  }
</script>

<style scoped lang="scss" scoped>
  @import '~styles/buttons';
  @import '~styles/palette';
  .navbar {
      padding: 26px 0;
  }
  .navbar-brand{
    img{
      height: 27px;
      width: 181px;
    }
  }
  .get-in-label{
    margin-right: 15px;
    @include font-settings;
    font-family: $circular-font-bold;
    font-size: $font-smd;
    color:$dark;
  }

  @media screen and (max-width:1199px){
    .navbar-brand{
      img{
        height: 18px;
        width: 120px;
      }
    }
    .get-in-label{
      font-size:$font-smd;
    }
  }

  @media all and (max-width:767px){
    .get-in-label{
      display:none;
    }
  }
</style>
