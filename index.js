$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}
		else{
			$('.scroll-up-btn').removeClass("show");
		}
	});
	//slide up
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	var typed = new Typed('.typing', {
  	// Waits 1000ms after typing "First"
  	strings: ['Web^1000 Developer.', 'Chemist.', 'Freelancer.'],
  	smartBackspace: true,
  	loop: true,
  	typeSpeed: 100,
	});
	var typed = new Typed('.typing-2', {
  	// Waits 1000ms after typing "First"
  	strings: ['Web^1000 Developer.', 'Chemist.', 'Freelancer.'],
  	smartBackspace: true,
  	loop: true,
  	typeSpeed: 100,
	});
	
	$('.service-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });
});