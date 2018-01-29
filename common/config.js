const sequelize = require('sequelize');

// 链接接数据库
var config = {
    database: 'test', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'a2914689', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};
var Sequelize = new sequelize('test', 'root', 'a2914689', {
    host:'localhost',
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});

module.exports = {
    config,
    Sequelize
}
