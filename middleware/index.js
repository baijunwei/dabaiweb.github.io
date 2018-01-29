const path = require('path')

// 引入日志中间件
const miLog = require('./mi-log')
module.exports = (app) => {
    // 注册中间件
    app.use(miLog())
}