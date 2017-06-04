<template>
  <div id="app" >

    <v-header>

    </v-header>

    <router-view>

    </router-view>

  </div>
</template>

<script>
    import header from './components/header/header.vue'
    import { Loading } from 'element-ui';
    export default {
      name: 'app',
        created() {

        this.openFullScreen();

        },
      data () {
          return{
          }
      },
      methods: {
          openFullScreen() {
              let loadingInstance =Loading.service({ fullscreen: true ,body:true,customClass:'myClass'});
              setTimeout(() => {
                  loadingInstance.close();
              }, 3000);
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
    .myClass{
      background-color: rgba(255,255,255,0.9) !important;
    }
  }

</style>
