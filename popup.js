startBtn = document.getElementById('newBtn');
console.log(startBtn)
startBtn.addEventListener('click',()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {process: "start"});
    });
})
