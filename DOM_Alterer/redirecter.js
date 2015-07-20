console.log("ok, this extension thing works");
// For more, see: https://developer.chrome.com/extensions/messaging
chrome.runtime.sendMessage({}, function(response) {});

setTimeout(function(){alert('redirecting...')}, 1000);

setTimeout(function(){
window.location.href = window.location.href.replace('youtube', 'youtubeonrepeat');
}, 5000);
