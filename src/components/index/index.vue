<template>
  <div class="index">
    <div class="notice" v-show="notice">
      <ul>
        <li>
          <marquee>公告：系统将于2017年11月15日0:00-6:00进行系统维护，给您带来不便，敬请谅解！</marquee>
        </li>
      </ul>
    </div>
    <div @click="toogleNotice">
      fdsfdsfsdfdfdfds

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        notice: '11111'
      }
    },
    methods: {
      toogleNotice() {
        this.notice = !this.notice
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .index
    position: fixed
    z-index: 50
    top: 0
    left: 0
    bottom: 48px
    right: 0
    width: 100%
    .notice
      display: fixed
      top: 0
      left: 0
      height: 40px
      ul
        li
          height: 40px
          line-height: 40px
          background: $color-theme

</style>

