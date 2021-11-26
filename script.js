var connectList = [];
var listLoaded = 0;
const sendConnectionRequest = async () => {
    // console.log(document.getElementsByClassName('m11'))
    const div = document.getElementsByClassName("entity-result__item");
    console.log(document.getElementById('popup'));
    for(i in div){
        // temp.push(div[i].getElementsByTagName('button'));
        let btn = div[i].getElementsByTagName('button')[0];
        console.log(btn.innerText)
        if(btn.innerText === "Connect"){
            connectList.push(btn);
        }
    }
    listLoaded = 1;
    
    
}
function sendNowFun()
{
    console.log(document.getElementsByClassName('ml1'))
}
function processBegin(){
    setInterval(() => {
        for(i in connectList){
            // document.addEventListener('load',sendNowFun)
            connectList[i].click();
            // console.log("In Processsssn Begin")
            setTimeout(() => {
                console.log(document.getElementsByClassName('ml1')[0].click());
            }, 1000);
            // window.addEventListener('load',sendNowFun);
            // sendNowFun();
        }
    }, 1000);
}
window.addEventListener('load',sendConnectionRequest);
console.log(connectList)
chrome.runtime.onMessage.addListener(({process})=>{
    console.log("In Meseeeege");

    // if(process === "start" && listLoaded){
        processBegin();
    // }
}
)
// sendConnectionRequest()
// console.log(temp)