import $ from 'jquery';

export default $(() => {
	$("#hamburgerMenu").on('click', function() {
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('nav--active');
	})
})
