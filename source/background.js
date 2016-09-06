// Author:  Matt Kneiser
// Date:    7/19/2015
// Purpose: Background script that aggregates all links that were redirected.
//          This is mostly for debugging help and just for fun.
//
//          I figured that you might want to see how useful this extension has
//          been by showing you all the pages that were redirected.

date = new Date().toLocaleString();
console.log(date, '| this thing is on');

history = {};
extension_enabled = true;

chrome.browserAction.onClicked.addListener(function(tab) {
	extension_enabled = !extension_enabled;
	console.log("extension enabled", extension_enabled);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.msg === "requestRedirect") {
		if (extension_enabled) {
			console.log("redirect approved @", sender.tab.url);
			sendResponse({msg: "approved"});
		} else {
			console.log("redirect denied @", sender.tab.url);
			sendResponse({msg: "denied"});
		}
	} else {
	    date = new Date().toLocaleString();
	    console.log(date, '|', sender.url, '|', sender.tab.title);
	    history[date] = sender.url + " | " + sender.tab.title;
	}
});