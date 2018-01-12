<template>
  <div>
    <swiper :options="navOption"  class="popular-container">
      <swiper-slide v-for="(page, index) in pages" class="popular" :key="index">
        <div class="popular-con" v-for="(item, index) in page" :key="item.id">
          <img class="popular-img" :src="item.imgUrl" >
          <span class="popular-title">{{item.title}}</span> 
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'popular',

    data () {
      return {
        popular: [],
        page: [],
        navOption: {
          initialSlide: 1,
          pagination: '.swiper-pagination'
        }
      }
    },

    created () {
      this.getPopularInfo()
    },

    computed: {
      pages () {
        const pages = []
        this.popular.forEach((value, index) => {
          let page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    },

    methods: {
      getPopularInfo () {
        axios.get('/static/popular.json')
          .then(this.handleGetPopularInfoSucc.bind(this))
          .catch(this.handleGetPopularInfoErr.bind(this))
      },
      handleGetPopularInfoSucc (res) {
        this.popular = res.data.data.popular
      },
      handleGetPopularInfoErr () {
        console.log('获取popular失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .popular-container
    .popular
      height: 3rem
      display: flex
      align-items: center
      flex-wrap: wrap
      .popular-con
        display: flex
        flex-direction: column
        align-items: center
        width: 25%
        .popular-img
          height: 1rem
          width: 1rem
          border-radius: .77rem
        .popular-title
          color: #aaa
          margin-top: .2rem
    >>>.swiper-pagination-bullet
      background: #f36
</style>