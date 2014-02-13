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

  /*$('.twitterfeed').tweet({
    modpath: '/assets/store/',
    count: 5,
    username: "orbitalvirtual",
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
  genero = [];
  estilo = [];
  material = [];
  calibre = [];
  $('#genero input[type=checkbox]').change(function(){
    taxName = $(this).attr('name').toLowerCase();      
    if($(this).attr('checked')){
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        genero.push(taxNameJoin);  
        filterProducts();
      }else{
        genero.push(taxName);
        filterProducts();
      };
    }else{
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        genero = $.grep(genero, function(value) {
          return value != taxNameJoin;
        });
        filterProducts();
      }else{
        genero = $.grep(genero, function(value) {
          return value != taxName;
        });
        filterProducts();
      };
    }
  });
  $('#estilo input[type=checkbox]').change(function(){
    taxName = $(this).attr('name').toLowerCase();      
    if($(this).attr('checked')){
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        estilo.push(taxNameJoin);  
        filterProducts();
      }else{
        estilo.push(taxName);
        filterProducts();
      };
    }else{
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        estilo = $.grep(estilo, function(value) {
          return value != taxNameJoin;
        });
        filterProducts();
      }else{
        estilo = $.grep(estilo, function(value) {
          return value != taxName;
        });
        filterProducts();
      };
    }
  });
  $('#material input[type=checkbox]').change(function(){
    taxName = $(this).attr('name').toLowerCase();      
    if($(this).attr('checked')){
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        material.push(taxNameJoin);  
        filterProducts();
      }else{
        material.push(taxName);
        filterProducts();
      };
    }else{
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        material = $.grep(material, function(value) {
          return value != taxNameJoin;
        });
        filterProducts();
      }else{
        material = $.grep(material, function(value) {
          return value != taxName;
        });
        filterProducts();
      };
    }
  });
  $('#calibre input[type=checkbox]').change(function(){
    taxName = $(this).attr('name').toLowerCase();      
    if($(this).attr('checked')){
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        calibre.push(taxNameJoin);  
        filterProducts();
      }else{
        calibre.push(taxName);
        filterProducts();
      };
    }else{
      if(taxName.indexOf(' ') >= 0) {
        taxNameJoin = taxName.split(' ').join('-');
        calibre = $.grep(calibre, function(value) {
          return value != taxNameJoin;
        });
        filterProducts();
      }else{
        calibre = $.grep(calibre, function(value) {
          return value != taxName;
        });
        filterProducts();
      };
    }
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

function filterProducts(){

  taxons = 0;
  var checked_genero = $('#genero input[type="checkbox"]:checked').length;
  var checked_estilo = $('#estilo input[type="checkbox"]:checked').length;
  var checked_material = $('#material input[type="checkbox"]:checked').length;
  var checked_calibre = $('#calibre input[type="checkbox"]:checked').length;
  if (checked_genero > 0){ taxons++; }
  if (checked_estilo > 0){ taxons++; }
  if (checked_material > 0){ taxons++; }
  if (checked_calibre > 0){ taxons++; }

  // If No Filter Checked
  if (taxons == 0) {
    $('.product').fadeIn(500); //show all products
  } 
  // If Filter Checked
  else {
    $('.product').hide();
    productTaxons = 0; //set default to 0
    
    //check taxon Genero
    $('.product').each(function(){
      for ( var i_a = 0; i_a < genero.length; i_a = i_a + 1 ) {
        if($(this).find('p.taxons').text().match(genero[i_a])){
          productTaxons++;
          console.log('genero ok');
        }
      };
      for ( var i_b = 0; i_b < estilo.length; i_b = i_b + 1 ) {
        if($(this).find('p.taxons').text().match(estilo[i_b])){
          productTaxons++;
          console.log('estilo ok');
        }
      };
      for ( var i_c = 0; i_c < material.length; i_c = i_c + 1 ) {
        if($(this).find('p.taxons').text().match(material[i_c])){
          productTaxons++;
          console.log('material ok');
        }
      };
      for ( var i_d = 0; i_d < calibre.length; i_d = i_d + 1 ) {
        if($(this).find('p.taxons').text().match(calibre[i_d])){
          productTaxons++;
          console.log('calibre ok');
        }
      };
      if(productTaxons==taxons){
        $(this).fadeIn(500);
      }
    });
  }
}

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
