$(function(){
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
    slideMargin: 0
  });
  $('#filters').click(function(event){
    event.preventDefault();
    $('.treemenu').slideToggle();
  });
  $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
  $('.variant a').tooltip();
  /*$('.twitterfeed').tweet({
    modpath: '/assets/store/',
    count: 5,
    username: "emadobao",
    join_text: "auto",
    avatar_size: 48,
    retweets: true,
    auto_join_text_default: "", 
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "Loading <a href=\"http://twitter.com/rolle\">my</a> Cargando Tweets...",
    template: '<div class="the-tweet">{text} {time} <a class="link" target="_blank" href="https://twitter.com/LaliMusica"></a></div>'
  });*/
});
$(window).load(function () {
  $('#notice, #flash_success, #flash_notice').delay(3000).slideUp(200);
});