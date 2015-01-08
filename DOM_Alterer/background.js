console.log('this thing is on');
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.url);
});
