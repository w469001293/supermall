<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>

  import NavBar from '../../components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'

  // 用{}引入, 因为home.js没有用export.default导出
  import {getHomeMultidata} from '../../network/home'

  export default {
    name: "Home",
    components: { 
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        // result: null,
        banners: [],
        recommends: []
      }
    },
    // 创建完成后, 实施生命周期函数
    created() {
      // 1. 请求多个数据

      // 函数执行完之后,里面所有东西都会被内存回收
      // result会保存, 垃圾回收机制
      getHomeMultidata().then(res => {
        // res被回收, 所以res中的内容也会被回收 -- 垃圾回收
        // console.log(res);
        // result存在与组件中,回收变量名字res,对象result没有回收
        // this.result = res;
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })

      // 不能打印, 因为是异步操作
      // getHomeMultidata 还没有执行完, 就执行result, 所以结果为空
      // console.log(this.result)
      // 可以通过工具验证,Vue.js devtools 火狐浏览器 vue开发调试
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
