
$(document).ready(function() {
  // import 'css-doodle';
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // click event om toggle menu
  $toggleCollapse.click(function(event) {
    $nav.toggleClass('collapse');
  });

  $(window).resize(function() {
    if ($(window).width() > 750) {
      $nav.removeClass('collapse');
    }
  });

//   function typeEffect(element, speed) {
// 	var text = element.innerHTML;
// 	element.innerHTML = "";
//
// 	var i = 0;
// 	var timer = setInterval(function() {
//     if (i < text.length) {
//       element.append(text.charAt(i));
//       i++;
//     } else {
//       clearInterval(timer);
//     }
//   }, speed);
// }


  // application
  // var speed = 50;
  // var h1 = document.querySelector('h1');
  // var p = document.querySelector('p');
  // var delay = h1.innerHTML.length * speed + speed;

  // type affect to header
  // typeEffect(h1, speed);


  // owl-carousel for blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsiveClass:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        320: {
            items: 1
        },
        550:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }}
  });

  // click to scroll up
  $('.move-up span').click(function() {
    $('html,body').animate({
      scrollTop:0
    }, 1000)
  });

  // AOS instance
  AOS.init()

});
