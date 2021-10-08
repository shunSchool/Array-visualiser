//Array visualizer

//HTML variables
let containerEl = document.getElementById("container");

//global variable
let myData = [400, 500, 250, 550, 100, 300];
// index --->  0    1    2    3    4    5

//display data
drawArray();

function drawArray() {
    let outputStr = "";
    for(let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`;
    }
    containerEl.innerHTML = outputStr;
}