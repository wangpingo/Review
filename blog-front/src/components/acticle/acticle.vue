<template>
    <div class="home">
        <div class="home-left">
            <div style="overflow: hidden;margin-bottom: 50px" v-if="article">
                <span class="title">{{article.title}}</span>
                <span class="date">{{article.time | timeChange}}</span>
                <hr>

                <img :src="article.img" class="cont-img">
                <div class="article-footer">
                    Tags:&nbsp;<span class="tags">{{article.class | class }}</span>
                </div>
                <!--v-html="article.content"-->
                <div class="content-detail" >
                    <vue-markdown :source='article.content' class="mark"> </vue-markdown>
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
                <ul >
                    <li v-for="(item,index)  in xiangGuan">
                        <router-link :to="{path:'/acticle',query: {acticleId: item.acticleId}}"> {{item.title}} </router-link>
                        ({{item.time | timeChange}})
                    </li>
                </ul>

            </div>
            <div class="comments">
                留言列表:
                <div v-for="(item,index)  in comments">
                    <div class="line"></div>
                    <div class="comment">
                        <img src="../../assets/da8e974dc_s.jpg" alt="">
                        <span>{{item.name}}&nbsp; {{item.time | timeChange}} &nbsp; &nbsp;发表 <br>
                          <a> {{item.content}}</a>
                    </span>
                    </div>
                </div>


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
            <el-row style="margin-top: 36px;">
                <el-col :span="24"><div class="grid-content bg-purple-dark ">文章评论:</div></el-col>
            </el-row>

            <el-form ref="form"  :model="form" label-width="80px" :rules="rules">
                <el-form-item label="昵称:" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="邮箱:" prop="email">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>

                <el-form-item label="正文:" prop="desc">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                            plain
                            @click="submitForm('form')">
                        发表评论
                    </el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>

</template>

<script>

    import VueMarkdown from 'vue-markdown'

    export default {

        beforeMount() {
            this.articleId=this.$route.query.acticleId
            this.geArticle(this.articleId)
            this.getTitle()
            this.getComments(this.articleId)
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
                form: {
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
                article: 0,
                articleId: 0,
                xiangGuan:null,
                comments:null

            }
        },
        methods: {
            submitForm(formName) {
                this.form.id=this.$route.query.acticleId
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('http://localhost:3000/insertActileComment',{ruleForm:this.form}).then(
                            response=>{
                                if(response.data.affectedRows>0){

                                    this.getComments(this.form.id);
                                    this.$confirm('发表成功')
                                        .then(_ => {

                                            done();
                                        })
                                        .catch(_ => {});
                                }
                            }
                        )
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            onSubmit() {
                console.log('submit!');
            },
            open2() {
                this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                });
            },
            geArticle(id) {
                this.$http.get('http://localhost:3000/getArticle?article='+id).then(
                    response=>{
                        this.article=response.data[0];
                        console.log(this.article);
                    }
                )
            },
            getTitle() {
                this.$http.get('http://localhost:3000/getTitle').then(
                    response=>{
                        this.xiangGuan=response.data;

                        console.log(this.xiangGuan);

                    }
                )
            },
            getComments(id) {
                this.$http.get('http://localhost:3000/getComments?article='+id).then(
                    response=>{
                        this.comments=response.data;

                        console.log(this.comments);

                    }
                )
            }
        },
        watch: {
            '$route': {
                handler(newV){
                    this.geArticle(newV.query.acticleId)
                    this.getComments(newV.query.acticleId)

                },
                deep:true
            }
        },
        components: {
            VueMarkdown
        }
    }
</script>





















<style lang="scss" rel='stylesheet/scss'>

    .content-detail{
        margin: 40px auto;
        p{
            width: 650px;
            text-indent: 25px;
            margin-bottom: 10px;
            line-height: 25px;
        }
        .mark{
            width: 650px;
            display: block;
            line-height: 25px;
            code{
                margin-left: 20px;
                display: inline-block;
                border-radius: 4px;
                background: #cccccc;
                padding-left: 20px;
                padding-right: 20px;
                width: 600px;
            }
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
        .router-link-active{
            color: #5e6d82;
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