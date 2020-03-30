//JS Intro

let variable = "var";
variable = 2;

//for loops
for (let i = 0; i < 5; i++) {

}

//while loops
while (variable == "var") {

}

//functions
function test(thingToTest) {
    return "done";
}

let count = 0;

function buttonClicked(el) {
    count++;
    let countText = "I've been clicked " + count + " times";
    el.innerHTML = countText;
    //console.log(countText);
    if(count == 1)
        el.classList.add("buttonClicked");
}

let appearCount = 0;

function disappearDiv() {
    //appearCount++;
    //console.log = appearCount;
    //if(appearCount % 2 == 0)
        document.getElementById("disappear").classList.add("disappearClick");
    //else
       //document.getElementById("disappear").classList.add("appearClick");
}

document.getElementById("disappear").onclick = disappearDiv;

function KeyLog(e) {
    console.log(e.key);
    if (e.key == "ArrowUp")
        console.log("You pressed the up arrow");
}

document.onkeydown = KeyLog;