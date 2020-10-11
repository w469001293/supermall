<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>

<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
        <!-- <span>{{item.title}}</span> -->
      </a>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name:'RecommendView',
    props: {
      recommends: {
        type: Array,
        required: true
      }
    }
  }
</script>