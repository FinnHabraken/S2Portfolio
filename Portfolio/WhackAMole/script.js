var rng = 1;
var points = 0;
function createGrid(){
    rng = Math.floor(Math.random() * 26);
    while(rng == 0){
        rng = Math.floor(Math.random() * 26);
    }

    for(i = 1; i <= 25; i++){
        spot = document.createElement("BUTTON");
        spot.innerHTML = i;
        spot.className = "spots";
        spot.id = i;
        document.getElementById("grid").appendChild(spot);
    }

    document.getElementById("1").classList.add("activeSpot");
    document.getElementById("1").onclick = function(){changeGrid()};
}

function changeGrid(){
    document.getElementById("1").classList.remove("activeSpot");
    var currentSpot = document.getElementById(rng.toString());
    currentSpot.classList.remove("activeSpot");
    currentSpot.onclick = null;
    rng = Math.floor(Math.random() * 25 + 1);
    var newSpot = document.getElementById(rng);
    newSpot.classList.add("activeSpot");
    newSpot.onclick = function(){changeGrid()};

    points++;
    document.getElementById("points").innerHTML = "Points:" + points;
}