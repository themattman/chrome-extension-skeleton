// Author:  Matt Kneiser
// Date:    7/19/2015
// Purpose: Script that redirects Youtube pages to Youtubeonrepeat.
//          Should only be run on pages currently at youtube.com.
//          Since Youtube forces https and youtubeonrepeat doesn't
//          support https, I have to convert the protocol too.

console.log("ok, this extension thing works");

chrome.runtime.sendMessage({msg: "requestRedirect"}, function(response) {
	console.log("requestRedirect");
	console.log(response);
	if (response.msg === "approved") {
		console.log("approved!");
		redirectPage();
	} else {
		console.log("denied!");
	}
});

function redirectPage() {
	chrome.runtime.sendMessage({}, function(response) {});
    cur_location = window.location.href.replace('youtube', 'youtubeonrepeat');
    window.location.href = cur_location.replace('https', 'http');
}