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
                  <img @load="loadImage" src="../../common/image/banner_2.png">
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
              <div class="name">我喜欢的</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">我喜欢的</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">我喜欢的</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">我喜欢的</div>
            </div>
            <div class="shortcut-item">
              <div class="iconcircle">
                <i class="iconfont icon-xihuanfill"></i>
              </div>
              <div class="name">我喜欢的</div>
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
            <ul>
              <li>早上吃牛奶+鸡蛋....</li>
              <li>早上吃牛奶+鸡蛋....</li>
            </ul>
          </div>
        </div>
        <div class="area-wrapper">
          <div class="area">
            <div class="title"><i class="iconfont icon-zantongfill"></i><span> 特别推荐</span></div>
            <div class="item-list">
              <div class="item">
                <div class="img">
                  <img width="120" height="120"
                       src="https://img.alicdn.com/bao/uploaded/i2/2653351646/TB1YonHcxPI8KJjSspoXXX6MFXa_!!0-item_pic.jpg_430x430q90.jpg">
                </div>
                <div v-text="filterName(text,10)" class="name"></div>
                <div class="price">
                  <span class="nowprice">￥66</span>
                  <span class="oldprice"><del>￥77</del></span>
                </div>
              </div>
              <div class="item">
                <div class="img">
                  <img width="120" height="120"
                       src="https://img.alicdn.com/bao/uploaded/i2/2653351646/TB1YonHcxPI8KJjSspoXXX6MFXa_!!0-item_pic.jpg_430x430q90.jpg">
                </div>
                <div v-text="filterName(text,10)" class="name"></div>
                <div class="price">
                  <span class="nowprice">￥66</span>
                  <span class="oldprice"><del>￥77</del></span>
                </div>
              </div>
            </div>
            <div class="item-list">
              <div class="item">
                <div class="img">
                  <img width="120" height="120"
                       src="https://img.alicdn.com/bao/uploaded/i2/2653351646/TB1YonHcxPI8KJjSspoXXX6MFXa_!!0-item_pic.jpg_430x430q90.jpg">
                </div>
                <div v-text="filterName(text,10)" class="name"></div>
                <div class="price">
                  <span class="nowprice">￥66</span>
                  <span class="oldprice"><del>￥77</del></span>
                </div>
              </div>
              <div class="item">
                <div class="img">
                  <img width="120" height="120"
                       src="https://img.alicdn.com/bao/uploaded/i2/2653351646/TB1YonHcxPI8KJjSspoXXX6MFXa_!!0-item_pic.jpg_430x430q90.jpg">
                </div>
                <div v-text="filterName(text,10)" class="name"></div>
                <div class="price">
                  <span class="nowprice">￥66</span>
                  <span class="oldprice"><del>￥77</del></span>
                </div>
              </div>
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
  import SearchBox from 'base/search-box/search-box'
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  export default {
    data() {
      return {
        placeholder: 'iPhone x',
        probeType: 3,
        dataList: [],
        banners: [],
        text: '智利红车厘子 原箱进口'
      }
    },
    created() {
      this._getBannerList()
    },
    activated() {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
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
      Scroll
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
      background: $color-theme
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
                color: red
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
            height: 20px
            line-height: 20px
            padding: 0px 8px 5px 8px
            font-size: $font14
            color: $color-text-sub
      .area-wrapper
        margin: 10px 0px
        padding: 10px 0
        .area
          .title
            padding: 0 10px
            height: 40px
            font-size: $font16
            line-height: 40px
            color: $color-theme
            border-bottom: 2px solid $color-theme
            background: $color-white
          .item-list
            display: flex
            background: $color-white
            .item
              flex: 1
              border-right: 1px solid $color-border
              border-bottom: 1px solid $color-border
              .img
                margin: 0 auto
                text-align: center
                padding: 10px
              .name
                font-size: $font14
                height: 35px
                line-height: 35px
                text-align: center
                no-wrap()
              .price
                padding-left: 10px
                height: 24px
                line-height: 24px
                .oldprice
                  color: $color-text-sub
                  font-size: 12px
                  margin-left: 8px
                .nowprice
                  color: $color-theme
                  font-size: $font16
                  font-weight: bold

</style>

