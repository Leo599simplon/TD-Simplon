// test animation
var bouncingBall = anime({
  targets: '.test',
  translateY: '50vh',
  duration: 300,
  loop: true,
  direction: 'alternate',
  easing: 'easeInCubic'
});

// Test kick
var kickBall = anime({
  targets: '.kick',
  scale: 1.2,
  duration: 300,
  delay: 100,
  easing: 'easeInCubic',
  autoplay: false
});

//Test Ballon
var movingBall = anime({
  targets: '.ball',
  translateX: '70vw',
  scale: 1.5,
  easing: 'easeOutBounce',
  delay: kickBall.duration + 100,
  autoplay: false
});

/* bouton play */

var btnPlay = document.querySelector('.play')
btnPlay.addEventListener('click', function(e) {
  e.preventDefault();
  kickBall.play();
  movingBall.play();
});

