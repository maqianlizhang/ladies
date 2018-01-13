<template>
  <div class="foot">
    <router-link to="/" class="nav" :class="home" tag="div">
      <span class="iconfont icon" >&#xe699;</span>
      <span>首页</span>
    </router-link>
     <router-link to="/classify" class="nav" :class="classify" tag="div"> 
      <span class="iconfont icon" :class="classify">&#xe7f9;</span>
      <span>分类</span>
    </router-link>
    <router-link to="/cart" class="nav" :class="cart" tag="div">
      <span class="iconfont icon">&#xe673;</span>
      <span>购物车</span>
    </router-link>
    <router-link to="/mine" class="nav" :class="mine" tag="div">
      <span class="iconfont icon">&#xe615;</span>
      <span>我</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'indexfoot',
    props: ['home', 'classify', 'cart', 'mine']
  }
</script>
<style scoped lang="stylus">
  .foot
    position: fixed
    right: 0
    bottom: 0
    left: 0
    height: 1rem
    background: #fff
    display: flex
    justify-content: space-around
    align-items: center
    .nav
      width: 25%
      height: 100%
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-around
      .icon
        font-size: .4rem
    .home
      color: #f36
</style>
