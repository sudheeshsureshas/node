var mysql=require('mysql');
var connection=mysql.createPool({
host:'localhost',
//host:'LAPTOP-D7EU1N29',
user:'root',
password:'ufs555',
database:'Trackbox_Alives',
//port:'3306',
multipleStatements: true

});
module.exports=connection;