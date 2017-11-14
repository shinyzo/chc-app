<template>
  <div class="doctor">
    <h2 class="title">医师列表</h2>
    <Scroll class="doctor-wrapper" ref="list" :click="click" :data="doctorList">
      <div class="doctor-content">
        <div class="item" v-for="doctor in doctorList">
          <div class="item-l">
            <img src="">
          </div>
          <div class="item-r">
            <span class="">{{doctor.doctorName}}</span>

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

  export default {
    data() {
      return {
        doctorList: [],
        click: true
      }
    },
    created() {
      this._getDoctorList()
    },
    watch: {
      doctorList(newVal) {
        console.log('watch')
        this.handleDoctorlist(newVal)
      }
    },
    methods: {
      handleDoctorlist(doctorList) {
        const bottom = doctorList.length > 0 ? '48px' : ''
        this.$refs.list.$el.style.bottom = bottom
        this.$refs.list.refresh()
      },
      _getDoctorList() {
        getDoctorList().then((res) => {
          if (res.body.code === errCode.SUCCESS) {
            this.doctorList = res.body.data
          }
        })
      }
    },
    components: {Scroll, loading}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .doctor
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    .title
      position: absolute
      left: 0
      top: 0
      z-index: 40
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
      width: 100%
      .doctor-content
        padding: 0 16px
        margin-bottom: 58px
        .item
          height: 120px
          border: 1px solid #ccc
          margin: 10px 0px
          display: flex
        .item-l
          flex: 0 0 120px
          width: 120px
          .name
            color: $color-text
            font-size: $font14
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
