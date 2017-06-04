/**
 * Created by Administrator on 2017/5/25 0025.
 */

var userModel = require('../models/userModel');

exports.getActicle =function (req,res) {

    var page = req.query.page;
    console.log(page)
    userModel.getActicle(page,function (rs) {
        res.json(rs);
    })
}


exports.getSpeak =function (req,res) {

    var page = req.query.page;
    console.log(page)
    userModel.getSpeak(page,function (rs) {
        res.json(rs);
    })
}

exports.getOneArticle =function (req,res) {
    var article= req.query.article;
    userModel.getOneArticle(article,function (rs) {
        res.json(rs);
        userModel.updateWatchNum(article,function (rs) {
            console.log(rs.affectedRows)
        })
    })
}

exports.getArticleByClass=function (req,res) {

    var articleClass=req.body.classIndex;
    console.log(articleClass)
    userModel.getArticleByClass(articleClass,function (rs) {
        res.json(rs);
    })

}

exports.articleNum=function (req,res) {

    userModel.articleNum(function (rs) {
        res.json(rs);
    })

}



exports.speakNum=function (req,res) {

    userModel.speakNum(function (rs) {
        res.json(rs);
    })

}



exports.insertActileComment=function (req,res) {
    var ruleForm=req.body.ruleForm;
    userModel.insertActileComment(ruleForm,function (rs) {
        res.json(rs);
        if (rs.affectedRows>0){
            userModel.updateCommendNum(ruleForm.id,function (rs) {
                console.log(rs.affectedRows);
            });
        }
    })

}
exports.insertComment=function (req,res) {
    var ruleForm=req.body.ruleForm;
    userModel.insertComment(ruleForm,function (rs) {
        res.json(rs);
    })

}

exports.selectArticle=function (req,res) {

    var keyWords=req.body.keyWords;
    userModel.selectArticle(keyWords,function (rs) {
        res.json(rs);
    })
}


exports.getTitle=function (req,res) {

    userModel.getTitle(function (rs) {
        res.json(rs);
    })
}

exports.updatReplay=function (req,res) {

    var form2=req.body.form2;
    userModel.updatReplay(form2,function (rs) {
        res.json(rs);
    })
}


exports.getComments=function (req,res) {

    var article=req.query.article;
    userModel.getComments(article,function (rs) {
        res.json(rs);
    })
}
