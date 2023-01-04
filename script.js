window.addEventListener('load', function () {
  this.document.querySelector('svg').style.display = 'block';
});
let paths = document.querySelectorAll('path');
fillSvgPaths();
document.addEventListener('scroll', fillSvgPaths);
function fillSvgPaths() {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    let drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
  }
}
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 400) {
      $('.scroll-up').addClass('show');
      $('.navbar .menu').removeClass('active');
      $('.menu-btn i').removeClass('active');
    } else {
      $('.scroll-up').removeClass('show');
    }
  });
});
$(window).scroll(function () {
  if (this.scrollY > 1000) {
    $('.project').addClass('show');
  } else {
    $('.project').removeClass('show');
  }
});
$('.scroll-up').click(function () {
  $('html').animate({ scrollTop: 0 });
  $('html').css('scrollBehavior', 'auto');
});

$('.navbar .menu li a').click(function () {
  $('html').css('scrollBehavior', 'smooth');
});
$('.menu-btn').click(function () {
  $('.navbar .menu').toggleClass('active');
  $('.menu-btn i').toggleClass('active');
});
