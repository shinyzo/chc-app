<template>
  <div class="doctor">
    <h2 class="title">医师列表</h2>
    <Scroll class="doctor-wrapper" ref="scroll" :click="click" :data="doctorList">
      <div class="doctor-content">
        <div class="item" v-for="item in doctorList">
          <div class="item-l">
            <img @load="loadImage" src="../../common/image/default.png" width="80" height="80">
          </div>
          <div class="item-r">
            <div class="top">
              <span class="name">{{item.doctorName}}</span>
              <span class="subject">{{item.subject}}</span>
              <span class="txt">{{item.sex}}</span>
            </div>
            <div class="work">
              <span class="name">{{item.workHospital}}</span>
              <span class="txt">{{item.level}}</span>
            </div>
            <div class="desc">
              <span class="txt">{{item.birthday}}</span>
              <span class="workage">从业年限：{{item.workAge}} 年</span>
            </div>
            <div class="desc">
              <span class="txt">状态：在线</span>
            </div>
            <div class="icon">
              <div class="icon-item" @click="order(item)">
                <span class="iconfont icon-biaoxing"></span>
                <span class="txt">预约</span>
              </div>
              <div class="icon-item" @click="toogleFavorite(item)" :class="{'active':item.isFavorite}">
                <span class="iconfont" :class="favoriteicon(item)"></span>
                <span class="txt">{{favoritetxt(item)}}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Scroll>
    <div class="loading-container" v-show="!doctorList.length">
      <loading></loading>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import {errCode} from 'api/config'
  import {getDoctorList} from 'api/doctor'
  import Scroll from 'base/scroll/scroll'
  import loading from 'base/loading/loading'
  import {mapActions} from 'vuex'
  import {loadFavorite} from 'common/js/cache'

  export default {
    data() {
      return {
        doctorList: [],
        orderDoctors: [],
        favoriteDocotrs: [],
        click: true
      }
    },
    created() {
      this.probeType = 3
      this._getDoctorList()
    },
    methods: {
      favoriteicon(item) {
        return item.isFavorite ? 'icon-xihuanfill' : 'icon-xihuan'
      },
      favoritetxt(item) {
        return item.isFavorite ? '已关注' : '关注'
      },
      toogleFavorite(item) {
        const temp = Object.assign({}, item, {})
        this.setFavoriteList(temp)
        item.isFavorite = !item.isFavorite
      },
      filter(image) {
        return '../../common/image/' + image
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      },
      _getDoctorList() {
        getDoctorList().then((res) => {
          if (res.body.code === errCode.SUCCESS) {
            this.doctorList = this._normalizeList(res.body.data)
          }
        })
      },
      _normalizeList(list) {
        list.forEach((item) => {
          item['isFavorite'] = false
          const favorites = loadFavorite()
          favorites.forEach((temp) => {
            if (item.doctorId === temp.doctorId) {
              // item = Object.assign({}, item, {isFavorite: true})
              item['isFavorite'] = true
            }
          })
        })
        return list
      },
      ...mapActions([
        'setFavoriteList'
      ])
    },
    components: {Scroll, loading}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .doctor
    position: fixed
    z-index: 50
    top: 0
    left: 0
    bottom: 48px
    right: 0
    width: 100%
    .title
      position: absolute
      top: 0
      left: 0
      z-index: 60
      width: 100%
      height: 40px
      line-height: 40px
      background: $color-theme
      color: $color-white
      text-align: center
      font-size: $font14
    .doctor-wrapper
      position: absolute
      top: 40px
      left: 0
      bottom: 0
      width: 100%
      .doctor-content
        padding: 15px 12px
        .item
          height: 120px
          border: 1px solid $color-border
          border-radius: 10px
          display: flex
          margin-bottom: 15px
          &:last-child
            margin-bottom: 0
        .item-l
          flex: 0 0 100px
          width: 100px
          img
            margin: 0 auto
            text-align: center
            margin: 20px 0 0 10px
            border-radius: 50%
        .item-r
          position: relative
          flex: 1
          margin-left: 5px
          margin-top: 15px
          .top
            height：40px
            line-height: 40px
            .name
              font-size: $font14
              color: $color-text
            .txt
              margin-left: 10px
              font-size: $font12
              color: $color-text-sub
            .subject
              margin-left: 10px
              font-size: $font12
              color: $color-text-sub
          .work
            height: 25px
            line-height 25px
            color: $color-text-sub
            margin-top: 5px
            margin-left: 10px
            .name
              font-size: $font14
            .txt
              margin-left: 10px
              font-size: $font12
          .desc
            height: 25px
            line-height 25px
            color: $color-text-sub
            .txt, .workage
              margin-left: 10px
              font-size: $font12
          .icon
            position: absolute
            bottom: 15px
            right: 0
            width: 72px
            height: 60px
            color: $color-text-sub
            .icon-item
              height: 20px
              line-height: 20px
              font-size: $font14
              padding:7px 0
              display: block
              color: $color-text-sub
              &.active
                color: red
              .iconfont
                font-size: $font16
              .txt
                margin-left: 5px
                font-size: $font12

    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
