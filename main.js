//Array visualizer

//HTML variables
let containerEl = document.getElementById("container");

//global variable
let myData = [];
for (let n = 1; n <=50; n++) {
    myData.push(Math.random() * 600);
}

//display data
drawArray();

function drawArray() {
    let outputStr = "";
    for(let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`;
    }
    containerEl.innerHTML = outputStr;
}

// key event stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    consol.log(event.keyCode)
}