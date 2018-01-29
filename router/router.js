const router = require('koa-router')();
const controllerHome = require('../controller/home');


module.exports = (app) => {

    router.get('/', controllerHome.index)
    // 获取速码手机号
    router.post('/getphone', controllerHome.getphone)
    // 获取速码验证码
    router.post('/getyzm', controllerHome.getyzm)
    // 获取野码手机号
    router.post('/getyemaphone', controllerHome.getyemaphone)
    // 获取野码验证码
    router.post('/getyemayzm', controllerHome.getyemayzm)
    // 获取验证码
    router.get('/youkulogin', controllerHome.youkulogin)
    app.use(router.routes())
        .use(router.allowedMethods())
}