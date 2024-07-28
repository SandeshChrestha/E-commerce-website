function changeColor(element){
    element.style.color="white";
}
function restoreTextColor(element){
    element.style.color="white";
}
function changeTextColor(element){
    element.style.color="#ff523b";
}
function restoreColor(element){
    element.style.color="black"
}

function changeBackgroundColor() {
    var body = document.querySelector('body');
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  }


var images = ['/a.jpeg', '/b.jpeg', '/c.jpeg', '/d.jpeg', '/f.jpeg'];

var x = 0;
var imgs = document.getElementById('img');
//The setInterval() calls a function at theintervals (in milliseconds). 
setInterval(slider, 3000);

function slider() {

  if (x < images.length) 
    {
    x = x + 1;
    } 

  else 
    {
    x = 1;
    }


  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}

