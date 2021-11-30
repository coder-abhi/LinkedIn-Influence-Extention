// Required buttons are selected from popup.html
startBtn = document.getElementById('newBtn');
counterEle = document.getElementById('reqCounter');

// Eventlistener for Button
startBtn.addEventListener('click', () => {
    startBtn.innerText = "In Progress..."
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { process: { status: "start" } });
    });
})

//Event listener for Reciving messages
chrome.runtime.onMessage.addListener(({ process }, sender, sendResponse) => {
    if (process.status === "ready") {
        startBtn.innerText = "Start"
    }
    if (process.count) {
        counterEle.innerText = process.count;
    }
})