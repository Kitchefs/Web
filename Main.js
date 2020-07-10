var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function RecipeNamesEqual(x, y) {
    x = x.toLowerCase();
    y = y.toLowerCase();
    x = x.replace(/\s/g, '');
    y = y.replace(/\s/g, '');
    return x.includes(y) || y.includes(x) || x == "" || y == "";
}

function RandRecipe() {
    // Hide all recipes
    let recipies = document.getElementsByClassName("recipies");
    for (recipie of recipies) {
        recipie.style.display = "none";
    }

    // Show one randomly selected recipe
    let selected = Math.floor(Math.random() * recipies.length);
    recipies.item(selected).style.display = "inline-block";
}

function BackRecipe() {
    let recipies = document.getElementsByClassName("recipies");
    for (recipie of recipies) {
        recipie.style.display = "inline-block";
    }
}

function SearchRecipe() {
    let recipies = document.getElementsByClassName("recipies");
    let Input = document.getElementById("Search-Box");
    for (recipie of recipies) {
        if (RecipeNamesEqual(recipie.id, Input.value)) {
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

function enableNoSleep() {
  noSleep.enable();
  document.removeEventListener('touchstart', enableNoSleep, false);
}

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
            soundEffect.play();
            return;
        }
    }, 1000);
}


