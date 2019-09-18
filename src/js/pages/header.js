import $ from 'jquery';

export default $(() => {
	$("#hamburgerMenu").on('click', function() {
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('nav--active');
		$('body').toggleClass('overflow-hidden');
	})
	
	$('#nav').on('click', function(e){
		if ( e.target.classList.contains('menu-item__link')) {
			$('.menu-item__link--active').removeClass('menu-item__link--active');
			$(e.target).addClass('menu-item__link--active');
			
			const currentId = $(e.target).attr('href');
			$('html,body').stop().animate({ scrollTop: $(currentId).offset().top }, 1000);
			e.preventDefault();
			
			$("#hamburgerMenu").removeClass('is-active');
			$('.nav').removeClass('nav--active');
			$('body').removeClass('overflow-hidden');
		}
	});
})
