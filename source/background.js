// Author:  Matt Kneiser
// Date:    7/19/2015
// Purpose: Background script that aggregates all links that were redirected.
//          This is mostly for debugging help and just for fun.
//
//          I figured that you might want to see how useful this extension has
//          been by showing you all the pages that were redirected.

date = new Date().toLocaleString();
console.log(date, '| this thing is on');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    date = new Date().toLocaleString();
    console.log(date, '|', sender.url, '|', sender.tab.title);
});
