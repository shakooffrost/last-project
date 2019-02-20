function date1() {
    if (document.getElementById("demo")) {
        var d = new Date();
        document.getElementById("demo").innerHTML = d;
    }

}
date1()

var cap = document.getElementById('cap');
var capForward = true;

function capStar() {
    if (cap.offsetLeft >= document.body.offsetWidth - cap.offsetHeight) {
        capForward = false;
    }

    if (cap.offsetLeft <= 0) {
        capForward = true;
    }

    if (capForward) {
        cap.style.transform = 'scaleX(+1)'; //changes direction

        cap.style.left = cap.offsetLeft + 2 + "px";
    } else {
        cap.style.transform = 'scaleX(-1)';//changes direction
        cap.style.top = capForward + 'px';

        cap.style.left = cap.offsetLeft - 2 + "px";


    }
}
var capTimer = setInterval(capStar, 50);




