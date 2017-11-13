<template>
  <transition name="pop">
    <div class="login">
      <div class="login-header">
        <span class="iconfont icon-guanbi1 close" @click="back"></span>
        <span class="register">注册</span>
      </div>
      <div class="login-content">
        <div class="logo">
          <img src="../../common/image/logo.png">
        </div>
        <div class="login-item" >
          <span><input class="input" type="text" placeholder="用户名/手机号码/邮箱" v-model="loginName"></span>
        </div>

        <div class="login-item" >
          <span><input type="password" class="input" placeholder="密码" v-model="loginPass"></span>
        </div>

        <div class="login-item-btn">
          <button class="login-btn" @click="login">登录</button>
        </div>
        <div class="login-item-text">
          <span class="txt-l">手机动态登录</span>
          <span class="txt-r">忘记密码</span>
        </div>
      </div>

      <div class="login-footer">
        <div class="line-wrapper">
          <span class="line"></span>
          <span class="text">其他登录方式</span>
          <span class="line"></span>
        </div>
        <div class="icon">
          <i class="icon-wechat"></i>
          <i class="icon-qq"></i>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import User from 'common/js/user'
  import {login} from 'api/user'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        loginType: 1,
        loginName: '',
        loginPass: '',
        verCode: '',
        user: {}
      }
    },
    methods: {
      login() {
        login(this.loginName, this.loginPass, this.verCode).then((res) => {
          if (res.code === ERR_OK) {
            this.user = res.data
            console.log(this.user)
            const userinfo = new User(this.user)
            this.setUserInfo(userinfo)
          }
        })
      },
      back() {
        setTimeout(() => {
          this.$router.back()
        }, 20)
      },
      ...mapActions([
        'setUserInfo'
      ])
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'

  .login
    opacity :1
    &.pop-enter-active, &.pop-leave-active
      transition: all 0.4s
    &.pop-enter, &.pop-leave-to
      transform: translate3d(0, 100%, 0)
      opacity :0
    .login-header
      width: 100%
      height: 40px
      line-height: 40px
      font-size: $font14
      color: $color-text-sub
      display: inline-block
      .close
        text-align: left
        padding-left: 10px
        font-size: $font16
        color: $color-text-sub
        height: 40px
        lline-height: 40px
        float: left
        font-weight: 700
      .register
        text-align: right
        float: right
        margin-right: 10px
    .login-content
      padding: 40px 24px 40px 24px
      .logo
        margin: 0 0 20px 0
        text-align: center
        img
          width: 80px
          height: 80px
      .login-item
        height: 35px
        line-height: 35px
        padding: 15px 0px
        text-align: center
        .input
          width: 100%
          height: 35px
          line-height: 35px
          color: $color-text
          border-1px(rgba(7,17,27,0.1))
      .login-item-btn
        margin-top: 20px
        width: 100%
        height: 40px
        line-height: 40px
        .login-btn
          width: 100%
          height: 40px
          line-height: 40px
          font-size: 14px
          background: $color-theme
          border: none
          color: #ffffff
          border-radius: 5px
      .login-item-text
        margin-top: 15px
        height: 20px
        line-height: 20px
        font-size: $font12
        color: $color-text-sub
        width: 100%
        .txt-l
          text-align: left
          float: left
        .txt-r
          text-align: right
          float: right
    .login-footer
      padding: 0 24px
      width: 90%
      height: 60px
      .line-wrapper
        height: 16px
        line-height: 16px
        text-align: center
        display: flex
        .line
          border-top: 1px solid $color-border
          height: 16px
          line-height: 16px
          display: inline-block
          margin-top: 7px
          vertical-align: top
          flex: 1
        .text
          font-size: $font12
          text-align: center
          color: $color-text-sub
          flex: 0 0 100px
          width: 100px

</style>

