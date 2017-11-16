<template>
  <transition name="slide">
    <div class="doctor-detail">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <h1 class="title">{{doctor.doctorName}}</h1>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'doctor'
      ])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'
  .doctor-detail
    position: absolute
    z-index: 120
    top: 0
    left: 0
    bottom: 0
    right: 0
    width: 100%
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
</style>
