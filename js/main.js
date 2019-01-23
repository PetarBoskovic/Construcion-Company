// tabs
$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
// hamburger
$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('activated')
    })
})

// hamburger nav toggle

$(document).ready(function() {
  var hamburger = $('.hamburger');
  var nav		= $('.hb-nav > ul');
  
  $(hamburger).on('click', function(e) {
    e.preventDefault();
    nav.slideToggle()
  });	
    
  $(window).resize(function(){
    var width = $(window).width();
    if(width > 550 && nav.is(':visible')) {
      nav.removeAttr('style');
    }
    if(width > 550 && nav.is(':hidden')){
    	nav.removeAttr('style');
    }	
  });
});