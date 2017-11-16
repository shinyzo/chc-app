<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="footer">
      <div class="nav">
        <div class="nav-item" v-for="nav in navs">
          <router-link :to="nav.linkUrl">
            <span class="icon iconfont" :class="nav.icon"></span>
            <span class="text">{{nav.navName}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {errCode} from 'api/config'
  import {getNavList} from 'api/nav'

  export default {
    data() {
      return {
        navs: []
      }
    },
    created() {
      this._getNavList()
    },
    computed: {
    },
    methods: {
      _getNavList() {
        getNavList().then((res) => {
          if (res.body.code === errCode.SUCCESS) {
            this.navs = res.body.data
          }
        })
//        getNavListJp().then((res) => {
//          console.log(res)
//        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  .footer
    position: fixed
    left: 0
    bottom: 0
    z-index: 100
    width: 100%
    height: 48px
    .nav
      display: flex
      width: 100%
      height: 48px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      .nav-item
        flex: 1
        text-align: center
        background: #ffffff
        .icon
          display: block
          height: 24px
          font-size: 20px
          margin-top: 4px
        .text
          display: block
          height: 14px
          line-height: 14px
          font-size: 12px
          font-weight: 700
        & > a
          display: block
          color: rgb(77, 85, 93)
          &.active
            color: rgb(0, 160, 220)
</style>
