<template>
  <ul>
    <li class="product-con" v-for="item in secondsInfo">
      <div class="product-img-container">
          <img class="product-img" :src="item.imgUrl" :key="item.id">
      </div>
      <div class="product-info">
        <p class="product-title">{{item.title}}</p>
        <p class="product-now-price">限时价<span class="now-price">&yen;{{item.nowprice}}</span></p>
        <p class="product-before-price">原价<span>&yen;{{item.beforeprice}}</span></p>
        <a href="javascript:;" class="buy">立即抢购</a>
      </div>
    </li>
  </ul>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Seconds',

    data () {
      return {
        secondsInfo: []
      }
    },

    created () {
      this.getSecondsInfo()
    },

    methods: {
      getSecondsInfo () {
        axios.get('/static/seconds.json')
          .then(this.handleGetSecondsInfoSucc.bind(this))
          .catch(this.handleGetSecondsInfoErr.bind(this))
      },
      handleGetSecondsInfoSucc (res) {
        this.secondsInfo = res.data.data.seconds
      },
      handleGetSecondsInfoErr () {
        console.log('获取seconds失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .product-con
    display: flex
    margin-bottom: .3rem
    padding-left: .3rem
    .product-img-container
      width: 2rem
      margin-right: .3rem
      .product-img 
        width: 100%
    .product-info
      flex: 1
      display: flex
      flex-direction: column
      justify-content: center
      color: #333
      .product-title
        font-size: .3rem
      .product-now-price
        margin-top: .3rem
        font-size: .2rem
        .now-price
          font-size: .3rem
          margin-left: .1rem
          color: #f36
          font-weight: bold
      .product-before-price
        font-size: .2rem
        padding-top: .05rem
        color: #aaa
      .buy
        line-height: .5rem
        width: 2rem
        background: #f36
        margin-top: .2rem
        text-align: center
        color: #fff
        border-radius:.1rem

</style>