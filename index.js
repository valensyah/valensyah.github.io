$(function(){
  $('.page-scroll').click(function(){
    var href = $(this).attr('href');
    var elemenHref = $(href);

    $("html").animate({
      scrollTop: elemenHref.offset().top
    },500, "swing");
  });
});
