var request = require('request');

module.exports = async(obj) => {
    return await request('http://api.eobzz.com/httpApi.do?action=getVcodeAndReleaseMobile&uid=a529616988&token=1615b78fd30b8228fc2c0d5e04cd4d6f&mobile='+obj.mobile, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        obj = body;
        return obj;
    });
}
