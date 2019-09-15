import $ from 'jquery';

export default $(() => {
	const quote = $(".about-info__quote");
	const arrowLeft = $("#arrowLeft");
	const arrowRight = $("#arrowRight");

	// console.log(arrowLeft)
	// console.log(arrowRight)

	arrowRight.on('click', function() {
		const currentSlide = $('.about-info__quote--visible');
		const nextSlide = currentSlide.next();
		
		// console.log(nextSlide[0]);
		
		if ( nextSlide[0] ) {	
			currentSlide.removeClass('about-info__quote--visible');
			nextSlide.addClass('about-info__quote--visible');
		}
	})

	arrowLeft.on('click', function() {
		const currentSlide = $('.about-info__quote--visible');
		const prevSlide = currentSlide.prev();
		
		// console.log(nextSlide[0]);
		
		if ( prevSlide[0] ) {	
			currentSlide.removeClass('about-info__quote--visible');
			prevSlide.addClass('about-info__quote--visible');
		}
	})
})
