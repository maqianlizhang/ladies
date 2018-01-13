<template>
  <div>
    <index-header></index-header>
    <nav-slider></nav-slider>
    <h2 class="popular">流行元素</h2>
    <popular></popular>
    <h2 class="popular">限时秒杀</h2>
    <seconds></seconds>
    <foot home="home"></foot>
  </div>
</template>
<script>
  import IndexHeader from 'components/ui/header'
  import NavSlider from './slider'
  import Popular from './popular'
  import Seconds from './seconds'
  import Foot from 'components/ui/foot'
  export default {
    name: 'Index',
    components: {
      IndexHeader,
      NavSlider,
      Popular,
      Seconds,
      Foot
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