$(function(){
  $('.trends__slider').slick({
    infinite: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 900,
      settings: "unslick"
    }] 
  });
  
});

$(window).resize(function(){
    let $windowWidth = $(window).width();
    if ($windowWidth > 900) {
      $('.trends__slider').slick({
         slidesToShow: 3,
      });
    }
});

document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;
  
  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open') ;
  }

}