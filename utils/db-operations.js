const dbConnection = require('../app').connection;

function queryDb(sql) {
    dbConnection.query(sql, (err, results, fields) => {
        if (err) throw err;
        return results;
    });
}