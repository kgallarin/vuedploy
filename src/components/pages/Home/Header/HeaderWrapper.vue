<template>
  <section class="home-wrapper">
    <Container>
      <div class="home-content">
        <slot name="nav"></slot>
        <slot name="content"></slot>
      </div>
    </Container>
  </section>
</template>

<script>
  import Container from '@views/common/Container.vue'

  export default {
    name:'HeaderWrapper',
    components:{
      Container
    }
  }
</script>
<style scoped lang="scss" scoped>
  @import '~styles/texts';

  .home-wrapper{
    width: 100%;
    margin: 0 auto;
    background:url('~@images/desktopbg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    .home-content{
        padding: 0 138px 0;
    }
  }
  @media screen and (max-width:1199px){
    .home-wrapper{
      background: url("~@images/couple-solo.png"), url("~@images/blankbg.png") #f4f8fd;
      background-repeat: no-repeat,no-repeat;
      background-position: 108% 101%,100%!important;
      background-size: 415px 405px,cover!important;
      padding: 0 66px 72px;
      .main-text{
        margin-top: 74px;
        font-size: $font-xsmlg;
      }
      .home-content{
        padding:0;
      }
    }
  }
  @media screen and (max-width:736px){
    .home-wrapper {
        background-size: 355px 365px,cover !important;
        padding: 0 37px 70px;
    }
  }
  @media all and (max-width:567px){
    .home-wrapper{
      background: url("~@images/couple-no-shadow.png"), url("~@images/mobilebg.png") #f4f8fd;
      background-repeat: no-repeat,no-repeat;
      background-position: 100% 100%, 0% -8% !important;
      background-size: 405px,100% !important;
      padding: 0 37px 410px;
      .main-text{
        margin-top: 10px;
        font-size: $font-xsmlg;
      }
      .home-content{
        padding:0;
      }
    }
  }
  @media all and (max-width: 375px){
  .home-wrapper {
      background-size: 355px,100%!important;
      padding: 0 37px 365px;
    }
  }

  @media all and (max-width:320px){
    .home-wrapper {
      background-size: 305px,100%!important;
      padding: 0 37px 305px;
    }
  }
</style>
