/*function getText(){
    return document.body.innerText
}
function getHTML(){
    return document.body.outerHTML
}
console.log(getText());             //Gives you all the text on the page
console.log(getHTML());             //Gives you the whole HTML of the page

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('HERE');
        if (request.method == 'getHTML') {
            console.log('here', document);
            sendResponse(document.all[0].outerHTML);
        }
    }
)*/

function clickElement(index) {
    var nodeList  = document.querySelectorAll('[style="width: 36px; padding: 0px;"]');
    if (nodeList == undefined || nodeList.length <= index) return;
    var element = nodeList[index];
    if (element == undefined) {
        return;
    }
    element.click();
}
clickElement(config);