let ctrl = () => {
};

const co = require('co');


ctrl.createChannel = function () {
    co(function () {
        let channel = yield getChannel();
        return channel;
    }).catch(err => {
        return 'error';
    });
};


var getChannel = function () {
    return new Promise(function (resolve, reject) {
        resolve("ok")
    });
};


module.exports = ctrl;