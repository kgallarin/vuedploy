<template>
  <HeaderWrapper>
    <HeaderNav slot="nav"></HeaderNav>
    <div slot="content" class="home-content-inner d-flex">
      <div class="form-texts flex-column d-flex justify-content-start">
        <div class="heading-text">
          <p class="main-text">
            <b>Get in now</b>
            <br class="fp">
            Find people near you
          </p>
          <HeaderForm></HeaderForm>
        </div>
      </div>
    </div>
  </HeaderWrapper>
</template>

<script>
  import HeaderWrapper from './HeaderWrapper.vue'
  import HeaderNav from './HeaderNav.vue'
  import HeaderForm from './HeaderForm.vue'

  export default {
    name:'Header',
    components:{
      HeaderWrapper,
      HeaderForm,
      HeaderNav
    }
  }
</script>

<style lang="scss">
  @import '~styles/texts';

  .home-content-inner {
    background:url("~@images/couple-main.png");
    background-size: 655px;
    background-repeat: no-repeat;
    background-position: 100% 96%;
    margin-top: 50px;
  }

  .form-texts {
    margin-bottom: 94px;
    width: 100%;
  }
  .main-text{
    @include font-settings;
    line-height: normal;
    font-size: $font-lg;
  }
  @media screen and (max-width:1199px){
    .home-content-inner{
      margin-top: 0;
      background:none;
    }
    .form-texts{
      margin-bottom:0;
    }
    .main-text{
      margin-top: 74px;
      font-size: $font-xsmlg;
    }
  }

  @media screen and (max-width:736px){
    .main-text {
      margin-top: 10px;
    }
  }
</style>
