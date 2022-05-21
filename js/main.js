var anhs = [];
for (var i = 0 ; i < 3; i++) {
    anhs[i] = new Image();
    anhs[i].src = "./images/slide"+ i +".jpg";
}
var slideIndex = 0;
function prev() {
    slideIndex--;
    if(slideIndex < 0) {
        slideIndex = anhs.length - 1;
    }
    var anh = document.getElementById("anh");
    anh.src = anhs[slideIndex].src;
}
function next() {
    slideIndex++;
    if(slideIndex > anhs.length) {
        slideIndex = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = anhs[slideIndex].src;
}