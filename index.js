//window.onload = function () { 

var u = 'yea.io.vn'; 
var preauth = getAllUrlParams().inv;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 
function reg(){
if (isMobile) {
    var now = new Date().valueOf(); 
//xmpp:yea.io.vn?register;preauth=JcR5D5lcr5DJpxpjEHIOU1Gc
    window.location = 'xmpp:yea.io.vn?register;preauth='+preauth;
    
    setTimeout(function () {
        if (new Date().valueOf() - now > 5000) {
            return;
            }
            window.location = 'https://'+u;
        }, 4000);
        
} else {
    window.location = 'https://'+u;
    }
}

document.querySelector("#preauth").innerHTML = "khoá: "+JSON.stringify(preauth,null,2);
