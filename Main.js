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

function Timer25() {
    var counter = {};
    window.addEventListener("load", function () {

        counter.end = 1500;

        counter.min = document.getElementById("cd-min");
        counter.sec = document.getElementById("cd-sec");

        if (counter.end > 0) {
            counter.ticker = setInterval(function () {
                counter.end--;
                if (counter.end <= 0) {
                    clearInterval(counter.ticker);
                    counter.end = 0;
                }

                var secs = counter.end;
                var mins = Math.floor(secs / 60);
                secs -= mins * 60;

                counter.min.innerHTML = mins;
                counter.sec.innerHTML = secs;
            }, 1000);
        }
    });
}