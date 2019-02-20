
var num = 0;
// var img = [
//     '<img src="bs.jpg">', '<img src="p.jpg">', '<img src="bs4.jpg">'
// ]
var x = document.getElementById("img-box");

var files = ['bs.jpg', 'bs3.jpg', 'bs4.jpg'];
var myImg = document.getElementById("myImg");

var carouselcounter = 0;

function carousel() {
    console.log("Calling carousel: " + num + " img #" + carouselcounter);
    num++;
    //x.innerHTML = img[carouselcounter];
    // console.log(img[carouselcounter]);
    console.log(files[carouselcounter]);
    myImg.src = files[carouselcounter];

    carouselcounter++;
    if (carouselcounter == 3)
        carouselcounter = 0;
}
var myVar = setInterval(carousel, 2000);
myVar;



//carouselcounter = (carouselcounter + 1) mod 3