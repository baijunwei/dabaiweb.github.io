const controllgetphone = require('./getphone')
const controllgetyzm = require('./getyzm')
const controllgetyemaphone = require('./yemagetphone')
const controllgetyemayzm = require('./yemagetyzm')

module.exports = {
    index: async(ctx, next) => {
        await ctx.render("../view/hello", { title: "baymax,欢迎你!" })
    },
    getphone:async(ctx,next) =>{
        var obj = ctx.request.body;
        ctx.body =await controllgetphone(obj)
    },
    getyzm:async(ctx,next) =>{
        var obj = ctx.request.body;
        console.log(obj)
        ctx.body =await controllgetyzm(obj)
    },
    getyemaphone:async(ctx,next) =>{
        var obj = ctx.request.body;
        ctx.body =await controllgetyemaphone(obj)
    },
    getyemayzm:async(ctx,next) =>{
        var obj = ctx.request.body;
        console.log(obj)
        ctx.body =await controllgetyemayzm(obj)
    },
    getinfo:async(ctx,next) =>{
        var obj = ctx.request.body;
        console.log(obj)
        ctx.body =await controllgetinfo(obj)
    },
    youkulogin:async(ctx,next) =>{
        var obj = ctx.request.body;
        console.log(obj)
        ctx.body =await controllyoukulogin(obj)
    }
}