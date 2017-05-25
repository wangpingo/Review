<template>
    <div class="home">
        <div class="home-left">
            <a class="speak-title">留言板:</a><br>
            <a class="speak-2title">
                访客留言板，有什么问题在此给奔跑的哇牛留言！
            </a>
            <div class="line" style="margin-bottom: 20px"></div>
            <div class="commentslist" style="background: #EEE">
                <h3>网友留言：</h3>
                <ol>
                    <li id="comment-115051" style="border-color: #ccc;">
                        <div class="gravatar">
                            <img alt="" src="https://secure.gravatar.com/avatar/e6453f1756d8f38c78b8ff78cabaa171?s=45&amp;d=monsterid&amp;r=g" srcset="https://secure.gravatar.com/avatar/e6453f1756d8f38c78b8ff78cabaa171?s=90&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-45 photo" height="45" width="45">		</div>
                        <div class="comment-info">
                            <div class="comment-author">
                                <p>苏筱熙</p>
                            </div>
                            <div class="comment-time">
                                <span>2017-05-25</span><span><a class="comment-reply-link" href="/guestbook/?replytocom=115051#respond" onclick="return addComment.moveForm( &quot;comment-115051&quot;, &quot;115051&quot;, &quot;respond&quot;, &quot;2&quot; )" aria-label="回复给苏筱熙">回复</a></span>
                            </div>
                        </div>
                        <div class="comment-text">
                            <p>Te程序博客有些不会的问题，可以加个Q或者邮箱解决一下吗。</p>
                        </div>
                    </li><!-- #comment-## -->
                    <li id="comment-114628" style="border-color: #ccc">
                        <div class="gravatar">
                            <img alt="" src="https://secure.gravatar.com/avatar/7d5a36844ecf8c599d10c07ef0949d0d?s=45&amp;d=monsterid&amp;r=g" srcset="https://secure.gravatar.com/avatar/7d5a36844ecf8c599d10c07ef0949d0d?s=90&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-45 photo" height="45" width="45">		</div>
                        <div class="comment-info">
                            <div class="comment-author">

                                <a rel="nofollow" href="http://www.xaizik.cn" target="_blank">小矮子</a>
                            </div>
                            <div class="comment-time">
                                <span>2017-04-28</span><span><a class="comment-reply-link" href="/guestbook/?replytocom=114628#respond" onclick="return addComment.moveForm( &quot;comment-114628&quot;, &quot;114628&quot;, &quot;respond&quot;, &quot;2&quot; )" aria-label="回复给小矮子">回复</a></span>
                            </div>
                        </div>
                        <div class="comment-text">
                            <p>Emlog博客系统哪里去下载啊</p>
                        </div>
                        <ul class="children">
                            <li id="comment-114715" style="border-color: #ccc">
                                <div class="gravatar">
                                    <img alt="" src="https://secure.gravatar.com/avatar/b3d0ff8bf1ac888a6505b0e9c7095413?s=45&amp;d=monsterid&amp;r=g" srcset="https://secure.gravatar.com/avatar/b3d0ff8bf1ac888a6505b0e9c7095413?s=90&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-45 photo" height="45" width="45">		</div>
                                <div class="comment-info">
                                    <div class="comment-author">
                                        <p>凉凉</p>
                                    </div>
                                    <div class="comment-time">
                                        <span>2017-05-05</span><span><a class="comment-reply-link" href="/guestbook/?replytocom=114715#respond" onclick="return addComment.moveForm( &quot;comment-114715&quot;, &quot;114715&quot;, &quot;respond&quot;, &quot;2&quot; )" aria-label="回复给凉凉">回复</a></span>
                                    </div>
                                </div>
                                <div class="comment-text">
                                    <p>去emlog官网下载，百度搜索emlog</p>
                                </div>
                            </li><!-- #comment-## -->
                        </ul><!-- .children -->
                    </li><!-- #comment-## -->
                    <li id="comment-114478" style="border-color: #ccc">
                        <div class="gravatar">
                            <img alt="" src="https://secure.gravatar.com/avatar/16df127d0e9e00d9441a177a636804ff?s=45&amp;d=monsterid&amp;r=g" srcset="https://secure.gravatar.com/avatar/16df127d0e9e00d9441a177a636804ff?s=90&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-45 photo" height="45" width="45">		</div>
                        <div class="comment-info">
                            <div class="comment-author">

                                <a rel="nofollow" href="http://crazyus.ga" target="_blank">flyer</a>
                            </div>
                            <div class="comment-time">
                                <span>2017-04-16</span><span><a class="comment-reply-link" href="/guestbook/?replytocom=114478#respond" onclick="return addComment.moveForm( &quot;comment-114478&quot;, &quot;114478&quot;, &quot;respond&quot;, &quot;2&quot; )" aria-label="回复给flyer">回复</a></span>
                            </div>
                        </div>
                        <div class="comment-text">
                            <p>来看看，以前的网友</p>
                        </div>
                    </li><!-- #comment-## --></ol>
            </div>

            <div class="block">
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
            <el-form class='speak-form' ref="form" :model="form" label-width="80px">
                <a class="speak-title" style="margin-bottom: 20px">发表留言:</a><br>

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
                        发表留言
                    </el-button>
                </el-form-item>
            </el-form>
        </div>


        <div class="home-right">
            <el-row style="margin-bottom: 20px;    margin-top: 38px;">
                <el-col :span="24"><div class="grid-content bg-purple-dark ">奔跑的哇牛-个人博客</div></el-col>

            </el-row >
            <div class="myImage">
                <img src="../../assets/3.jpg">
            </div>
            <!--<div class="guangGao">-->
                <!--广告位出租-->
            <!--</div>-->
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
    .speak{
        margin: 0 auto;
        width: 1080px;
    }
    .speak-title{
        display: inline-block;
        font-size: 18px;
        line-height: 30px;
        color: #00B7FF;
    }
    .speak-2title{
        line-height: 20px;
        color: #999999;
    }
    .myImage{
        width: 150px;
        margin: 0 auto;
        img{
            display: inline-block;
            width: 150px;

        }
        margin-bottom: 30px;
    }
    .speak-form{
        margin-top: 30px;
        width: 80%;
        .el-input__inner,.el-textarea__inner,.el-button {
            background-color: #eee;
        }

    }
    .commentslist {
        clear: both;
        overflow: hidden;
        background-color: #fff;
        a{
            text-decoration: none;
        }
        span a{
            margin-left: 10px;
            color: #555;
        }
        .comment-author a {
            color: #333;
        }
    }
    ol {
        display: block;
        list-style-type: decimal;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 40px;
    }
    .commentslist ol li {
        clear: both;
        border: 1px solid #F2F2F2;
        overflow: hidden;
        padding: 15px;
        margin-top: 20px;
    }
    .commentslist ol li .gravatar {
        float: left;
        width: 54px;
        height: 54px;
        overflow: hidden;
        margin-right: 10px;
        display: inline;
    }
    .commentslist ol li .comment-info {
        float: left;
        font-family: 'Microsoft Yahei';
    }
    .commentslist ol li .comment-text {
        font-family: 'Microsoft Yahei';
        clear: both;
        color: #666;
        font-size: 0.875em;
        padding-left: 64px;
    }
        .el-pager li{
            background: #ECECEC;
        }

</style>