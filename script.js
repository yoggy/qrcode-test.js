//var w = document.body.clientWidth;
//var h = window.innerHeight;

var w = 300;
var h = 300;

var qrcode = new QRCode(
    document.getElementById("qrcode-container"),
    {
        id: "qrcode",
        text: "test",
        width: w,
        height: h,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }
);
