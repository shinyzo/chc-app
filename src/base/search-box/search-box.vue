<template>
  <div class="search-box">
    <i class="iconfont icon-sousuoleimu"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <i @click="clear" v-show="query"  class="iconfont icon-guanbi1 close"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import {debounce} from 'common/js/util'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      }
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display: flex
    padding: 5px 6px
    .iconfont
      flex: 0 0 35px
      width: 35px
      font-size: 30px
      color: $color-white
    .box
      flex: 1
      height: 30px
      line-height: 24px
      background: #fff
      border-radius: 14px
      padding-left: 10px
      color: $color-text-sub
      text-align: center
      outline: 0
    .close
      font-size: 24px
      color: #fff
      margin-top: 3px
      margin-left: 3px
</style>
