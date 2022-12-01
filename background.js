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

// create function for toggle 
function toggle(){
  
  // create listener for button click and match status
  
  let status = false;
  
  if (status == false){
    on();
    browser.browserAction.setIcon({path: "icons/on-48.png"});
    status = true;

  }
  if (status == true){
    off();
    browser.browserAction.setIcon({path: "icons/off-48.png"});
    status = false;
  }
}

browser.browserAction.onClicked.addListener(toggle);






  