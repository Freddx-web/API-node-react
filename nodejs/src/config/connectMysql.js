// Module Mysql
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

// Connection
const mysql_db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'data_base'
});

// Valide Connection
mysql_db.connect((error)=>{
    if(error){
        console.log('ERROR CONNECT ' + error);
        return;
    } 
    else {
        console.log('CONNECTED MYSQL SERVER. Successfully')
    }
})

// Export Module
module.exports = mysql_db;