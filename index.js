import QRCode from 'qrcode';

const createQRcode = async text => {
    try {
        console.log(await QRCode.toDataURL(text));
    } catch (err) {
        console.error(err);
    }
}

createQRcode('Hello Node QR!');
