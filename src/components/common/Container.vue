<template>
  <div class="hero-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Container'
  }
</script>

<style scoped lang="scss">
  .hero-container{
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
