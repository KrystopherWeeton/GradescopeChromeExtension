

/**********************************************************************/
/*       HOOKS - Functions which run at spec. points in program       */
/**********************************************************************/

/** Runs on installation */
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });
});

function getHTML() {
    console.log("I AM HERE'")
    return document.body.outerHTML;
}

/** Runs on keyboard command input */
/*
chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {method: 'getHTML'}, function(response) {
            console.log('response', response);
        })
    })
});
*/
function inject(tab_id, value) {
    chrome.tabs.executeScript(tab_id, {
        code: 'var config = "' + value + '";'
    }, function() {
        chrome.tabs.executeScript(tab_id, {file: 'content_script.js'});
    });
}

function inject_active(value) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        inject(tabs[0].id, value)
    })
}

chrome.commands.onCommand.addListener(function(command) {
    if (command == 'move') {
        inject_active(0);
    } else if (command == 'textbox') {
       inject_active(1);
    } else if (command == 'comment') {
       inject_active(2);
    } else if (command == 'highlight') {
       inject_active(3);
    } else if (command == 'erase') {
       inject_active(4);
    }
});