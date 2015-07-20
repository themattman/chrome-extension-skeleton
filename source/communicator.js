console.log("ok, this extension thing works");
// For more, see: https://developer.chrome.com/extensions/messaging
chrome.runtime.sendMessage({}, function(response) {});
