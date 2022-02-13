document.addEventListener('DOMContentLoaded',function(event){
    
  // var slides = document.getElementsByClassName("school");
  var buttons = document.getElementsByClassName("carousel-button")
  // if ()
  buttons.item(0).disabled = true;


    // array with texts to type in typewriter
    var dataText = [ "Software Engineer.", 
    "Front-end Development.", "Web Development.", "Data Science.", "Data Engineer."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#header h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 900);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
        if (i == 4){
            i = 0;
        }
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
    
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

var slideIndex = 0;
// Next/previous controls
function plusSlides(n) {
  var slides = document.getElementsByClassName("school");
  slides[slideIndex + n].classList.add('active')
  slides[slideIndex].classList.remove('active')
  var buttons = document.getElementsByClassName("carousel-button")
  // console.log(slideIndex)
  slideIndex = slideIndex + n;
  if (slideIndex == 0){
    buttons.item(0).disabled = true
  }
  else if (slideIndex == 2){
    buttons.item(1).disabled = true
  }
  else{
    buttons.item(0).disabled = false;
    buttons.item(1).disabled = false;
  }
  
}

var popContainer = document.getElementsByClassName("popup-container")
var activeModal;
function clickModal(item) {
  // console.log(popContainer)
  popContainer[0].classList.add('active')
  var projects = document.getElementsByClassName("pop")
  projects[item - 1].classList.add('active')
  activeModal = projects[item - 1]
  // console.log(projects[item - 1])
}

window.onmousedown = function(event) {
  if (event.target == popContainer[0]) {
    popContainer[0].classList.remove('active')
    activeModal.classList.remove('active')
  }
}
