async function doSource(){
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['source.js'],
    })
    var buttonText = document.getElementById("btnSource");
    if (buttonText.innerHTML == "Copy") buttonText.innerHTML = "Copied!";
    else buttonText.innerHTML = "Copy";
};

async function doTarget(){
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['target.js'],
    })
    var buttonText = document.getElementById("btnTarget");
    if (buttonText.innerHTML == "Paste") { 
        buttonText.innerHTML = "Pasted!"
        document.getElementById("pastedText").style.display = "block";
    }
    else {
        buttonText.innerHTML = "Pasted";
    }
};
    
document.getElementById("btnSource").onclick = doSource;
document.getElementById("btnTarget").onclick = doTarget;