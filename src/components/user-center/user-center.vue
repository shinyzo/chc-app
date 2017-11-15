<template>
    <div class="user">
        <div class="user-wrapper">
          <div class="setting"></div>
        </div>
        <div class="menu-wrapper">
          <ul>
            <li>我的预约</li>
            <li>我的订单</li>
            <li>我的关注</li>
            <li>我的积分</li>
          </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .user
    position: fixed
    z-index: 50
    top: 0
    left: 0
    bottom: 48px
    right: 0
    width: 100%
</style>

