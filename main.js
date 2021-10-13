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
    if (event.keyCode === 38) {
        //up arrow - add 600 the beginning of array
        myData.splice(0, 0, Math.random() * 600);
    } else if (event.keyCode === 40) {
        //down arrow - remove element from beginning
        myData.splice(0, 1);
    }

    //re draw the array
    drawArray();
}