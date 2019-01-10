var pool = require('./db_connect');

module.exports = function () {
    return {
        select: function(callback){
            pool.getConnection(function(err, con){
                var sql = 'select name, age from user_table order by 1 desc';
                con.query(sql, function (err, result, fields) {
                    con.release();
                    if (err) return callback(err);
                    callback(null, result);
                });
            });
        },
        pool: pool
    }
};