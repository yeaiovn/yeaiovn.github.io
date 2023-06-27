//window.onload = function () { 

var token = getAllUrlParams().inv;
var register = "xmpp:yea.io.vn?register;preauth=" + token;

document.querySelector("#qrcode").innerHTML = "<img src='https://chart.googleapis.com/chart?cht=qr&chl="+register+"&chs=180x180&chld=L|0'/>"

var userAgent = navigator.userAgent.toLowerCase();
var isAndroid = userAgent.indexOf("android") > -1;
              
function reg(){
    if (isAndroid) {
    window.location = register;
    /*
    var now = new Date().valueOf();
    setTimeout(function () {
        if (new Date().valueOf() - now > 5000) {
            return;
            }
            window.location = 'https://'+u;
        }, 4000);
    */
    } else {
    window.location = 'https://yea.io.vn/dl/';
    }
}
