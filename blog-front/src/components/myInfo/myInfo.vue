<template>
    <div class="myInfo">
        <img src="../../assets/2.png" />
        <div class="base-info">
            <a style="font-size: 16px">基本信息：</a>
            <div class="line">

            </div>
            <span>姓名：&nbsp;高铨康</span>
            <span>性别：&nbsp;男</span>
            <span>最高学历：&nbsp;本科</span>
            <span>工作年限：&nbsp;1年</span>
            <span>毕业时间：&nbsp;2018年</span>
            <span>联系邮箱：&nbsp;gaomengjie_1@163.com</span>
            <div class="jianGe"></div>
            <a style="font-size: 16px">工作经历：</a>
            <div class="line">

            </div>
            <a class="t-title"> 2017.03-至今</a>
            <p>
                网易/前端实习生

            </p>
            <p>
                负责部门招聘产品线开发
            </p>

            <a class="t-title"> 2016.03-2016.09</a>
            <p>
                创点高科/前端+后端实习生

            </p>
            <p>
                负责部门相关项目的开发
            </p>
            <div class="jianGe"></div>
            <a style="font-size: 16px">项目经历：</a>
            <div class="line">

            </div>
            <a class="t-title"> 2017.03-至今</a><br>
            <p>
                项目名称: &nbsp; 网易猎头项目/网易新员工入职
                <span class="row-blank">

                </span>
                项目职责：&nbsp; 负责前端
            </p>

            <p>
                项目内容:<br>
                <a>
                    保密
                </a>
            </p>

            <a class="t-title"> 2017.03-至今</a><br>
            <p>
                项目名称: &nbsp; 创客文化平台
                <span class="row-blank">

                </span>
                项目职责：&nbsp; 前端+后端工程师
            </p>

            <p>
                项目内容:<br>
                <a>
                    利用node+express+mysql+html/css进行编写相应网站。<br>
                </a><br>
                <a>
                    网站设计是一个创意孵化器，为创客寻找团队，缔造创客精神
                </a><br>
                <a>
                    项目取得成果：黑龙江省互联网创意大赛二等奖
                </a>
            </p>
            <div class="jianGe"></div>

            <a style="font-size: 16px">自我描述：</a>
            <div class="line"></div>
            <p style="padding-left: 30px; ">
                自我学习能力强，做事认真。编程爱好者,喜欢研究新知识。热爱折腾拥有梦想。对于工作及其负责。坚信“态度决定一切，细节决定成败”善于沟通，善于捕捉业务逻辑。我年轻有活力有梦想，以成为一名极客而努力，我这个人运气比较好希望能把好运带给身边的人。创新能力很强，拥有较强的逻辑。最近在看平凡的世界，希望我们能够像著作中一样一起平凡而伟大。
            </p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" rel='stylesheet/scss'>
    .myInfo{
        width: 1080px;
        margin: 10px auto;
        color: #5e6d82;
        .line{
            margin-bottom: 10px;
        }
        img{
            display:block;
            position: relative;

            border-radius: 50%;
            width: 130px;
            height: 130px;
            margin: 10px auto;
            filter: Alpha(opacity=0.6); /* IE */
            -moz-opacity:0.6;    /* FF 主要是为了兼容老版本的FF */
            opacity:0.6;    /* FF */
        }
        .base-info{
            margin: 20px 195px 0 195px ;
            width: 730px;
            span{
                display: inline-block;
                width: 240px;
                line-height: 40px;
            }
            .jianGe{
                height: 20px;
            }
            p{
                text-indent: 20px;
                line-height: 30px;
                a{
                    display: inline-block;
                    text-indent: 40px;
                }
            }
            .t-title{
                line-height: 30px;
            }
            .row-blank{
                display: inline-block;
                width: 40px;
            }
        }
    }
</style>