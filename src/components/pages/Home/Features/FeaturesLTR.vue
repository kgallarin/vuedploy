<template>
  <b-row class="align-items-center w-100 ltr d-flex rev ml-0">
    <b-col md="6" sm="12" class="col-md-6 col-sm-12 half-cont p-0">
      <div class="contents">
        <slot name="header-text"></slot>
        <slot name="subtexts"></slot>
        <slot name="button"></slot>
      </div>
    </b-col>
    <b-col md="6" sm="12" class="align-items-start half-cont p-0">
      <slot name="image"></slot>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    name:'FeaturesLTR',
    components:{}
  }
</script>
