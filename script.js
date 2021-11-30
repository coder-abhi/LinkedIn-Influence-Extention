var connectList = [];
// Collecting buttons of all Id's on page
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

// Sending request to Buttons
function processBegin() {
    let k = 0;
    setInterval(() => {
        for (i in connectList) {
            connectList[i].click();
            setTimeout(() => {
                sendNowBtn = document.getElementsByClassName('ml1')[0];

                // Pressing send button when confirmation popup window showup
                if (sendNowBtn.innerText == "Send") {
                    sendNowBtn.click();
                    k = k + 1;
                    chrome.runtime.sendMessage({ process: { count: k } })
                }
            }, 2000);
        }
    }, 3500);
}

// Starting to collect button once page is loaded
window.addEventListener('load', () => {
    sendConnectionRequest();
    chrome.runtime.sendMessage({ process: { status: "ready" } });
});

// Listener of initinl starting messege
chrome.runtime.onMessage.addListener(({ process }) => {
    if (process.status == "start") {
        processBegin();
    }
}
)