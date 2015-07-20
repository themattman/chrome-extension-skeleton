// Author:  Matt Kneiser
// Date:    7/19/2015
// Purpose: Script that redirects Youtube pages to Youtubeonrepeat.
//          Should only be run on pages currently at youtube.com.
//          Since Youtube forces https and youtubeonrepeat doesn't
//          support https, I have to convert the protocol too.

console.log("ok, this extension thing works");
console.log('redirecting...');

setTimeout(function(){
    // For more, see: https://developer.chrome.com/extensions/messaging
    chrome.runtime.sendMessage({}, function(response) {});
    cur_location = window.location.href.replace('youtube', 'youtubeonrepeat');
    // Redirect to the new page
    window.location.href = cur_location.replace('https', 'http');
}, 1000);
