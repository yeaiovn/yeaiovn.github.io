//window.onload = function () { 

var token = getAllUrlParams().inv;
var register = "xmpp:yea.io.vn?register;preauth=" + token;

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

document.querySelector("#preauth").innerHTML = "khóa: " + token;
