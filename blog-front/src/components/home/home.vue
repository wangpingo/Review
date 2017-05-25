<template>
    <div class="home">
        <div class="home-left">
            <div style="overflow: hidden;margin-bottom: 50px">
                <span class="title">明心见性的一段对话</span>
                <span class="date">2016年3月17日</span>
                <hr>
                <div class="content">
                    以下是我和妹子聊到房屋拆迁话题时的对话，希望我们能一直保持平常心，认真做自己……
                </div>
                <img src="../../assets/1.jpg" class="cont-img">
                <div class="article-footer">
                    Tags:&nbsp;<span class="tags">学习</span>
                </div>

                <div class="options">
                    <span>
                         评论:24 &nbsp;| &nbsp;浏览:1128&nbsp; |&nbsp;<a> 阅读全文 &gt;</a>
                    </span>
                </div>
            </div>

            <div style="overflow: hidden;margin-bottom: 50px">
                <span class="title">明心见性的一段对话</span>
                <span class="date">2016年3月17日</span>
                <hr>
                <div class="content">
                    以下是我和妹子聊到房屋拆迁话题时的对话，希望我们能一直保持平常心，认真做自己……
                </div>
                <img src="../../assets/1.jpg" class="cont-img">
                <div class="article-footer">
                    Tags:&nbsp;<span class="tags">学习</span>
                </div>

                <div class="options">
                    <span>
                         评论:24 &nbsp;| &nbsp;浏览:1128&nbsp; |&nbsp;<a> 阅读全文 &gt;</a>
                    </span>
                </div>
            </div>

            <div class="block">
                <span class="demonstration"></span>
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>

        </div>

        <div class="home-right">
            <div class="guangGao">
                广告位出租
            </div>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark " style="text-align: center">按标签浏览</div></el-col>

            </el-row>
            
            <div class="tagSelect">
                <a>生活</a>  &nbsp;&nbsp;&nbsp;&nbsp;<a>学习</a>  <br>
                <a>旅行</a> &nbsp;&nbsp;&nbsp;&nbsp; <a>回忆</a>
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
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" rel='stylesheet/scss'>
    .home{
        width: 1080px;
        padding: 50px 0 0 20px;
        margin: 0 auto;
        color: #5e6d82;

        .home-left{
            width:650px;
            float: left;
            .block{
                text-align: center;

            }
            .title{
                display: inline-block;
                font-size: 18px;
                &:hover{
                    color: firebrick;
                }
            }
            .cont-img{
                display: inline-block;
                width: 620px;
                height: 366px;
                margin: 0  auto;
            }
            .date{
                display: inline-block;
                float: right;
            }
            hr{
                margin-top: 5px;
                margin-bottom: 10px;
            }
            .content{
                width: 525px;
                padding:0 50px 0 25px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-bottom: 30px;
            }
            .article-footer{
                margin-top: 20px;
                margin-bottom: 20px;
                .tags{
                    padding: 5px;
                    background: #58B7FF;
                    border-radius: 2px;
                }
            }
            .options{
                span{
                    display: inline-block;
                    float: right;
                    a{
                        color: #000;
                    }
                }
            }
        }
        .home-right{
            padding:0 50px 0 0;
            float: right;
            width: 280px;
            margin-right:70px ;
            .bg-purple-dark{
                background-color: #ccc;
                padding: 8px 15px;
                color: #332B2B;
                text-align: center;
            }
            .guangGao{
                width: 100%;
                display: inline-block;
                height: 200px;
                font-size: 30px;
                text-align: center;
                line-height: 200px;
                background: rgba(204,204,204,0.23);
                margin-bottom: 30px;
            }
            .search{
                border-radius: 0px;
                background: #C5D1E2;
            }
            .tagSelect{
                margin: 20px 0;
                font-size: 15px;
                line-height: 30px;
                text-align: center;
                a{
                    padding: 5px;
                    &:hover{
                        background:#5e6d82;
                        color: white;
                    }
                }


            }
            ul{
                margin-bottom: 10px;
                li{
                    line-height: 30px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }

            }
            .friendHerf{
                width: 250px;
                margin: 40px auto;
                font-size: 15px;
                span{
                    display: inline-block;
                    width: 80px;
                    line-height: 40px;
                    text-align: center;
                }
            }
            .weiXin{
                text-align: center;
                filter: Alpha(opacity=80); /* IE */
                -moz-opacity:0.8;    /* FF 主要是为了兼容老版本的FF */
                opacity:0.8;    /* FF */
                img{
                    display: inline-block;
                    width: 160px;
                    height: 160px;
                    margin-top: 20px;
                }
            }
        }
    }
</style>