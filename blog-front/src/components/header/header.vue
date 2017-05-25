<template>
        <div id="bg-color">
                <div id="header">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                                <el-menu-item index="1" class="name">
                                        <img src="../../assets/waniu1.jpg" />
                                </el-menu-item>
                                <el-input placeholder="输入您感兴趣的内容..."  class="search">
                                        <el-button slot="append" icon="search"></el-button>
                                </el-input>
                                <el-menu-item index="2" >
                                        <router-link to="/home">首页</router-link>
                                </el-menu-item>
                                <el-menu-item index="3" >
                                        <router-link to="/myInfo">我是谁</router-link>
                                </el-menu-item>
                                <el-menu-item index="4" >
                                        <router-link to="/speak">留言本</router-link>
                                </el-menu-item>
                                <el-button type="text" class="myName"><img src="../../assets/headImage.png"/>
                                        <span @click="goMyInfo">
                                                奔跑的哇牛
                                        </span>
                                </el-button>
                        </el-menu>
                </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '2'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            goMyInfo() {
                this.$router.push('/myInfo')
            }
        }
    }
</script>

<style lang="scss" rel='stylesheet/scss'>
        #bg-color{
                background-color: #eef1f6;
                width: 100%;
        }
        #header{
                width: 1080px;
                margin: 0 auto;
                .name{
                        filter: Alpha(opacity=40); /* IE */
                        -moz-opacity:0.4;    /* FF 主要是为了兼容老版本的FF */
                        opacity:0.4;    /* FF */
                        img{
                                display: inline-block;
                                border-radius: 4px;
                        }
                }
                a{
                        display: inline-block;
                        height: 100%;
                }
                .search{
                        width:370px;
                        margin: 10px 20px;
                }
                .el-menu-item{
                        font-size: 15px;
                }
                .myName{
                      margin-left: 150px;
                      position: relative;
                      img{
                              display: inline-block;
                              position: absolute;
                              border-radius: 25px;
                              left: -50px;
                              top: 0px;
                              width: 40px;
                              height: 40px;
                      }
                }
        }
</style>