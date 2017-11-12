<template>
  <div class="login">
    <div class="login-header">
      <h2 class="title">用户登录</h2>
    </div>
    <div class="login-content">
      <div class="login-item">
        <i class="icon-user"></i>
        <span class="input"><input type="text" placeholder="用户名/手机号码" v-model="loginName"></span>
      </div>

      <div class="login-item">
        <i class="icon-lock"></i>
        <span class="input"><input type="password" placeholder="密码" v-model="loginPass"></span>
      </div>

      <div class="login-item">
        <button clas="login-btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import User from 'common/js/user'
  import {login} from 'api/user'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
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
      ...mapActions([
        'setUserInfo'
      ])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin.styl'

  .login
    .title
      height: 40px
      line-height: 40px
      text-align: center
      font-size: $font-size-medium
      font-weight: 700
      color: $color-theme
    .login-content
      padding: 50px 16px
      .login-item
        height: 30px
        line-height: 30px
        padding: 10px 0px
        border-1px(rgba(7, 17, 27, 0.1))
        .icon-user
          font-size: 12px
          color: #333333

</style>

