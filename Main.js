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

const soundEffect = new Audio();
let duration = document.getElementById("cd-duration").innerHTML * 60;
let ticker;

function ResetTimer() {
    document.getElementById("cd-min").innerHTML = 0;
    document.getElementById("cd-sec").innerHTML = 0;
    duration = document.getElementById("cd-duration").innerHTML * 60;
    clearInterval(ticker)
}

function CookTimer() {
    soundEffect.src = './Pictures/Timer.mp3';
    soundEffect.play();
    soundEffect.pause();
    ResetTimer();

    let time = duration;
    let min = document.getElementById("cd-min");
    let sec = document.getElementById("cd-sec");
    let secs = time;
    let mins = Math.floor(secs / 60);
    secs -= mins * 60;

    min.innerHTML = mins;
    sec.innerHTML = secs;

    ticker = setInterval(function () {
        time--;

        let secs = time;
        let mins = Math.floor(secs / 60);
        secs -= mins * 60;

        min.innerHTML = mins;
        sec.innerHTML = secs;

        if (time <= 0) {
            soundEffect.play();
            ResetTimer();
            return;
        }
    }, 1000);
}

