// get the values saved from browser settings
let proxySettingsOn = {
    proxyType: "system"
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
  
  // create listener for button click and match status
  
  let status = 0;
  
  if (status == 0){
    on();
    browser.browserAction.setIcon({path: "icons/on-48.png"});
    status++;
  }
  if (status == 1){
    off();
    browser.browserAction.setIcon({path: "icons/off-48.png"});
    status--;
  }
}

browser.browserAction.onClicked.addListener(toggle);






  