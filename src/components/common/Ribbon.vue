<template>
  <div class="post-foot">
    <Container class="p-0">
      <div class="block-container">
        <b-row class="d-flex hero p-0">
          <b-col sm="12" md="4" lg="3" class="p-0 logo"><img width="142" src="@images/logo2.png" alt="" /></b-col>
          <b-col sm="12" md="8" lg="6" class="p-0 text-center cpy">
            <p class="m-0">Copyright © 2019 Smoochat Todos los derechos reservados.</p>
          </b-col>
          <b-col lg="3" class="cred">
            <div>
              <p class="m-0">Don't forget to give credit</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </Container>
  </div>
</template>

<script>
  import Container from './Container.vue'
  export default {
    name: 'Ribbon',
    components:{
      Container
    },
    data: () => ({

    })
  }
</script>

<style lang="scss">
  @import '~styles/palette';
  @import '~styles/texts';

  .post-foot{
    background: $teal;
    padding: 12px 0;
    font-size: $font-sm;
    line-height: normal;
    @include font-settings;
    .hero{
      margin: 0 auto;
      .cred{
        text-align: right!important;
        padding:0;
        p{
          line-height: 23px;
          padding-right: 20px;
          &:after{
            content: "💙";
            position:absolute;
            top:0;
            right: 0;
          }
        }
      }
    }
    .cpy{
      p{
        padding-top: 5px;
      }
    }
  }
  @media screen and (max-width:1199px){
    .post-foot{
      .block-container{
        margin: 0 66px;
      }
      div{
        text-align: center !important;
      }
      .logo{
        text-align: left !important;
      }
      .cpy{
        line-height: 20px;
        text-align: right !important;
      }
      .cred{
        display: none;
      }
    }
  }
  @media all and (max-width:1199px) and (min-width:991px){
    .cpy{
      flex: 75%;
      max-width: 75%;
      text-align: right;
    }
  }
  @media screen and (max-width:767px){
    .post-foot{
      .logo,.cred{
        display: none;
      }
      .block-container{
        padding: 0;
        margin: 0;
      }
      .cpy{
        text-align: center !important;
        padding: 0;
      }
    }
  }
</style>
