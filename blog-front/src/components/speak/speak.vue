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

                    <li :id="speak.commentId"  style="border-color: #ccc" v-for="(speak,index)  in speaks">
                        <div class="gravatar">
                            <img alt="" src="https://secure.gravatar.com/avatar/7d5a36844ecf8c599d10c07ef0949d0d?s=45&amp;d=monsterid&amp;r=g" srcset="https://secure.gravatar.com/avatar/7d5a36844ecf8c599d10c07ef0949d0d?s=90&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-45 photo" height="45" width="45">		</div>
                        <div class="comment-info">
                            <div class="comment-author">

                                <a rel="nofollow" href="http://www.xaizik.cn" target="_blank">{{speak.name}}</a>
                            </div>
                            <div class="comment-time">
                                <span>{{speak.time | timeChange}}</span><span><a class="comment-reply-link" v-if="!speak.t_content" @click="openForm(speak.commentId)">回复&gt;</a></span>
                            </div>
                        </div>
                        <div class="comment-text">
                            <p>{{speak.content}}</p>
                        </div>

                        <ul class="children" v-if="speak.t_content">
                            <li style="border-color: #ccc">
                                <div class="gravatar">
                                    <img alt="" src="https://secure.gravatar.com/avatar/b3d0ff8bf1ac888a6505b0e9c7095413?s=45&amp;d=monsterid&amp;r=g" srcset="https://secure.gravatar.com/avatar/b3d0ff8bf1ac888a6505b0e9c7095413?s=90&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-45 photo" height="45" width="45">		</div>
                                <div class="comment-info">
                                    <div class="comment-author">
                                        <p>{{speak.t_name}}</p>
                                    </div>
                                    <div class="comment-time">
                                        <span>{{speak.t_replay | timeChange}}</span><span><a class="comment-reply-link"> </a></span>
                                    </div>
                                </div>
                                <div class="comment-text">
                                    <p>{{speak.t_content}}</p>
                                </div>
                            </li><!-- #comment-## -->
                        </ul><!-- .children -->
                    </li>
                </ol>
            </div>

            <div class="block">
                <el-pagination
                        layout="prev, pager, next"
                        :total="speaksNum" :page-size="3"  @current-change="currentPage">
                </el-pagination>
            </div>
            <el-form class='speak-form' ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
                <a class="speak-title" style="margin-bottom: 20px">发表留言:</a><br>

                <el-form-item label="昵称: " prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="邮箱: " prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>

                <el-form-item label="正文:" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                            plain
                            @click="submitForm('ruleForm')">
                        发表留言
                    </el-button>
                </el-form-item>
            </el-form>

            <el-dialog
                    title="回复留言"
                    :visible.sync="dialogVisible"
                    size="tiny" :before-close="handleClose">

                <!--<span>这是一段信息</span>-->
                <el-form class="speak-form" ref="form2" :rules="rules" :model="form2" label-width="80px" >

                    <el-form-item label="昵称:" prop="name">
                        <el-input v-model="form2.name" ></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱:" prop="email">
                        <el-input v-model="form2.email"></el-input>
                    </el-form-item>

                    <el-form-item label="正文:" prop="desc">
                        <el-input type="textarea" v-model="form2.desc"></el-input>
                    </el-form-item>

                </el-form>

                <span slot="footer" class="dialog-footer" >
                <el-button  type="primary" @click="submitReply('form2')" >回复</el-button>
             </span>
            </el-dialog>
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
                <el-col :span="24"><div class="grid-content bg-purple-dark ">精彩留言</div></el-col>

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
                    <span> <a href="https://cnodejs.org/" target="_blank">cnode社区</a></span><span><a target="_blank" href="https://cn.vuejs.org/">vue官网</a> </span><span><a target="_blank" href="http://www.ruanyifeng.com/home.html">阮一峰</a></span> <br>
                    <span><a href="http://www.zhangxinxu.com/" target="_blank">张鑫旭</a></span><span><a href="http://www.blogchina.com/" target="_blank">博客中国</a></span><span><a href="http://weibo.com/lifesinger" target="_blank">玉伯</a></span>
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
        beforeMount() {

            this.getSpeak();

            this.$http.get('http://localhost:3000/speakNum').then(

                response=>{
                    this.speaksNum=response.data[0]['count(*)']
                }
            )
        },
        data() {
            var validateName = (rule, value, callback) => {
                if (value === '' || value.length>10) {
                    callback(new Error('请输入昵称(小于10字符)'));
                }else {
                    callback();
                }
            };
            var validateEmail = (rule, value, callback) => {
                let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                if (!reg.test(value)) {
                    callback(new Error('请输入正确的邮箱'));
                }else {
                    callback();
                }

            };
            var validateDesc = (rule, value, callback) => {
                if (value === '' || value.length>50) {
                    callback(new Error('请输入文本内容(小于50个字)'));
                }else {
                    callback();
                }

            };
            return {
                ruleForm: {
                    name: '',
                    email: '',
                    desc: ''
                },
                form2: {
                    name: '',
                    email: '',
                    desc: '',
                    id:''
                },
                rules: {
                    name: [
                        { validator: validateName, trigger: 'blur' }
                    ],
                    email: [
                        { validator: validateEmail, trigger: 'blur' }
                    ],
                    desc: [
                        { validator: validateDesc, trigger: 'blur' }
                    ]
                },
                speaks:null,
                dialogVisible:false,
                speaksNum:null
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('http://localhost:3000/insertComment',{ruleForm:this.ruleForm}).then(
                            response=>{
                                if(response.data.affectedRows>0){
                                    this.getSpeak();
                                    this.open('发表成功','提示');

                                }
                            }
                        )
                    } else {
                        return false;
                    }
                });
            },
            getSpeak() {
                this.$http.get('http://localhost:3000/speak?page=1').then(
                    response=>{
                        this.speaks=response.data
                    }
                )
            },
            openForm(id) {
                this.dialogVisible=true
                this.form2.id=id
            },
            open(content,title) {
                this.$alert(content, title, {
                    confirmButtonText: '确定'
                });
            },
            currentPage(currentPage) {
                this.$http.get('http://localhost:3000/speak?page='+currentPage).then(
                    response=>{
                        this.speaks=response.data
                    }
                )
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            submitReply(formName) {

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('http://localhost:3000/replay',{form2:this.form2}).then(
                            response=>{
                                if(response.data.affectedRows>0){
                                    this.dialogVisible=false
                                    this.open('发表回复成功','通知');
                                    this.getSpeak();
                                }
                            }
                        )
                    } else {
                        return false;
                    }
                });
            }


        },
        watch: {
            form2: {
                handler(newV){
                 if(newV['name']!=='' && newV['email']!=='' && newV['desc']!=='')
                    this._data.disableForm2=false;
                },
                deep:true
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
    .el-input__inner{
        display: inline-block;
    },
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