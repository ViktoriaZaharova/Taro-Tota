
// accordeon
function accordeon() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').find('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).parent().toggleClass('in').find('.block_hover').slideToggle();
	});
}

accordeon();

$('.js-simple-slider').slick({
	lazyLoad: 'ondemand',
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	adaptiveHeight: true
});

// show list all
$('.btn-toggle-program').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $('.program-details');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть программу');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Развернуть программу');

		content.slideUp();
	}
});
// show list all

$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});