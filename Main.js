function RecipieNamesEqual(x, y) {
    x = x.toLowerCase();
    y = y.toLowerCase();
    x = x.replace(/\s/g, '');
    y = y.replace(/\s/g, '');
    return x.includes(y) || y.includes(x) || x == "" || y == "";
}

function SearchRecipie() {
    let recipies = document.getElementsByClassName("recipies");
    let Input = document.getElementById("Search-Box");
    for (recipie of recipies) {
        if (RecipieNamesEqual(recipie.id, Input.value)) {
            recipie.style.display = "inline-block";
        }
        else {
            recipie.style.display = "none";
        }
    }
}

const duration = document.getElementById("cd-duration").innerHTML * 60;
let ticker;
const duration2 = document.getElementById("cd-duration2").innerHTML * 60;
let ticker2;


function ResetTimer() {
    clearInterval(ticker)
    time = duration / 60;
    document.getElementById("cd-min").innerHTML = time;
    document.getElementById("cd-sec").innerHTML = 0;
}

function ResetTimer2() {
    clearInterval(ticker2)
    time2 = duration2 / 60;
    document.getElementById("cd-min2").innerHTML = time2;
    document.getElementById("cd-sec2").innerHTML = 0;
}

function CookTimer() {
    ResetTimer();
    const duration = document.getElementById("cd-duration").innerHTML * 60;
    let ticker;
    let min = document.getElementById("cd-min");
    let sec = document.getElementById("cd-sec");

    let time = duration;
    let secs = time;
    let mins = Math.floor(secs / 60);
    secs -= mins * 60;

    min.innerHTML = mins;
    sec.innerHTML = (secs == 0 ? "00" : secs);

    ticker = setInterval(function () {
        time--;

        let secs = time;
        let mins = Math.floor(secs / 60);
        secs -= mins * 60;

        min.innerHTML = mins;
        sec.innerHTML = secs;

        if (time <= 0) {
            var audio = new Audio('./Pictures/Timer.wav');
            audio.play();
            ResetTimer();
        }
    }, 1000);
}

function CookTimer2() {
    ResetTimer2();
    const duration2 = document.getElementById("cd-duration2").innerHTML * 60;
    let ticker2;
    let min2 = document.getElementById("cd-min2");
    let sec2 = document.getElementById("cd-sec2");

    let time2 = duration2;
    let secs2 = time2;
    let mins2 = Math.floor(secs2 / 60);
    secs2 -= mins2 * 60;

    min2.innerHTML = mins2;
    sec2.innerHTML = (secs2 == 0 ? "00" : secs2);

    ticker2 = setInterval(function () {
        time2--;

        let secs2 = time2;
        let mins2 = Math.floor(secs2 / 60);
        secs2 -= mins2 * 60;

        min2.innerHTML = mins2;
        sec2.innerHTML = secs2;

        if (time2 <= 0) {
            var audio = new Audio('./Pictures/Timer.wav');
            audio.play();
            ResetTimer();
        }
    }, 1000);
}