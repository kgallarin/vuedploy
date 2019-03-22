<template>
  <Fragment>

    <Header></Header>

    <div class="adown">
      <Cards></Cards>
      <Features></Features>
      <Footer></Footer>
      <Ribbon></Ribbon>
    </div>
  </Fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment'

  import Header from './Header/'
  import Cards from '@views/pages/Home/Cards'
  import Features from '@views/pages/Home/Features'
  import Footer from '@views/common/Footer'
  import Ribbon from '@views/common/Ribbon'

  export default {
    components:{
      Header,
      Fragment,
      Cards,
      Features,
      Footer,
      Ribbon
    }
  }
</script>

<style>
  div.adown{
    background-image:url('~@images/atwd.jpg');
    background-color:#f9fafe;
    background-size: cover;
    height: 100%;
  }
</style>
