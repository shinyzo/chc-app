<template>
  <div>
    <div class="doctor">
      <h2 class="title">医师列表</h2>
      <Scroll class="doctor-wrapper" ref="scroll" :click="click" :data="doctorList">
        <div class="doctor-content">
          <div class="item" v-for="item in doctorList" @click="selectItem(item)">
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
                <div class="icon-item" @click.stop="toogleReserve(item)" :class="{'ractive':item.isReserve}">
                  <span class="iconfont" :class="reserveicon(item)"></span>
                  <span class="txt">{{reservetxt(item)}}</span>
                </div>
                <div class="icon-item" @click.stop="toogleFavorite(item)" :class="{'active':item.isFavorite}">
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
      <confirm ref="confirm" @confirm="cancelReserve" text="是否取消预约？" confirmBtnText="确定"></confirm>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {errCode} from 'api/config'
  import {getDoctorList} from 'api/doctor'
  import Scroll from 'base/scroll/scroll'
  import loading from 'base/loading/loading'
  import Confirm from 'base/confirm/confirm'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        doctorList: [],
        click: true
      }
    },
    computed: {
      ...mapGetters([
        'favoriteList',
        'reserveList'
      ])
    },
    created() {
      this.probeType = 3
      this._getDoctorList()
    },
    methods: {
      showConfirm() {
        this.$refs.confirm.show()
      },
      selectItem(item) {
        // 设置数据至store 路由跳转
        this.$router.push({
          path: `/doctor/${item.doctorId}`
        })
        this.setDoctor(item)
      },
      favoriteicon(item) {
        return this.isFavorite(item) ? 'icon-xihuanfill' : 'icon-xihuan'
      },
      favoritetxt(item) {
        return this.isFavorite(item) ? '已关注' : '关注'
      },
      reserveicon(item) {
        return this.isReserve(item) ? 'icon-biaoxingfill' : 'icon-biaoxing'
      },
      reservetxt(item) {
        return this.isReserve(item) ? '预约中' : '预约'
      },
      cancelReserve() {
        this.deleteReserveList(this.item)
        this.item.isReserve = !this.item.isReserve
      },
      toogleReserve(item) {
        const temp = Object.assign({}, item, {})
        if (this.isReserve(item)) {
          this.showConfirm()
          this.item = item
          return
        } else {
          this.saveReserveList(temp)
        }
        item.isReserve = !item.isReserve
      },
      toogleFavorite(item) {
        const temp = Object.assign({}, item, {})
        if (this.isFavorite(item)) {
          this.deleteFavoriteList(temp)
        } else {
          this.saveFavoriteList(temp)
        }
        item.isFavorite = !item.isFavorite
      },
      isFavorite(doctor) {
        const index = this.favoriteList.findIndex((item) => {
          return item.doctorId === doctor.doctorId
        })
        return index > -1
      },
      isReserve(doctor) {
        const index = this.reserveList.findIndex((item) => {
          return item.doctorId === doctor.doctorId
        })
        return index > -1
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
          item['isReserve'] = false
          const favorites = this.favoriteList
          favorites.forEach((temp) => {
            if (item.doctorId === temp.doctorId) {
              // item = Object.assign({}, item, {isFavorite: true})
              item['isFavorite'] = true
            }
          })
          const reserves = this.reserveList
          reserves.forEach((temp) => {
            if (item.doctorId === temp.doctorId) {
              // item = Object.assign({}, item, {isFavorite: true})
              item['isReserve'] = true
            }
          })
        })
        return list
      },
      ...mapMutations({
        'setDoctor': 'SET_CURRENT_DOCTOR'
      }),
      ...mapActions([
        'saveFavoriteList',
        'deleteFavoriteList',
        'saveReserveList',
        'deleteReserveList'
      ])
    },
    components: {Scroll, loading, Confirm}
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
              padding: 7px 0
              display: block
              color: $color-text-sub
              &.active
                color: red
              &.ractive
                color: darkgreen
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
