
var clicks = 0;
var clicks_up = 0;
  clicks = parseFloat(localStorage.getItem("clicks") || 0);
clicks_up = parseFloat(localStorage.getItem("clicks_up") || 0);


    function countClicks(path) {
        clicks += parseFloat(0.5);
        document.getElementById("clicks").innerHTML = clicks;
         var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'ebu.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
         let image = document.getElementById('image');
      image.src = path;
    };

function whistel(){
     if (clicks>=300) {
     window.open('https://www.youtube.com/watch?v=BbeeuzU5Qc8', '_blank');
         clicks-=300;
     }
    else {
         var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'false.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
        alert('Долбаеб, посмотри, сколько у тебя')
    }
}
function boss(){
     if (clicks>=500) {
     window.open('https://t.me/+67m3XDgc1r40ZjUy', '_blank');
         clicks-=500;
     }
    else {
         var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'false.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
        alert('Долбаеб, посмотри, сколько у тебя')
    }
}

function soundClick() {
    if (clicks>=20) {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'ston.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
        clicks-=20;
        document.getElementById("clicks").innerHTML = clicks;
    }
    else {
         var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'false.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
        alert('Долбаеб, посмотри, сколько у тебя')
    }
}

setInterval(function() {

       clicks += clicks_up;
       // localStorage.clicks = clicks;
      //  localStorage.clicks_up = clicks_up;
         document.getElementById("clicks").innerHTML = clicks;
         document.getElementById("clicks_up").innerHTML = clicks_up;
    
      }, 1000);


function startCounting() {
 if (clicks>=100) {
    clicks_up+=0.5;
     clicks-=100;
    document.getElementById("clicks").innerHTML = localStorage.clicks;
document.getElementById("clicks_up").innerHTML = parseFloat(clicks_up);
 }
 else {
         var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'false.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
        alert('Долбаеб, посмотри, сколько у тебя')
 }
}


let animation = anime({
  targets: '.letter',
  opacity: 1,
  translateY: 50, 
  rotate: {
    value: 360,
    duration: 2000,
    easing: 'easeInExpo'
  }, 
  scale: anime.stagger([0.7, 1], {from: 'center'}), 
  delay: anime.stagger(100, {start: 1000}), 
 
});   


function saveGame() {
    
  localStorage.setItem("clicks", clicks);
    localStorage.setItem("clicks_up", clicks_up);
  
}
setInterval(saveGame, 1000)
     


