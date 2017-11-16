<template>
  <div class="user-center">
    <div class="user-wrapper">
      <div class="setting">
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="avatar-wrapper">
        <div class="avatar">
          <img src="../../common/image/default.png"/>
        </div>
      </div>
      <div class="name">
        张良明
      </div>
    </div>
    <div class="menu-wrapper">
      <div class="menu-content">
        <div class="menu-item">
          <span class="iconfont icon-xihuan"></span>
          <span class="name">我的关注</span>
          <span class="num">0</span>
        </div>
        <div class="menu-item">
          <span class="iconfont icon-biaoxing"></span>
          <span class="name">我的预约</span>
          <span class="num">0</span>
        </div>
        <div class="menu-item">
          <span class="iconfont icon-dingdan"></span>
          <span class="name">我的订单</span>
          <span class="num">0</span>
        </div>
        <div class="menu-item">
          <span class="iconfont icon-shouye"></span>
          <span class="name">我的积分</span>
          <span class="num">0</span>
        </div>
      </div>
    </div>
    <div class="shortcut-wrapper">
      <div class="shortcut-content">
        <div class="item">
          <span class="iconfont icon-xihuan"></span>
          <span class="txt">我的足迹</span>
        </div>
        <div class="item">
          <span class="iconfont icon-zuobiao"></span>
          <span class="txt">我的足迹</span>
        </div>
        <div class="item">
          <span class="iconfont icon-zuji"></span>
          <span class="txt">我的足迹</span>
        </div>
      </div>
      <div class="shortcut-content">
        <div class="item">
          <span class="iconfont icon-xihuan"></span>
          <span class="txt">我的足迹</span>
        </div>
        <div class="item">
          <span class="iconfont icon-tongzhi"></span>
          <span class="txt">我的足迹</span>
        </div>
        <div class="item">
          <span class="iconfont icon-xihuan"></span>
          <span class="txt">我的足迹</span>
        </div>
      </div>
      <div class="shortcut-content">
        <div class="item">
          <span class="iconfont icon-xihuan"></span>
          <span class="txt">我的足迹</span>
        </div>
        <div class="item">
          <span class="iconfont icon-xihuan"></span>
          <span class="txt">我的足迹</span>
        </div>
        <div class="item">
          <span class="iconfont icon-xihuan"></span>
          <span class="txt">我的足迹</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .user-center
    position: fixed
    z-index: 50
    top: 0
    left: 0
    bottom: 48px
    right: 0
    width: 100%
    background: $color-border
    .user-wrapper
      position: relative
      height: 160px
      background: orangered
      .avatar-wrapper
        margin: auto
        position: absolute
        top: -10px
        left: 0
        bottom: 0
        right: 0
        width: 90px
        height: 90px
        background: rgba(255, 255, 255, 0.8)
        border-radius: 50%
        .avatar
          img
            margin-top: 5px
            margin-left: 5px
            width: 80px
            height: 80px
            border-radius: 50%
      .setting
        position: absolute
        top: 0
        right: 0
        .icon-shezhi
          font-size: 18px
          font-weight: 700
          padding: 10px
          display: block
          color: #ffffff

      .name
        position: absolute
        bottom: 0
        left: 0
        margin: 0 auto
        text-align: center
        width: 100%
        color: #ffffff
        height: 36px
        line-height: 36px
        font-weight: 700

    .menu-wrapper
      width: 100%
      height: 70px
      padding: 6px 0px
      margin-top: 10px
      background: #ffffff
      .menu-content
        display: flex
        .menu-item
          flex: 1
          text-align: center
          span
            display: block
            &.iconfont
              font-size: $font18
              height: 25px
              line-height: 25px
              color: $color-text
            &.name, &.num
              height: 25px
              line-height: 25px
              font-size: $font14
              color: $color-text
            &.num
              height: 20px
              line-height: 20px
              font-size: $font12
              color: $color-text-sub

    .shortcut-wrapper
      margin-top: 10px
      background: $color-background
      height: 100%
      .shortcut-content
        display: flex
        height: 82px
        .item
          flex: 1
          border-right:1px solid $color-border
          border-bottom:1px solid $color-border
          text-align: center
          span
            display: block
            &.iconfont
              font-size: 24px
              color: $color-text-sub
              padding: 10px
            &.txt
              font-size: $font14
              color: $color-text-sub
</style>

