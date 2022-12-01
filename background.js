// get the values saved from browser settings
let proxySettingsOn = {
    proxyType: "system",
    httpProxyAll: true,
    passthrough: "localhost"
  }; 

// set a constant for no proxy
const proxySettingsOff = {
    proxyType: "none"
  };

// turn on function
function on(){
  browser.proxy.settings.set({value: proxySettingsOn});
}

function off(){
  browser.proxy.settings.set({value: proxySettingsOff});
}

// create function for toggle 
function toggle(){
  // create listener for button click
  let status = 0;
  
  if (status == 0){
    browser.browserAction.onClicked.addListener(on());
    status++;
  }
  if (status == 1){
    browser.browserAction.onClicked.addListener(off());
    status--;
  }
}






  