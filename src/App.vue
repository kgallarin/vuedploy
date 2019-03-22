<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
  import Home from '@views/pages/Home'

  export default {
    name: 'app',
    components:{
      Home
    },
    data () {
      return { }
    }
  }
</script>

<style lang="scss">
  @import '~styles/app.scss';
</style>
