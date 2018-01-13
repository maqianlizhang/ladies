<template>
  <div>
    <classify-header></classify-header>    
    <ul class="classify">
      <li v-for="item in classifyInfo" :key="item.id">
        <h2 class="classify-title">{{item.title}}</h2>
       <ul>
         <li v-for="img in item.img" class="classify-info">
           <img :src="img.imgUrl" :key="img.id">
           <span>{{img.title}}</span>
         </li>
       </ul>
      </li>
    </ul>
    <foot classify="home"></foot>
  </div>
</template>
<script>
  import axios from 'axios'
  import ClassifyHeader from 'components/ui/header'
  import Foot from 'components/ui/foot'
  export default {
    name: 'classify',

    data () {
      return {
        classifyInfo: []
      }
    },

    components: {
      Foot,
      ClassifyHeader
    },

    created () {
      this.getClassifyInfo()
    },

    methods: {
      getClassifyInfo () {
        axios.get('/static/classify.json')
          .then(this.handleGetClassifyInfoSucc.bind(this))
          .catch(this.handleGetClassifyInfoErr.bind(this))
      },
      handleGetClassifyInfoSucc (res) {
        this.classifyInfo = res.data.data.classify
      },
      handleGetClassifyInfoErr () {
        console.log('获取classify失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .classify-title
    line-height: 1rem
    font-size: .32rem
    color: #f36
    font-weight: bold
    padding-left: .3rem
  .classify-info
    width: 25%
    height: 5rem
</style>