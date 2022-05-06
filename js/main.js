const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const equal = document.getElementById("equal");

function insert(num) {
    calculation.textContent += num;
}

clear.addEventListener("click", function () {
    calculation.textContent = "";
    result.textContent = 0;
});

back.addEventListener("click", function () {
    let exp = calculation.textContent;
    calculation.textContent = calculation.textContent.substring(0, exp.length - 1);
});

equal.addEventListener("click", function () {
    let exp = calculation.textContent;
    result.textContent = eval(exp);
    //calculation.textContent = result.textContent;
    console.log("equal");
});