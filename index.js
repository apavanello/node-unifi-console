var config = {
  username: "", // username: "api_user",
  password: "", // password: "api_pass",
  host: "", // host: "www.apavanello.com.br",
  ssid: "" // ssid: "Minha SSID"
}


var Unifi = require('unifi-api');

var api = new Unifi(config);
var printer;

function generateCode() {
  var time = "1440" //Time in minutes 
  api.login(function(d) {
    api.addGuestVoucher(1, 1, time, function(err, codes) {
	    //console.log(codes);
      var code = codes[0].code;
      code = code.substring(0,5) + '-' + code.substring(5, 10);
      printCode(code);
    })
  });
}

function printCode(code) {
  
      console.log('=============================');
      console.log('         WLAN: ' + config.ssid);
      console.log('+++++++++++++++++++++++++++++');
      console.log('         Code: ' + code);
      console.log('+++++++++++++++++++++++++++++');
      console.log('         Bom Wifi!');
      console.log('-----------------------------');
      }

generateCode();
