<template>
  <div class="index">
    <div class="search-wrapper">
      <search-box :placeholder="placeholder"></search-box>
    </div>
    <scroll ref="scroll" :probeType="probeType" class="scroll-content" :data="dataList">
      <div>
        <div v-if="banners && banners.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="item in banners">
                <a :href="item.linkUrl">
                  <img @load="loadImage" src="../../common/image/banner_3.png">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="shortcut-wrapper">
          <div class="shortcut-content">
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">爱心捐献</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">互动专区</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">在线答疑</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">分诊咨询</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">社区医院</div>
            </div>
          </div>
        </div>
        <div class="lifetip-wrapper">
          <div class="lifetip-l">
            <i class="iconfont icon-gonglve"></i>
            <div class="txt">
              <div>今日</div>
              <div>头条</div>
            </div>
          </div>
          <div class="lifetip-r">
            <ul ref="lifetip">
              <li>早上吃牛奶+鸡蛋....</li>
              <li>早上吃牛奶+鸡蛋....</li>
              <li>早上吃牛奶+鸡蛋....</li>
              <li>早上吃牛奶+鸡蛋....</li>
              <li>早上吃牛奶+鸡蛋....</li>
              <li>早上吃牛奶+鸡蛋....</li>
            </ul>
          </div>
        </div>
        <div class="recommend-wrapper lanmuarea">
          <div class="title">
            <div><i class="iconfont icon-zantongfill"></i><span class="name"> 名医推荐 </span></div>
          </div>
          <div class="content">
            <div class="item-wrapper">
              <div class="item">
                <div class="item-l">
                  <img src="../../common/image/default.png" width="90" height="90">
                </div>

                <div class="item-r">
                  <h2 class="name">林医生</h2>
                  <div class="txt">
                    <span>主任医师</span> <span>海南省人民医院</span>
                  </div>
                  <div class="desc">
                    林冲，1987年，海南省人民医院专家级医师，曾多次评为国家级别奖项
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-l">
                  <img src="../../common/image/default.png" width="90" height="90">
                </div>

                <div class="item-r">
                  <h2 class="name">林医生</h2>
                  <div class="txt">
                    <span>主任医师</span> <span>海南省人民医院</span>
                  </div>
                  <div class="desc">
                    林冲，1987年，海南省人民医院专家级医师，曾多次评为国家级别奖项
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="expert-wrapper lanmuarea">
          <div class="title">
            <div><i class="iconfont icon-zuobiaofill"></i><span class="name"> 活动专题 </span></div>
          </div>
          <div class="content" ref="listgroup">
            <div class="item" v-for="(item,index) in activitys">
              <div class="img"><img src="../../common/image/huiyi.jpg"></div>
              <div class="tip">{{item.title}}</div>
              <div class="desc">
                <p>{{item.desc}}</p>
              </div>
            </div>

          </div>

        </div>

        <div class="aixin-wrapper lanmuarea">
          <div class="title">
            <div><i class="iconfont icon-xihuanfill"></i><span class="name"> 爱心捐献 </span></div>
          </div>
          <div class="item-wrapper">
            <div class="item">
              <img src="../../common/image/default.png" width="40" height="40">
              <span class="name">张良明</span>
              <span class="tel">155****0702</span>
              <span class="aixin">捐献爱心 <i class="iconfont icon-xihuanfill"></i> <strong>0.01</strong> 元</span>
            </div>
            <div class="item">
              <img src="../../common/image/default.png" width="40" height="40">
              <span class="name">张良明</span>
              <span class="tel">155****0702</span>
              <span class="aixin">捐献爱心 <i class="iconfont icon-xihuanfill"></i> <strong>0.01</strong> 元</span>
            </div>
            <div class="item">
              <img src="../../common/image/default.png" width="40" height="40">
              <span class="name">张良明</span>
              <span class="tel">155****0702</span>
              <span class="aixin">捐献爱心 <i class="iconfont icon-xihuanfill"></i> <strong>0.01</strong> 元</span>
            </div>
            <div class="item">
              <img src="../../common/image/default.png" width="40" height="40">
              <span class="name">张良明</span>
              <span class="tel">155****0702</span>
              <span class="aixin">捐献爱心 <i class="iconfont icon-xihuanfill"></i> <strong>0.01</strong> 元</span>
            </div>

          </div>

        </div>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import {errCode} from 'api/config'
  import {getBannerList} from 'api/banner'
  import {getActivityList} from 'api/activity'
  import SearchBox from 'base/search-box/search-box'
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Carousel from 'base/carousel/carousel'

  export default {
    data() {
      return {
        placeholder: 'iPhone x',
        probeType: 3,
        dataList: [],
        banners: [],
        activitys: [],
        currentPage: 0,
        autoPlay: true
      }
    },
    created() {
      this._getBannerList()
      this._getActivityList()
    },
    activated() {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    computed: {},
    mounted() {
      if (this.autoPlay) {
        this.play()
      }
    },
    methods: {
      play() {
        setTimeout(() => {
          const size = this.activitys.length
          console.log(size)
          this.$refs.listgroup.children[this.currentPage].style.display = ''
          this.currentPage = this.currentPage >= (size - 1) ? 0 : this.currentPage++
        }, 4000)
      },
      filterName(name, size) {
        return name && name.length > size ? name.substr(0, size).concat('...') : name
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      },
      _getBannerList() {
        getBannerList().then((res) => {
          if (res.body.code === errCode.SUCCESS) {
            this.banners = res.body.data
            console.log(this.banners)
          }
        })
        this.dataList = this.banners
      },
      _getActivityList() {
        getActivityList().then((res) => {
          if (res.body.code === errCode.SUCCESS) {
            this.activitys = res.body.data
            console.log(this.activitys)
          }
        })
      }
    },
    filters: {
      filterImg(img) {
        return `../../commom/images/${img}`
      }
    },
    components: {
      SearchBox,
      Slider,
      Scroll,
      Carousel
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
    background: rgba(0, 0, 0, 0.1)
    .search-wrapper
      display: fixed
      top: 0
      left: 0
      height: 40px
      background: rgba($color-theme, 0.7)
    .scroll-content
      position: absolute
      top: 40px
      left: 0
      right: 0
      bottom: 0
      padding: 0 8px
      margin-top: 10px
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .shortcut-wrapper
        margin-top: 10px
        padding: 10px 0
        background: $color-white
        border-radius: 10px
        .shortcut-content
          display: flex
          text-align: center
          border-radis: 5px
          width: 100%
          .shortcut-item
            flex: 1
            .iconcircle
              position: relative
              margin: 0 auto
              text-align: center
              width: 40px
              height: 40px
              border-radius: 40px
              background: rgba($color-theme, 0.2)
              .iconfont
                position: absolute
                font-size: 24px
                color: $color-theme
                top: 8px
                left: 8px
            .name
              margin-top: 8px
              font-size: $font12
              color: #666
      .lifetip-wrapper
        margin: 10px 0px
        padding: 10px 0
        border-radius: 10px
        background: $color-white
        height: 46px
        display: flex
        overflow: hidden
        .lifetip-l
          flex: 0 0 80px
          width: 80px
          display: inline-block
          color: $color-theme
          .iconfont
            display: inline-block
            font-size: 36px
            line-height: 40px
            padding-left: 5px
          .txt
            display: inline-block
            font-size: $font16
            line-height: 20px
            font-weight: 700
        .lifetip-r
          flex: 1
          ul > li
            height: 22px
            line-height: 22px
            padding: 0px 8px 5px 8px
            font-size: $font14
            color: $color-text-sub

      .lanmuarea
        margin: 10px 0px
      .title
        height: 30px
        line-height: 30px
        color: $color-theme
        background: $color-white
        padding: 5px 10px
        border-bottom: 2px solid $color-theme
        .iconfont
          font-size: 16px
        .name
          font-size: $font16
          margin-left: 5px
      .recommend-wrapper
        .content
          background: $color-white
          padding: 10px
          .item-wrapper
            .item
              display: flex
              padding: 8px 0
              .item-l
                display: 0 0 100px
                wdith: 100px
                img
                  display: block
                  border-radius: 5px
              .item-r
                flex: 1
                margin-left: 10px
                .name
                  font-size: $font16
                  height: 30px
                  line-height: 30px
                .txt
                  font-size: $font14
                  color: $color-text-sub
                  margin-left: 8px
                .desc
                  margin-left: 8px
                  font-size: $font12
                  color: $color-text-sub
                  line-height: 24px
                  margin-top: 5px
      .expert-wrapper
        width: 100%
        overflow: hidden
        .content
          height: 338px
          overflow: hidden
          padding: 5px 0px
          background: $color-white
          .item
            width: 100%
            .img
              padding: 0 8px
              img
                width: 100%
                height: 228px
                border-radius: 10px
                display: block
            .tip
              font-size: 16px
              height: 40px
              line-height: 40px
              font-weight: bold
              padding: 0 8px
              text-align: center
            .desc
              font-size: 14px
              color: $color-text-sub
              padding: 0 12px
              height: 80px
              line-height: 22px
              display: inline-block
      .aixin-wrapper
        background: $color-white
        .item-wrapper
          .item
            display: flex
            height: 40px
            line-height: 40px
            padding: 8px 8px
            img
              flex: 0 0 40px
              width: 40px
              height: 40px
              border-radius: 50%
            span
              font-size: 12px
              color: $color-text-sub
              &.name
                font-size: 14px
                color: $color-text
                margin: 0 0 0 16px
              &.tel
                margin-left: 8px
              &.aixin
                margin-left: 14px
                .iconfont
                  color: orangered
                  font-size: $font14
                strong
                  font-weight: bold
                  color: orangered

</style>

