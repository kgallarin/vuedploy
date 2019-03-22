<template>
  <CardWrapper>
    <div slot="card-list" class="oflow"> <!-- MOBILE OVERFLOW WRAPPER -->
      <b-row class="ml-0 mr-0">
        <slot name="is-loading"></slot>
        <slot name="card"></slot>
      </b-row>
    </div>
  </CardWrapper>
</template>

<script>
  import Card from './Card.vue'
  import CardWrapper from './CardWrapper.vue'
  export default {
    name: 'CardList',
    components:{
      Card,
      CardWrapper
    }
  }
</script>

<style lang="scss">
  .cards-main{
    overflow: auto;
    padding: 40px 0 0 15px;
    margin: 0 0 70px 0;
  }
  @media screen and (max-width:1199px){
    .cards-main{
      overflow: auto;
      padding: 40px 0 0 15px;
      margin: 0 0 70px 0;
      .cards-cont{
        overflow: auto;
      }
      .oflow{
        width: 1450px;
      }
    }
  }
</style>
