<template>
  <div>
    <index-header></index-header>
    <nav-slider></nav-slider>
    <h2 class="popular">流行元素</h2>
    <popular></popular>
    <h2 class="popular">限时秒杀</h2>
    <seconds></seconds>
  </div>
</template>
<script>
  import IndexHeader from './header'
  import NavSlider from './slider'
  import Popular from './popular'
  import Seconds from './seconds'
  export default {
    name: 'Index',
    components: {
      IndexHeader,
      NavSlider,
      Popular,
      Seconds
    }
  }
</script>
<style scoped lang="stylus">
  .popular
    line-height: .8rem
    padding-left: .3rem
    font-size: .32rem
    color: #f36
    font-weight: bold
    margin-top: .2rem
</style>