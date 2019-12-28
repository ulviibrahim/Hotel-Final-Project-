$(document).ready(function () {

 
    $("#homeslide .owl-carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
    });

    $('#CardRooms .owl-theme').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })
  $("#Testimonials .owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });

  $('.Information li').click(function(){
    $('.Information li').toggleClass("changed")
   console.log("test")
  //  .css({
    //   "content": "\f068",
    //   "font-family": "Font Awesome 5 Free",
    //   "font-weight": 900

    
  })

    $(window).scroll(function(e){
      var scrollTop = $(window).scrollTop();
   if(scrollTop>92){
      $("#header").addClass("fixed-top")
      $("#header").addClass("fadeIn")
 


    }else{
      $("#header").removeClass("fixed-top")
      $("#header").removeClass("fadeIn")


    }

    })
   
  
  
    


//   $("#lightSlider").lightSlider({
//     item: 1,
//     autoWidth: false,
//     slideMove: 1, // slidemove will be 1 if loop is true
//     slideMargin: 10,
//   });
// });

// $(".fade").slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
});

