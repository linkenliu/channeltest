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


getChannel = function () {
    return new Promise(function (resolve, reject) {
        resolve([{chid: 1201, name: 'CCTV5'},{chid: 1201, name: 'CCTV5'},{chid: 1201, name: 'CCTV5'},{chid: 1201, name: 'CCTV5'}])
    });
};


module.exports = ctrl;