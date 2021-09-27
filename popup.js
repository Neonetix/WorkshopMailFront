document.addEventListener('DOMContentLoaded', function() {
    let checkPageButton = document.getElementById('checkPage');
    let test = document.getElementById('test');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            let d = document;
            let url = tab.url
            let text = d.createTextNode(url)
            test.append(text)
        });
    }, false);
}, false);