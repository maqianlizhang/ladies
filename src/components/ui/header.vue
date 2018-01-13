<template>
  <div class="header border-top">
    <span class="logo iconfont">&#xe7a2;</span>
    <div class="search">
      <input class="search-input" placeholder="请输入内容" name="">
      <span class="search-text iconfont">&#xe627;</span>
    </div>
    <span class="message iconfont">&#xe606;</span>
  </div>
</template>
<script>
  export default {
    name: 'IndexHeader'
  }
</script>
<style scoped lang="stylus">
  .header
    line-height: .86rem
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      display: inline-block
      width: 1.14rem
      text-align: center
      color:#d44c6c
      font-size: .6rem
    .search
      flex:1
      height: .6rem
      position: relative
      display: flex
      font-size: .32rem 
      align-items: center
      .search-text
        position: absolute
        left: .16rem
        top: -.1rem
        display: inline-block
        height: 100%
        font-size: .32rem
        color: #999
      .search-input
        height: 100%
        flex: 1
        background: #f4f4f4
        border-radius: .1rem
        padding-left: .6rem;
        &::placeholder
          color: #999 
    .message
      width: 1rem
      text-align: center
      color: #6c6c6c
      font-size: .5rem
</style>