<template>
   <b-row class="row align-items-center w-100 rtl section-4 mobile-col-rev ml-0">
     <b-col md="6" sm="12" class="align-items-start half-cont p-0">
       <slot name="image"></slot>
     </b-col>
     <b-col md="6" sm="12" class="half-2 half-cont">
       <div class="contents">
        <slot name="header-text"></slot>
        <slot name="subtexts"></slot>
        <slot name="button"></slot>
       </div>
     </b-col>
   </b-row>
</template>

<script>
  export default {
    name:'FeaturesRTL'
  }
</script>
