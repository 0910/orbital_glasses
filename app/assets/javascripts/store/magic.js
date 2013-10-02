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

  // -------------------------
  // Mostrar / ocultar productos por filtros
  // -------------------------
  taxon = [];
  $('input[type=checkbox]').change(function(){
    taxName = $(this).attr('name').toLowerCase();      
    if($(this).attr('checked')){
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        taxon.push(taxNameJoin);        
        filterProducts(taxon);
      }else{
        taxon.push(taxName);
        filterProducts(taxon);
      };
    }else{
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        taxon = $.grep(taxon, function(value) {
          return value != taxNameJoin;
        });
        filterProducts(taxon);
      }else{
        taxon = $.grep(taxon, function(value) {
          return value != taxName;
        });
        filterProducts(taxon);        
      };
    }
  });
  // -------------------------
  // End filtro productos
  // -------------------------

});

$(window).load(function () {
  $('#notice, #flash_success, #flash_notice').delay(3000).slideUp(200);
});


function filterProducts(taxon){
  if(taxon.length == 0){
    $('.product').fadeIn(500);
  }else{
    $('.product').hide();
    var taxons = taxon.length;
    $('.product').each(function(){
      productTaxons = 0;
      for ( var i = 0; i < taxon.length; i = i + 1 ) {
        if($(this).find('p.taxons').text().match(taxon[i])){
          productTaxons++;
        };
        if(productTaxons==taxons){
          $(this).fadeIn(500);
        }
      };

    })    
  }
}
