var request = require('request');

module.exports = async(obj) => {
    // 优酷
    //取用户信息
    //http://www.yemapt.com/api/GetMyinfo.php?Uid=529616988&Pwd=a2914689
    //取手机号
    //http://www.yemapt.com/api/GetMobilenum.php?Uid=529616988&Pwd=a2914689&ID=314&cr=1&size=1
    //取验证码
    //http://www.yemapt.com/api/GetCode.php?Uid=529616988&Pwd=a2914689&ID=314&Mobile=13216807473

    return await request('http://www.yemapt.com/api/GetMobilenum.php?Uid=529616988&Pwd=a2914689&ID='+obj.pid+'&cr=1&size=1', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', typeof body);
        obj = body.split('|');
        return obj;
    });
}
