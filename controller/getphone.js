var request = require('request');

module.exports = async(obj) => {
    // 优酷
    var youku = 8148;
    var yizhibo = 20443;
    var mogujie = 8167;
    var bobo = 8167;
    var baidu = 8768;
    //  var nice = 10574;
    return await request('http://api.eobzz.com/httpApi.do?action=getMobilenum&pid='+obj.pid+'&uid=a529616988&token=1615b78fd30b8228fc2c0d5e04cd4d6f&mobile=&size=1', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', typeof body);
        obj = body.split('|');
        return obj;
    });
}
