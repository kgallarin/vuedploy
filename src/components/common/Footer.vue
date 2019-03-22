<template>
  <Container>
    <div class="block-container">
      <footer>
        <b-row class="row cont w-100 position-relative">
          <b-col sm="12" md="6" lg="4"  class="fcolumn pl-0">
            <a class="navbar-brand" href="#">
              <img class="img-fluid" src="@images/logo.png" alt="" />
            </a>
            <p class="font-md">
              No lo pienses más y entra al fenómeno
              social del momento. Cada día miles de
              personas como tú se unen a nosotros.
            </p>
          </b-col>

          <!-- FOOT NAV LIST  CONTAINER-->
          <b-col sm="12" md="6" lg="8">
              <b-row class="rev-md">
                <b-col md="12" lg="6" class="ml-0 pl-0">
                  <b-row class="d-flex row-nav">
                    <b-col md="4" class="nav-container pr-0">
                      <!-- NAV LIST 1 -->
                      <ul class="nav footnav">
                        <li class="nav-item">
                          <a class="nav-link active" href="#">Support</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Affiliates</a>
                        </li>
                      </ul>
                    </b-col>

                    <!-- NAV LIST 2 -->
                    <b-col md="4" class="nav-container p-0">
                      <ul class="nav footnav">
                        <li class="nav-item">
                          <a class="nav-link active" href="#">Privacy</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Terms of use</a>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="12" lg="6" class="socials text-right p-0">
                  <a class="btn-ico btn-ico-instagram" href="#">
                    <i class=""></i>
                  </a>
                  <a class="btn-ico btn-ico-facebook" href="#">
                      <i class=""></i>
                  </a>
                  <a class="btn-ico btn-ico-twitter" href="#">
                      <i class=""></i>
                  </a>
                </b-col>
              </b-row>
          </b-col>
          <!-- FOOT NAV LIST  CONTAINER ENDS -->
        </b-row>
      </footer>
    </div>
  </Container>
</template>

<script>
  import Container from './Container.vue'
  export default {
    name: 'Footer',
    components:{
      Container
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/palette';
  @import '~styles/texts';

  footer{
    margin-top: 70px;
    border-top: 1px solid $light_blue;
    padding-bottom: 92px;
    .cont{
      margin: 20px 0 0 0;
    }
    .nav-link{
      @include font-settings
      line-height: 1.44;
      font-size: $font-md;
      color: $secondary;
      margin-bottom: 15px;
      padding: 0 !important;
      &:hover{
        color:$dark;
      }
    }
    .footnav{
      flex-direction: column;
    }
    .row-nav{
      justify-content: center;
    }
  }
  .fcolumn{
    p{
      @include font-settings;
      color: $blue;
      margin-top: 20px;
      line-height: 23px;
    }
  }

  // button icons social
  .socials{
    text-align: right;
    .btn-ico{
      &:last-child{
        margin-right: 0;
      }
    }
  }

  a.btn-ico{
    height: 34px;
    width: 34px;
    line-height: 34px;
    display: inline-block;
    margin-right: 20px;
    &.btn-ico-instagram{
      background-image: url('~@images/icons/insta.png');
      background-size: 100% 100%;
    }
    &.btn-ico-facebook{
      background-image: url('~@images/icons/fb.png');
      background-size: 100% 100%;
    }
    &.btn-ico-twitter{
      background-image: url('~@images/icons/twitter.png');
      background-size: 100% 100%;
    }
  }

  .navbar-brand{
    padding:0;
    img{
      height: 32px;
      width: 218px;
    }
  }
  @media screen and (max-width:1199px){
    footer{
      margin: 70px 66px 0;
      padding-bottom: 73px;
      .row-nav{
        justify-content: space-between;
        padding-left: 35px;
        padding-top: 5px;
      }
    }
    .socials{
      margin-bottom: 20px !important;
    }
    .rev-md{
      flex-direction: column-reverse;
      align-items: flex-end;
    }
    .nav-container{
      display: flex;
      justify-content: flex-end;
    }
  }

  @media screen and (max-width:767px){
    footer{
      border-top: 0;
      margin: 0;
      padding-bottom: 30px;
      .navbar-brand{
        padding: 0;
        margin: 0;
        img{
          height: 32px;
          width: 218px;
        }
      }
      .socials{
        text-align: center!important;
      }
      .nav-container{
        width: 50% !important;
        display: block;
      }
      .nav-container{
        .nav-item{
          text-align: center;
        }
      }
      .fcolumn{
        text-align: center;
        margin-bottom: 30px;
        padding: 0;
        p{
          display: none;
        }
      }
      .row-nav{
        padding-left: 0;
      }
    }
  }
</style>
