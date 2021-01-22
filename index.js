$( document ).ready( function($) {
    $( window ).scroll( function () {
      if ( $(document).scrollTop() > 150 ) {
        // Navigation Bar
        $('.navbar').removeClass('animate__animated animate__fadeIn');
        $('.navbar').addClass('animate__animated animate__fadeInDown bg-light fixed-top');
        $('.navbar-nav').addClass('nav-align');
      } else {
        $('.navbar').removeClass('animate__animated animate__fadeInDown fixed-top bg-light');
        $('.navbar').addClass('animate__animated animate__fadeIn');
      }
    });
  
  });

  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-spy'
  })
