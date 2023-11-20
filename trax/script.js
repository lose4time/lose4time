 var clicks = 0; // change int to var here
 var clicks_up=0;
    function countClicks(path) {
        clicks += 0.5;
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
         document.getElementById("clicks").innerHTML = clicks;
      }, 1000);

function startCounting() {
 if (clicks>=100) {
    clicks_up+=0.5;
     clicks-=100;
    document.getElementById("clicks").innerHTML = clicks;
document.getElementById("clicks_up").innerHTML = clicks_up;
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

     


