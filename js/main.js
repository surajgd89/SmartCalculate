const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const equal = document.getElementById("equal");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const time = document.getElementById("time");
const date = document.getElementById("date");

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
    calculation.textContent = result.textContent;
});


// THEME SWITCH
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


//TIME
var nowdate = new Date();
function currentTime(nowdate) {
    var hours = nowdate.getHours();
    var minutes = nowdate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

//DATE
function currentDate(nowdate) {
    var result = nowdate.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    let todaydate = result.split("/").join("-");
    return todaydate;
}

setInterval(function () {
    let currenttime = currentTime(nowdate);
    let currentdate = currentDate(nowdate);
    time.textContent = currenttime;
    date.textContent = currentdate;
}, 1000)

//LINK Animation
document.querySelectorAll('.link').forEach(link => {
    link.innerHTML = '<div><span>' + link.textContent.trim().split('').join('</span><span>') + '</span></div>'
    link.querySelectorAll('span').forEach(s => s.innerHTML = s.textContent == ' ' ? '&nbsp;' : s.textContent)
    link.insertAdjacentHTML('beforeend', '<div><svg preserveAspectRatio="none" viewBox="0 0 192 5"><path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" /></svg></div>')
});