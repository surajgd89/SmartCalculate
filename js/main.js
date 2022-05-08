const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const equal = document.getElementById("equal");
const light = document.getElementById("light");
const dark = document.getElementById("dark");

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

light.addEventListener("click", function () {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    dark.classList.remove('active')
    light.classList.add('active')
});

dark.addEventListener("click", function (e) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    light.classList.remove('active')
    dark.classList.add('active')
});

if (document.body.classList.contains('light')) {
    console.log('hii');
    dark.classList.remove('active')
    light.classList.add('active')
} else {
    light.classList.remove('active')
    dark.classList.add('active')
}