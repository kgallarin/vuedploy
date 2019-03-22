<template>
  <Fragment>
    <div class="form-home">
      <form class="d-flex flex-column">
        <div class="select">
          <div class="select-label">
            <label for="select">I am</label>
          </div>
          <div class="select-input">
            <select name="select" class="rounded-right" v-model="selected" placeholder="Looking for ...">
              <option disabled>Please select one</option>
              <option v-for="opt in options" v-text="opt"></option>
            </select>
          </div>
        </div>
        <div class="email">
          <div class="email-label">
            <label for="email" >Email</label>
          </div>
          <div class="email-input rounded-right">
            <input type="text"placeholder="email@domain.com" />
          </div>
        </div>
        <button type="submit" class="submit">join free</button>
      </form>
    </div>
  </Fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment';

  export default {
    name:'HeaderForm',
    data: () => ({
      options: [ 'Man looking for woman', 'Woman looking for man' ],
      selected: 'Man looking for woman'
    }),
    components: {
      Fragment
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/buttons';

  .form-home{
    margin-top: 22px;
    button.submit{
      @include font-settings;
      font-weight: bold;
      font-family: $circular-font-bold;
      width: 300px;
      height: 50px;
      border-radius: 25px;
      display: block;
      box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.2);
      background-image: radial-gradient(circle at 50% 0, #ff974d, #fd3886);
      border: 0;
      color: #fff;
      text-transform: uppercase;
      font-size: $font-md;
    }
    select{
      padding-right: 32px;
    }
    select, input{
      font-size: $font-sm;
      height: 40px;
      width: 250px;
      margin-bottom: 25px;
      background: $white;
      position: relative;
      border:1px solid $form-border;
      border-radius: 4px;
      box-shadow: 0 11px 14px -10px $form-border;
      &:focus{
        border: 1px solid #fd6982 !important;
      }
    }
    .select-input,.email-input{
      position: relative;
      -webkit-appearance:none !important;
      width: 250px;
      &:after{
        content: " ";
        background-image: url('~@images/icons/bfore.png');
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        height: 40px;
        width: 4px;
        position: absolute;
        border-radius: 4px;
        top: 0px;
        border-top-left-radius: 37px;
        border-bottom-left-radius: 55px;
      }
    }
    .select-input{
      z-index: 1;
      background: $white;
      margin-bottom: 25px;
      border-radius: 4px;
      &:before{
        content: " ";
        background-image: url('~@images/icons/active.png');
        background-repeat: no-repeat;
        background-size: 100%;
        display: block;
        height: 14px;
        width: 14px;
        position: absolute;
        top: 0;
        left: 225px;
        z-index: -1;
        top: 14px;
      }
      select{
        background: $transparent;
        margin-bottom: 0;
      }
    }
    .email-input{
      input{
        margin-bottom: 30px;
      }
    }
  }
  @media screen and (max-width:1199px){
    .form-home{
      select, input {
          width: 316px;
      }
      .select-input, .email-input {
        width: 316px;
      }
      button.submit{
        width: 316px;
      }
      .select-input:before {
        right: 12px;
        left: inherit;
      }
    }
  }
  @media all and (max-width:567px){
    .form-home{
      .select-input, .email-input {
        width: 100%;
      }
      button.submit{
        width: 100% ;
      }
      select, input {
          width: 100%;
      }
    }
  }
</style>
