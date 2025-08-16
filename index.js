var QRCode = require('qrcode');

QRCode.toString('我的好兄弟,V', { type: 'terminal' }, function (err, data) {
    console.log(data);
});