var common = {
	init: function() {
		common.main();
	},
	main: function() {
		$('.phone-mask').mask("+38(099)999-99-99");
		 $('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			zoom: {
				enabled: true,
				duration: 300 
			},
			tLoading: 'Загрузка изображения #%curr%...',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1]
			}
		});

		$('.personal-tabs button').click(function(){
			$('.personal-tabs button, .personal-block').removeClass('active');
			var attr = '#' + $(this).attr('data-id');
			var thisItem = $(this);
			setTimeout(function(){
				thisItem.addClass('active');
				$(attr).addClass('active');
			}, 0)
		});

		$('.settings-btn, .addAnnouncement-btn, .href-btn').click(function(e){
			e.preventDefault()
			$('.personal-block').removeClass('active');
			var attr = '#' + $(this).attr('data-id');
			$(attr).addClass('active');
		});

		$('.reg-btn, .sign-in').magnificPopup({
			type:'inline',
			midClick: true 
		});

		$('#reg .select-reg').on('change', function (e) {
			var optionSelected = $("option:selected", this);
			var optionAttr = "#" + optionSelected.attr('data-id');
			$('.reg-form').removeClass('active');
			setTimeout(function(){
				$(optionAttr).addClass('active');
			}, 0)
			
		});


	}
};

(function() {
	common.init();
}());
