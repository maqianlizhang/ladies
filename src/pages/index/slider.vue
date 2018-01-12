<template>
  <div>
    <swiper :options="swiperOption"  class="nav-slider-container">
      <swiper-slide v-for="item in navslider" :key="item.id">
        <div class="nav-slider">
          <img class="nav-img" :src="item.imgUrl">
        </div> 
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template> 
<script>
  import axios from 'axios'
  export default {
    name: 'NavSlider',

    data () {
      return {
        navslider: [],
        swiperOption: {
          autoplay: 3000,
          loop: true,
          initialSlide: 1,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false
        }
      }
    },

    created () {
      this.getNavInfo()
    },

    methods: {
      getNavInfo () {
        axios.get('/static/navslider.json')
          .then(this.handleGetSliderInfoSucc.bind(this))
          .catch(this.handleGetSliderInfoErr.bind(this))
      },
      handleGetSliderInfoSucc (res) {
        this.navslider = res.data.data.navslider
      },
      handleGetSliderInfoErr () {
        console.log('获取navslider失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .nav-slider-container
    .nav-slider
      height: 0
      padding-bottom: 45%
      .nav-img
        width: 100%
    >>>.swiper-pagination-bullet
      background: #d44c6c
</style>