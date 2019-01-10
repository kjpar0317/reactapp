var mysql = require('mysql');

module.exports = function () {
    var pool = mysql.createPool({
        host: "reactapp.cdec2ityzhyk.ap-northeast-2.rds.amazonaws.com",
        user: "kjpar0317",
        password: "kjpar1703!",
        database: "reactapp"
    });

    return {
        getConnection: function (callback) {    // connection pool을 생성하여 리턴합니다
            pool.getConnection(callback);
        },
        end: function(callback){
            pool.end(callback);
        }
    }
}();