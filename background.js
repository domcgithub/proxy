// get the values saved from browser settings
// let user_setting = browser.proxy.settings.get({})

let proxySettingsOn = {
  proxyType: "manual"
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

let flag = false;
// create function for toggle 
function toggle(){
  
  // create listener for button click and match status
  if (flag == false){
    on();
    browser.browserAction.setIcon({path: "icons/on-48.png"});
    flag = true;
  }

  if (flag == true){
    off();
    browser.browserAction.setIcon({path: "icons/off-48.png"});
    flag = false;
  }
}

browser.browserAction.onClicked.addListener(toggle);






  