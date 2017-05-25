<template>
    <div class="home">
        <div class="home-left">
            <div style="overflow: hidden;margin-bottom: 50px">
                <span class="title">明心见性的一段对话</span>
                <span class="date">2016年3月17日</span>
                <hr>

                <img src="../../assets/1.jpg" class="cont-img">
                <div class="article-footer">
                    Tags:&nbsp;<span class="tags">学习</span>
                </div>
                <div class="content-detail">
                    <p>以下是我和妹子聊到房屋拆迁话题时的对话，希望我们能一直保持平常心，认真做自己以下是我和妹子聊到房屋拆迁话题时的对话，希望我以下是我和妹子聊到房屋拆迁
                        话题时的对话，希望我
                    </p>
                    <p>以下是我和妹子聊到房屋拆迁话题时的对话，希望我们能一直保持平常心，认真做自己以下是我和妹子聊到房屋拆迁话题时的对话，希望我以下是我和妹子聊到房屋拆迁
                        话题时的对话，希望我
                    </p>
                    <p>以下是我和妹子聊到房屋拆迁话题时的对话，希望我们能一直保持平常心，认真做自己以下是我和妹子聊到房屋拆迁话题时的对话，希望我以下是我和妹子聊到房屋拆迁
                        话题时的对话，希望我
                    </p>
                </div>
                <div class="options">
                    <span>
                         评论:24 &nbsp;| &nbsp;浏览:1128
                    </span>
                </div>


            </div>
            <div class="xiangGuan">
                相关文章:
                <div class="line"></div>
                <ul>
                    <li><a>明心见性的一段对话</a>(2016-3-17 10:45:44)</li>
                    <li><a>人生何尝不是一场赌局  </a>(2016-3-11 13:23:45)</li>
                    <li><a>初冬，景如故  </a>(2015-11-21 17:2:53)</li>
                    <li><a>从丁元英到叶子农  </a>(2015-8-31 19:12:19)</li>
                    <li><a>五十度灰的天空 </a> (2015-4-30 4:47:49)</li>

                </ul>
            </div>
            <div class="comments">
                留言列表:
                <div class="line"></div>
                <div class="comment">
                    <img src="../../assets/da8e974dc_s.jpg" alt="">
                    <span>王晓义  2016-03-06 发表 <br>
                          <a> 你的文采不错哦！</a>
                    </span>
                </div>
                <div class="line"></div>

                <div class="comment">
                <img src="../../assets/da8e974dc_s.jpg" alt="">
                <span>王晓义  2016-03-06 发表 <br>
                          <a> 你的文采不错哦！</a>
                    </span>
            </div>
                <div class="line"></div>

                <div class="comment">
                    <img src="../../assets/da8e974dc_s.jpg" alt="">
                    <span>王晓义  2016-03-06 发表 <br>
                          <a> 你的文采不错哦！</a>
                    </span>
                </div>
                <div class="line"></div>
                <div class="comment">
                    <img src="../../assets/da8e974dc_s.jpg" alt="">
                    <span>王晓义  2016-03-06 发表 <br>
                          <a> 你的文采不错哦！</a>
                    </span>
                </div>
                <div class="line"></div>
            </div>
        </div>


        <div class="home-right">
            <div class="guangGao">
                广告位出租
            </div>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark ">最新留言</div></el-col>

            </el-row>
            <ul>
                <li>说的很不错呢！</li>
                <li>一个很好的微商货源平台，非常适合做微做微做微商推<li>
                <li>谢谢博主分享 支持</li>
                <li>第一次过来看看</li>
                <li>懂得取舍吧，最好留有后路、</li>
                <li> 靠自己丰衣足食！</li>
                <li>第一次来，写的不错，关注下</li>
                <li>  长大了，烦恼也就多了</li>
                <li>当初看这个并没有觉得什么，现在看来里面和</li>
                <li>人生确实就是个赌局，就看赌注和勇气大小了</li>

            </ul>
            <el-row>

                <el-col :span="24"><div class="grid-content bg-purple-dark ">友情链接</div></el-col>
                <div class="friendHerf">
                    <span>cnode社区</span><span>vue官网 </span><span>阮一峰博客</span> <br>
                    <span>张鑫旭</span><span>郑海波</span><span>玉伯</span>
                </div>
            </el-row>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark ">关注微信公众号:</div></el-col>

            </el-row>
            <div class="weiXin">
                <img src="../../assets/weixin.jpg" alt="">
            </div>
            <el-row style="margin-top: 36px;">
                <el-col :span="24"><div class="grid-content bg-purple-dark ">文章评论:</div></el-col>
            </el-row>

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="昵称:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="邮箱:">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>

                <el-form-item label="正文:">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                            plain
                            @click="open2">
                        发表评论
                    </el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            open2() {
                this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                });
            }
        }
    }
</script>

<style lang="scss" rel='stylesheet/scss'>

    .content-detail{
        margin: 40px auto;
        p{
            text-indent: 25px;
            margin-bottom: 10px;
            line-height: 25px;
        }
    }
    .line{
        height: 1px;
        margin: 5px auto;
        background: #cccccc;
    }
    .xiangGuan{
        margin-top: 40px;

        li{
            line-height: 30px;
        }
        a:hover{
            text-decoration: underline;
        }
    }
    .comments{
        margin-top: 50px;
        .comment{
            margin-top: 20px;
            height: 40px;
            img{
                display: inline-block;
                background: #ccc;
                padding: 5px;
                border-radius: 2px;
            }
            span{
                display: inline-block;
                vertical-align: top;
                a{
                    display: inline-block;
                    text-indent: 50px;
                    margin-top: 10px;
                }
            }
        }
    }
    form{
        margin-top: 20px;
        .el-button{
            width: 100%;
        }
        .el-form-item__label {

            text-align: center;
        }
    }
</style>