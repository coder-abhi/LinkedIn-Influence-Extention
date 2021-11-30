var connectList = [];
const sendConnectionRequest = async () => {
    const div = document.getElementsByClassName("entity-result__item");
    for (i in div) {
        let btn = div[i].getElementsByTagName('button')[0];
        console.log(btn.innerText)
        if (btn.innerText === "Connect") {
            connectList.push(btn);
        }
    }
}
function processBegin() {
    let k = 0;
    setInterval(() => {
        for (i in connectList) {
            connectList[i].click();
            setTimeout(() => {
                sendNowBtn = document.getElementsByClassName('ml1')[0];
                if (sendNowBtn.innerText == "Send") {
                    sendNowBtn.click();
                    k = k + 1;
                    chrome.runtime.sendMessage({ process: { count: k } })
                }
            }, 2000);
        }
    }, 3500);
}
window.addEventListener('load', () => {
    sendConnectionRequest();
    chrome.runtime.sendMessage({ process: { status: "ready" } });
});
console.log(connectList)
chrome.runtime.onMessage.addListener(({ process }) => {
    if (process.status == "start") {
        processBegin();
    }
}
)