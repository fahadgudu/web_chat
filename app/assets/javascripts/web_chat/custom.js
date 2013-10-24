$(document).ready(function() { 

	/* for top navigation */
	// ------------------------------------------------------------
	$(" .main-menu ul li ul ").css({display: "none"}); // Opera Fix
	$(" .main-menu ul li").hover(function(){
	$(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn(300);
	},function(){
	$(this).find('ul:first').css({visibility: "visible"}).fadeOut(70);
	});

	/* for testimonial sliding */
	// ------------------------------------------------------------
	$('.testimonial ul').cycle({
        fx: "scrollDown",
        easing: "easeOutCubic",
        speed: 600,
        timeout: 5000
	});
	
	/* for iframe z-index */
	// ------------------------------------------------------------	
	$("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
      else $(this).attr('src',ifr_source+'?'+wmode);
	});
	
	// Tipsy Init
	// ------------------------------------------------------------	
	$(function() {
		$('ul.socialNav li a').tipsy({fade: true, gravity: 's'});
		$('div#contactInformation a').tipsy({fade: true, gravity: 'n'});
		$('.texture li').tipsy({fade: true, gravity: 'n'});
		
	});
	
	// To Top Plugin
	// ------------------------------------------------------------	
	$(function() {
		$().UItoTop({ easingType: 'easeOutQuart' });
	});
	
	// Info Box
	// ------------------------------------------------------------
	$(function() {	
		$(".hideit").click(function() {
			$(this).fadeOut(400);
		});
	});
	
	// Nivo Slider
	// ------------------------------------------------------------
	$('#sliderv').nivoSlider();
	
	// Slide Down Slider
	// ------------------------------------------------------------	
	$(".slide-down-slider").css('opacity', '0'); 
	$(".slide-down-slider").animate({opacity:'1'},{duration:100}); 
	$(".slide-down-slider").hover ( 
	function() { 
		$(this).children(".text_slider").animate({
			bottom:(10-$(this).children(".text_slider").height())+"%"},{queue:false,duration:200}); } ,
		function() { 
		$(this).children(".text_slider").animate({bottom:"20%"},{queue:false,duration:350})			
		; } );
	
	
	// Elastic Image Slideshow
	// ------------------------------------------------------------
	$(function(){
		$('#ei-slider').eislideshow({
				animation			: 'center',
				autoplay			: true,
				slideshow_interval	: 3000,
				titlesFactor		: 0
		});
	});
	
	// Blog Slideshow
	// ------------------------------------------------------------
	$(function(){
      $("#blogSlider").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
	});
	
	// Preloader
	// ------------------------------------------------------------
	$(".image").preloader();
	
	
	// Random Portofolio Widget
	// ------------------------------------------------------------
	$('#rPortofolio').slides({
		preload: true,
		play: 4000,
		pause: 2500,
		hoverPause: true,
		generateNextPrev: false,
		generatePagination: false
	});
	
	// Zebra Table
	// ------------------------------------------------------------
	$(function() {
		$(".basicTable table tbody tr:even").addClass("even");
		$(".basicTable table tbody tr:odd").addClass("odd");
	});
	
	// Lightbox Prettyphoto
	// ------------------------------------------------------------
	$("area[data-rel^='prettyPhoto']").prettyPhoto();
			
	$(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'default',slideshow:3000, autoplay_slideshow: true});
	$(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

	$(".image:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:10000, hideflash: true});
	$(".image:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:10000, hideflash: true});
	
	$('a[data-rel]').each(function() {
    $(this).attr('rel', $(this).data('rel'));
	});
	
	// Pre tags
	// ------------------------------------------------------------	
	
	$('.showCode').sourcerer('js html css php'); // Display all languages
	$('.showCodeJS').sourcerer('js'); // Display JS only
	$('.showCodeHTML').sourcerer('html'); // Display HTML only
	$('.showCodePHP').sourcerer('php'); // Display PHP only
	$('.showCodeCSS').sourcerer('css'); // Display CSS only
	
	// Auto fit width video
	// ------------------------------------------------------------
	$(window).resize(function(){
        $("iframe").css({
                width: "100%"
        });
    });
    
    $(window).resize();

	// Responsive Menu
	// ------------------------------------------------------------	
	// Create the dropdown base
	jQuery("<select />").appendTo(".main-menu");
	
	// Create default option "Go to..."
	jQuery("<option />", {
	 "selected": "selected",
	 "value"   : "",
	 "text"    : "Menu Selection..."
	}).appendTo(".main-menu select");
	
	// Populate dropdown with menu items
	jQuery(".main-menu ul a").each(function() {
	var el = jQuery(this);
	jQuery("<option />", {
	   "value"   : el.attr("href"),
	   "text"    : el.text()
	}).appendTo(".main-menu select");
	});
	
	// To make dropdown actually work
	// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
	jQuery(".main-menu select").change(function() {
	window.location = jQuery(this).find("option:selected").val();
	});

	
	
})(jQuery);
