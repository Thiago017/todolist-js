var mariadb = require('mariadb');
var db = require('mysql-promise')();

var dafult = {
	"host": "localhost",
	"user": "root",
	"password": "",
	"database": "todolist"
};

db.configure(dafult, mariadb);

module.exports = db;
