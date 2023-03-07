//Parallax
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerOne img').css({
    width: (100 + scroll/10) + '%',
    top: (0 + scroll * -0.1) + 'px'
  })
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerTwo img').css({
    width: (100 + scroll/40) + '%',
    top: (0 + scroll * -0.1) + 'px'
  })
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerThree img').css({
    width: (100 + scroll/60) + '%',
    top: (0 + scroll * -0.05) + 'px'
  })
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerFour img').css({
    width: (100 + scroll/70) + '%',
    top: (0 + scroll * -0.04) + 'px'
  })
})


//Navbar Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});


//Music
function music() {
  let audio = new Audio("/media/aironthegstring.mp3");
  audio.play()
}

music();


//Preloader
function fadeOut() {

document.querySelector("#biggestDiv").style.display = "none";

};




function loadingScreen() {

  function startTimer(duration, display) {
      var count = duration;
      setInterval(function () {
          display.textContent = count;
          if (count == 100) {
              fadeOut();
              return;
            }
          ++count
      }, 10);

  };
  
  asdf = function () {
      var fiveMinutes = 0,
          display = document.querySelector('#percentNumber');
      startTimer(fiveMinutes, display);
  };
  
  asdf()

  
}



loadingScreen()