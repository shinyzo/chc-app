<template>
  <div class="shortcut" v-show="datalist && dataList.length">
    <div class="shortcut-content" v-for="(item,index) in datalist" v-show="index <= linecount-1">
      <div class="shortcut-item">
        <span class="iconfont" :class="item.icon"></span>
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      dataList: {
        type: Array,
        default: []
      },
      linecount: {
        type: Number,
        default: 4
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shortcut
    width: 100%
    height: 100%
    .shortcut-content
      display: flex
      .shortcut-item
        flex: 1
        span
          display: block
          text-align: center
          height: 50%
          &.iconfont
            font-size: 16px

</style>
