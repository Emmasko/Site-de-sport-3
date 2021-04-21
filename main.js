// Wrap every letter in a span
let textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1750,
    delay: (el, i) => 150 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });