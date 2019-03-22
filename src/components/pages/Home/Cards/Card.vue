<template>
  <b-col col lg="2" class="card-item">
    <a href="#">
      <div class="card smoocards">
        <slot name="image"></slot>
        <div class="card-body">
          <slot name="username"></slot>
          <slot name="age"></slot>
          <slot name="name"></slot>
        </div>
      </div>
    </a>
  </b-col>
</template>

<script>
  export default {
    components:{
      name:'Card'
    }
  }
</script>

<style lang="scss">
  @import '~styles/texts';

  .smoocards{
    border: none !important;
    border-radius: 8px;
    text-align: center;
    max-width: 210px;
    min-height: 310px;
    box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.2);
    p{
      line-height: normal;
      margin-bottom: 3px;
    }
    .card-title{
      @include ellipsis;
      @include text-oflow;
      font-size: $font-mdlg;
      color:$lblue;
    }
    .age{
      font-size: $font-xsm;
      color:$red;
    }
    .card-text{
      color:$black;
      font-size: $font-md;
    }
  }
  @media all and (max-width:1199px){
    .smoocards{
      margin-bottom: 15px;
    }
  }
</style>
