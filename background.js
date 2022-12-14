// get the values saved from browser settings
const user_setting = browser.proxy.settings.get({});

user_setting.then((got) => {
  console.log(got.value);
  console.log(got.levelOfControl);
});

// TODO how to softcode the user proxy settings

// manually hardcoded on values for now
let proxySettingsOn = {
  proxyType: "manual",
  socks: "10.64.0.1:1080",
  socksVersion: 5,
  proxyDNS: true 
};

// set a constant for no proxy
const proxySettingsOff = {
    proxyType: "none"
  };

// turn on and off function
function on(){
  browser.proxy.settings.set({value: proxySettingsOn});
  console.log("proxy on")
}

function off(){
  browser.proxy.settings.set({value: proxySettingsOff});
  console.log("proxy off")
}

// setting flag states for proxy on/off
let flag = false;

// create function for toggle 
function toggle(){
  
  // create listener for button click and match flag
  if (flag){
    off();
    browser.browserAction.setIcon({path: "icons/off-48.png"});
    browser.browserAction.setTitle({"title": "Proxy Off"});
  } else {
    on();
    browser.browserAction.setIcon({path: "icons/on-48.png"});
    browser.browserAction.setTitle({"title": "Proxy On"});
  }

  // important to flip flag status every time
  flag = !flag
}

// invoke function
browser.browserAction.onClicked.addListener(toggle);







