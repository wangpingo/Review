<template>
  <div id="app">

    <v-header>

    </v-header>

    <router-view>

    </router-view>

  </div>
</template>

<script>
    import header from './components/header/header.vue'
    export default {
      name: 'app',
      data () {
          return{

          }
      },
      components: {
          'v-header': header
      }
    }
</script>

<style lang="scss" rel='stylesheet/scss'>
  #app {
    width: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

</style>
