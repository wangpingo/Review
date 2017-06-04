<template>
        <div id="bg-color">
                <div id="header">
                        <el-menu  :default-active="activeIndex"   class="el-menu-demo" mode="horizontal" @select="handleSelect" :active="activeIndex" >
                                <el-menu-item index="1" class="name">
                                        <img src="../../assets/waniu1.jpg" />
                                </el-menu-item>
                                <el-input placeholder="输入您感兴趣的内容..." @keyup.native="show($event)"   class="search" v-model="selectValue" >
                                        <el-button slot="append" icon="search" @click.stop.prevent="selectKeyWords"  ></el-button>
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
    import Bus from '../eventBus.js'
    export default {
        created(){

        },
        beforeRouteUpdate(){
        },
        data() {
            return {
                activeIndex: '2',
                selectValue:null,
                disable:false
            };
        },
        methods: {
            handleSelect(key) {
                this.activeIndex= key

                if (key == 3 || key == 4){}
            },
            goMyInfo() {
                this.$router.push('/myInfo')
            },
            selectKeyWords() {
                if (this.selectValue && this.selectValue.trim()  ) {
//                    Bus.$emit('selectValue', this.selectValue.trim());
                    this.activeIndex='2'
                    this.$router.push({ path: '/', query: { keyWords: this.selectValue.trim() }})
                }
            },
            show:function(ev){
                if(ev.keyCode == 13){
                    if (this.selectValue && this.selectValue.trim()  ) {
//                    Bus.$emit('selectValue', this.selectValue.trim());
                        this.activeIndex='2'
                        this.$router.push({ path: '/', query: { keyWords: this.selectValue.trim() }})
                    }
                }
            }
        }
    }
</script>



<style lang="scss" rel='stylesheet/scss'>
        #bg-color{
                background-color: #eef1f6;
                width: 100%;
                position: fixed;
                overflow: hidden;
                top: 0;
                z-index: 999;
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