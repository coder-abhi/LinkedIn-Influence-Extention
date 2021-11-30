startBtn = document.getElementById('newBtn');
counterEle = document.getElementById('reqCounter');
startBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { process: { status: "start" } });
    });
})
chrome.runtime.onMessage.addListener(({ process }, sender, sendResponse) => {
    if (process.status === "ready") {
        startBtn.innerText = "Start"
    }
    if (process.count) {
        counterEle.innerText = process.count;
    }
})