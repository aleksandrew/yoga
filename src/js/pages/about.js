import $ from 'jquery';

export default $(() => {
	const aboutInfo = $(".about-info");
	const elements = $(".about-info__quote");

	aboutInfo.on('click', function(e) {
		const currentButton = $(e.target);
		const currentSlide = currentButton.closest('.about-info__quote--visible');
		const nextSlide = currentSlide.next();
		const prevSlide = currentSlide.prev();
		
		if ( currentButton.is('#arrowRight')) {
			if ( nextSlide[0] ) {	
				currentSlide.removeClass('about-info__quote--visible');
				nextSlide.addClass('about-info__quote--visible');
			} else {
				currentSlide.removeClass('about-info__quote--visible');
				elements[0].classList.add('about-info__quote--visible');
			}
		}
		
		if ( currentButton.is('#arrowLeft')) {
			if ( prevSlide[0] ) {	
				currentSlide.removeClass('about-info__quote--visible');
				prevSlide.addClass('about-info__quote--visible');
			} else {
				currentSlide.removeClass('about-info__quote--visible');
				elements[elements.length-1].classList.add('about-info__quote--visible');
			}
		}
	})
})
