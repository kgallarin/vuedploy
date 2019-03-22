<template>
  <div class="grid cards-main">
    <Container>
      <div class="cards-cont">
        <slot name="card-list"></slot> <!-- SLOT HERE -->
      </div>
    </Container>
  </div>
</template>

<script>
 import Container from '@views/common/Container'
  export default {
    name:'CardWrapper',
    components: {
      Container
    }
  }
</script>

<style lang="scss">
  .cards-main{
    padding: 40px;
    width: 100%;
    position: relative;
    box-shadow: 13px 0px 75px 0 rgba(23, 128, 224, 0.4);
    background-color: #f6f9fd;
    margin-bottom: 135px;
  }
  @media screen and (max-width:1199px){
    .cards-main{
      overflow: auto;
      padding: 40px 0 0 15px;
      margin: 0 0 70px 0;
      .cards-cont{
        overflow: auto;
      }
    }
  }
</style>
