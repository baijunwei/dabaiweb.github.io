var request = require('request');

module.exports = async(obj) => {

    return await request('http://www.yemapt.com/api/GetCode.php?Uid=529616988&Pwd=a2914689&ID='+obj.pid+'&Mobile='+obj.mobile, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:',typeof body);
        obj = body;
        return obj;
    });
}
