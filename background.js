// get the values saved from browser settings
let user_setting = browser.proxy.settings.get({})
console.log("user settings", user_setting);

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
  console.log("proxy on")
}

function off(){
  browser.proxy.settings.set({value: proxySettingsOff});
  console.log("proxy off")
}

let flag = false;
// create function for toggle 
function toggle(){
  
  // create listener for button click and match status
  if (flag){
    off();
    browser.browserAction.setIcon({path: "icons/off-48.png"});
  } else {
    on();
    browser.browserAction.setIcon({path: "icons/on-48.png"});
  }
  flag = !flag
}

browser.browserAction.onClicked.addListener(toggle);






