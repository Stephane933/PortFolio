'use strict';

$(document).ready(function() {
  $('.slide1').Parallax("center", 0, 0.1, true);
});

$(document).ready(function(){
  $(".slide2").Parallax("center", 0,0.2, true)
})

/*******Test scrollfire Js native********/

const trigger = document.querySelector('.slide1');
const triggerPosition = trigger.offsetTop;
const text = document.querySelectorAll('.txtDescription');
const textEntries = text.entries();

console.log(text);

function initElement() {
  var desc = document.getElementById("desc");
  desc.onclick = jumpToDesc();
};

window.onscroll = function() {
  if (window.scrollY >= triggerPosition) {
    text.forEach(function(e) {
      let i = 0;
      if (textEntries.next().value[i] % 2 === 0) {
        e.className = 'txtDescription animated bounceInLeft';
      } else {
        e.className = 'txtDescription animated bounceInRight';
      }
      i++;

    });
  }
}
/**************************************************************/
