$(document).ready(function(){
	// ====mobile menu 
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	})

	// banner owlCarousel
	$('.banner-owl').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'], 
	}) 

	// saller owlCarousel
	$('.saller-owl').owlCarousel({
		items:4,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'], 
		margin:30,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:3
			}
		}
	}) 

	// products owlCarousel
	$('.products-owl').owlCarousel({
		items:3,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'], 
		margin:30,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:3
			} 	 
		}
	}) 

	// news owlCarousel
	$('.news-owl').owlCarousel({
		items:3,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true, 
		margin:30,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:3
			} 	 
		}
	}) 

	// testimonials-two owlCarousel
	$('.testimonials-two').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true, 
		margin:30,
	}) 

	// news owlCarousel
	$('.testimonials-owl').owlCarousel({
		items:5,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'], 
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			}, 
			767:{
				items:3
			}, 
			991:{
				items:4
			}, 
		} 
	}) 

		// saller magnificPopup
	 $('.saller-eye a').magnificPopup({type:'image'});

	 // mixitup
		var mixer = mixitup('.saller_mixi'); 
		var mixer = mixitup(saller_mixi, {
		    animation: {
	        nudge: false
	    }
	});
})