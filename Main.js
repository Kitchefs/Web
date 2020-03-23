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

function ResetTimer() {
    clearInterval(ticker)
    time = duration;
    document.getElementById("cd-min").innerHTML = time;
    document.getElementById("cd-sec").innerHTML = 0;
}

function CookTimer() {
    ResetTimer();

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
            // Sound here
            ResetTimer();
        }
    }, 1000);
}