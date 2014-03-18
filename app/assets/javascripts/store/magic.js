$(function(){
  // Initialize checkboxFilter code
          
  checkboxFilter.init();
      
  // Instantiate MixItUp
      
  $('#productmix').mixItUp({
    controls: {
      enable: false // we won't be needing these
    },
    animation: {
      easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
      duration: 600
    }
  });
    
  $('a.box').hover(function(){
    $(this).find('.over').fadeIn();
    $(this).find('h1').stop().animate({"top": 0},{duration:500, easing:'swing'});
    $(this).find('p').stop().animate({"top": 0},{duration:500, easing:'swing'});
  }, function(){
    $(this).find('h1').stop().animate({"top": 300},{duration:200, easing:'swing'});
    $(this).find('p').stop().animate({"top": 300},{duration:200, easing:'swing'});
    $(this).find('.over').fadeOut();
  });
  $('.coleccionbot a').click(function(event){
    event.preventDefault();
    $('.coleccionnav').slideToggle();
  });
  $('.bxslider').bxSlider({
    slideWidth: 960,
    minSlides: 1,
    maxSlides: 5,
    auto: true,
    slideMargin: 0
  });
  $('a.cloud-zoom').click(function(event){
    event.preventDefault();
  });
  $('.bx-wrapper').hover(function(){
    $(this).find('.bx-controls-direction').fadeIn();
  }, function(){
    $(this).find('.bx-controls-direction').fadeOut();
  });
  $('#filters').click(function(event){
    event.preventDefault();
    $('.treemenu').slideToggle();
  });
  $('.backtocat').click(function(event){
    event.preventDefault();
    window.history.back();
  });
  $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
  $('.variant a').tooltip();
  $('#gototop').click(function(event){
    event.preventDefault();
    $('body').stop().animate({"top": 0},{duration:500, easing:'swing'});
    var body = $("html, body");
    body.animate({scrollTop:0}, '500', 'swing');
  });

  // -------------------------
  // End filtro productos
  // -------------------------


  $('.variants a').click(function(e){
    e.preventDefault();
    $('.prodphoto #wrap').fadeOut(100);
    $('.prodphoto #wrap:nth-child('+$(this).attr('class')+')').fadeIn(200);
    //alert($(this).attr('class'));
  })

  var urlParams;


});

$(window).load(function () {
  $('#notice, #flash_success, #flash_notice').delay(3000).slideUp(200);
});


(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
