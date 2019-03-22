<template>
  <Container>
      <div class="block-container">
        <section class="half-grids">
          <slot name="feature"></slot>   <!-- SLOT HERE -->
        </section>
      </div>
  </Container>
</template>

<script>
  import Container from '@views/common/Container.vue'
  export default {
    name:'FeaturesWrapper',
    components:{
      Container
    }
  }
</script>

<style lang="scss">
  @import '~styles/texts';
  @import '~styles/buttons';

  .half-grids{
    .mbtn{
      margin-top: 30px;
    }
  }

  .header-texts{
    @include font-settings;
    font-size: 36px;
    font-weight: bold;
    line-height: normal;
    margin-bottom: 20px;
    color: $primary;
    font-family: $circular-font-bold;
  }

  .subtexts{
    @include font-settings;
    font-family: $circular-font;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.88;
    color: $primary;
  }
  img{
    &.absolute-for-size{
      position: absolute;
      top: -215px;
      width: 474px;
      left: -92px;
      max-width: 716px;
      width: 590px;
    }
  }

  .ltr,.rtl{
    margin-top: 90px;
    .btn{
      margin-top: 20px;
    }
    color:$blue;
    p{
      line-height: 30px;
    }
  }
  .ltr{
    padding-left: 50px;
  }

  .rtl{
    img{
      max-height: 505px;
    }
    .half-2{
      padding-left: 50px;
    }
  }
  .has-abs-img{
    padding-bottom:136px;
  }

  @media screen and (max-width:1199px){
    img{
      &.absolute-for-size{
        width: 100%;
        position: relative;
        top:0;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
    .block-container{
      padding:0;
    }
    .has-abs-img{
      padding-bottom:24px;
    }
  }

  @media screen and (max-width:767px){
    .half-grids{
      .ltr,.rtl{
        margin-bottom: 80px;
      }
      .btn-smoo-primary{
        margin-bottom: 80px;
        width: 100%;
      }
      .ltr{
        padding-left: 0;
      }
      .rtl{
        .half-2{
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    .half-cont{
      .contents{
        padding:0 37px;
      }
      img{
        margin: 0 auto;
        display: block;
      }
    }
    .has-abs-img{
      padding-bottom:10px;
    }
    .mobile-col-rev{
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
