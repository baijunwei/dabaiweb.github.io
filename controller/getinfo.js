var request = require('request');

module.exports = async(obj) => {
    // 优酷
    var youku = 8148;
    var yizhibo = 20443;
    var mogujie = 8167;
    var bobo = 8167;

    return await request('http://www.eobzz.com/line.do?line=personalInfo', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:',body);
        return obj;
    });
}
