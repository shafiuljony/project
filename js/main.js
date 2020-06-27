(function ($) {
    "use strict";
  
    
  
  
  
      
     
  
  // main slider
  
   $('.slider-active').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      
      responsive:{
          0:{
              items:1,
              nav:false
          },
  
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  }); 

  //isotop
  $('.gallery-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.gallery-menu ul li').click(function(){
      $('.gallery-menu ul li').removeclass('active');
      $(this).addclass('active');

      var selector = $(this).attr('data-filter');
      $('.gallery-item').isotope({
          filter: selector
      });
      return false;
   } );
  
  
  
  
  
   
   
 




  }(jQuery)); 
  
