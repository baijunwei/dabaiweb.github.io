const koa = require('koa');//koa实例
const router = require('./router/router'); //路由文件夹
const bodyParser = require('koa-bodyparser'); //requst请求中间件
const path = require('path'); //工具函数，用于处理文件与目录的路径。
const nunjucks = require('koa-nunjucks-2'); //转义 防XSS攻击
const staticFiles = require('koa-static');//访问静态文件
const middleWare = require('./middleware/index');//日志中间件

const http = require('http'); //要使用 HTTP 服务器与客户端
const fs = require('fs'); //通过 require('fs') 使用该模块。 所有的方法都有异步和同步的形式。
const websocket = require('koa-wss');//websocket 中间件
var cors = require('koa-cors');//解决跨域问题
// const opn = require('opn');//启动打开默认浏览器
// opn('https://b.ittun.com');

var app = new koa(); //new 一个koa实例

middleWare(app);

app.use(bodyParser());
app.use(cors());

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'view'), // 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));

app.use(staticFiles(path.resolve(__dirname, "./public")));

router(app);
let hostname = '127.0.0.1';
let port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});