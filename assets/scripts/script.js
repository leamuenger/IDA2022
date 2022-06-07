//TOGGLE OPEN CLOSE
$(".toggle").click(function () {
    $(this).toggleClass("active");
    $(".full-screen-nav").toggleClass("open-nav");
  });
  
  let toggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");
  toggle.onclick = function () {
    menu.classList.toggle("active");
  };
  
  //LOADER START
  window.addEventListener("load", function() {
    var preload = function(){
      const loader = document.querySelector(".loader");
      loader.className += " hidden";
    };
    setTimeout(function() { preload(); }, 1200);
  });
  