var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-100px";
  }

  prevScrollpos = currentScrollpos;
};
