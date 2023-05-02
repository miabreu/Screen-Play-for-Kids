

// slick services slider //
$(document).ready(function(){
    $('.carousel').slick({
    rows: 2,
    slidesToShow: 5,
    slidesToScroll: 3,
    mobileFirst:true,
    dots: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1040, 
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
    
      }
  }, {
      breakpoint: 1020, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
    }
  }, {
      breakpoint: 600, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
      }, {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
  }]
});
});


// services expanding boxes //

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// slick testimonials slider//
type="text/javascript">
$(document).ready(function(){
  $('.your-class').slick({
    setting: setting-value
  });
});

var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
var i = (currentSlide ? currentSlide : 0) + 1;
$st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
centerMode: true,
centerPadding: '200px',
slidesToShow: 1,
focusOnSelect: true,
dots: false,
infinite: true,
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
]
});
