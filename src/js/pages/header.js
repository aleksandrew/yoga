import $ from 'jquery';

export default $(() => {
	console.log("123")
	$("#hamburgerMenu").on('click', function() {
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('nav--active');
	})
})
