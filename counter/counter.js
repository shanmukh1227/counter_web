let countervalue = document.getElementById("counterValue");
console.log(countervalue);

function onIncrement() {
    let previousvalue = countervalue.textContent;
    let updatevalue = parseInt(previousvalue) + 1;
    countervalue.textContent = updatevalue;
    if (updatevalue > 0) {
        countervalue.style.color = "green";
    } else if (updatevalue < 0) {
        countervalue.style.color = "red";
    } else {
        countervalue.style.color = "black";
    }
}

function onDecrement() {
    let previousvalue = countervalue.textContent;
    let updatevalue = parseInt(previousvalue) - 1;
    countervalue.textContent = updatevalue;
    if (updatevalue > 0) {
        countervalue.style.color = "green";
    } else if (updatevalue < 0) {
        countervalue.style.color = "red";
    } else {
        countervalue.style.color = "black";
    }
}

function onReset() {
    updatevalue = 0;
    countervalue.textContent = updatevalue;
    countervalue.style.color = "black";

}