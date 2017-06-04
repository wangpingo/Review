/**
 * Created by Administrator on 2017/5/25 0025.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myblog'
});

exports.query = function (sql, data, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            //callback(err, null, null);
            console.log(err);
        } else {
            if(typeof data == 'function'){
                callback = data;
                data = null;
            }
            console.log(data);
            conn.query(sql, data, function (qerr, result) {
                //释放连接
                conn.release();
                //事件驱动回调
                console.log(sql);
                console.log(result);

                callback(result);
            });
        }
    });
};