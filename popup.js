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

function move() {
    inject_active(0);
}

function textbox() {
    inject_active(1);
}

function comment() {
    inject_active(2);
}

function highlight() {
    inject_active(3);
}

function erase() {
    inject_active(4);
}

document.getElementById('move').addEventListener('click', move);
document.getElementById('textbox').addEventListener('click', textbox);
document.getElementById('comment').addEventListener('click', comment);
document.getElementById('highlight').addEventListener('click', highlight);
document.getElementById('erase').addEventListener('click', erase);