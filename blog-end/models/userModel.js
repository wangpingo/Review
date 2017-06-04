/**
 * Created by Administrator on 2017/5/25 0025.
 */
var db = require('./db');

exports.getActicle = function(page,callback){

    var sql='select * from acticle order by time desc limit '+ ( (page-1) *2 ) +',' + 2;

    db.query(sql,[page],callback)
};

exports.getSpeak = function(page,callback){

    var sql='select * from comment order by time desc limit '+ ((page-1)*2) +',' + 3;

    db.query(sql,[page],callback)
};


exports.getOneArticle = function (article,callback) {

    var sql='select * from acticle where acticleId= ?';

    db.query(sql,[article],callback)
}


exports.articleNum = function (callback) {

    var sql='select count(*)  from acticle ';

    db.query(sql,[],callback)
}


exports.speakNum = function (callback) {

    var sql='select count(*)  from acticle ';

    db.query(sql,[],callback)
}

exports.selectArticle = function (keyWords,callback) {

    var sql="select * from acticle where title like '%' ? '%' ";

    db.query(sql,[keyWords],callback)
}

exports.getArticleByClass = function (articleClass,callback) {

    var sql="select * from acticle where class = ? ";

    db.query(sql,[articleClass],callback)
}


exports.updatReplay = function (form2,callback) {

    var sql="update comment set t_content=?,t_replay=now(),t_name=?   where commentId = ? ";

    db.query(sql,[form2.desc,form2.name,form2.id],callback)
}



exports.insertComment = function (ruleForm,callback) {

    var sql="insert into comment (name,content,time)  values (?,?,now()) ";

    db.query(sql,[ruleForm.name,ruleForm.desc],callback)
}


exports.insertActileComment = function (ruleForm,callback) {

    var sql="insert into a_comment (name,content,time,acticleId)  values (?,?,now(),?) ";

    db.query(sql,[ruleForm.name,ruleForm.desc,ruleForm.id],callback)
}

exports.getTitle = function (callback) {

    var sql="select acticleId,title,time from acticle  limit 0,4 ";

    db.query(sql,[],callback)
}


exports.getComments = function (article,callback) {

    var sql="select * from a_comment  where acticleId =?";

    db.query(sql,[article],callback)
}



exports.updateCommendNum = function (id,callback) {

    var sql="update acticle set commendNum=commendNum+1   where acticleId = ?";

    db.query(sql,[id],callback)
}


exports.updateWatchNum = function (id,callback) {

    var sql="update acticle set watchNum=watchNum+1   where acticleId = ?";

    db.query(sql,[id],callback)
}