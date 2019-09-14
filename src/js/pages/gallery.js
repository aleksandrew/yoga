import $ from 'jquery';

export default $(() => {
	const grid = $('.grid');
	const gridItem = $('.grid__item');
	let currentItem;

	grid.on( 'click', function(e) {
		if ( !currentItem || !(currentItem.classList.contains('is-expanded')) ) {
			currentItem = $(e.target)[0];
			$(e.target).addClass('is-expanded');
			grid.addClass('is-expanded--grid');
			$('body').addClass('overflow-hidden');
		} else {	
			currentItem.classList.remove('is-expanded');
			grid.removeClass('is-expanded--grid');
			$('body').removeClass('overflow-hidden');
		}
	});
})
