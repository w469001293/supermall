<style scoped lang='scss'>

</style>

<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image">
      <!-- link: 链接 -->
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script type='text/ecmascript-6'>

  import {Swiper, SwiperItem} from '../../../components/common/swiper'

  export default {
    name:'HomeSwiper',
    // 增加数据, 不理解
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>