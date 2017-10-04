//
// qrcode-test.js - https://github.com/yoggy/qrcode-test.js
//
// license:
//     Copyright (c) 2017 yoggy <yoggy0@gmail.com>
//     Released under the MIT license
//     http://opensource.org/licenses/mit-license.php;
//
var w = 400;
var h = 400;

var initial_url = "http://example.com/";

// qrcode.js https://davidshimjs.github.io/qrcodejs/
var qrcode = new QRCode(
    document.getElementById("qrcode-container"),
    {
        id: "qrcode",
        text: initial_url,
        width: w,
        height: h,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }
);

// vue.js https://jp.vuejs.org/
var url_input_component = new Vue({
    el: '#url_input_component',
    data: {
        url : initial_url
    },
    methods: {
        on_update : function () {
            console.log("on_update()");
            qrcode.clear();
            qrcode.makeCode(this.url);
        }
    }
});