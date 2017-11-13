<template>
  <div class="doctor">
    <h2 class="title">医师列表</h2>
    <Scroll class="doctor-wrapper" :click="click" :data="doctorList">
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


  </div>
</template>
<script type="text/ecmascript-6">
  import {getDoctorList} from 'api/doctor'
  import Scroll from 'base/scroll/scroll'

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
    methods: {
      _getDoctorList() {
        this.doctorList = getDoctorList()
      }
    },
    components: {Scroll}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .doctor
    .title
      position: fixed
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
      padding: 10px 16px
      .doctor-content
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
            font-size:$font14


</style>
