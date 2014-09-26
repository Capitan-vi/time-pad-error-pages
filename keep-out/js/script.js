 $(window).load(function(){
		$('.strip_high').liMarquee();
	 
		(function ($) {
			var methods = {
				init: function (options) {
					var $('.strip_high') = {
						direction: 'left', //Указывает направление движения содержимого контейнера (left | right | up | down)
						loop: -1, //Задает, сколько раз будет прокручиваться содержимое. "-1" для бесконечного воспроизведения движения
						scrolldelay: 0, //Величина задержки в миллисекундах между движениями
						scrollamount: 50, //Скорость движения контента (px/sec)
						circular: true, //Если "true" - строка непрерывная 
						drag: true, //Если "true" - включено перетаскивание строки
						runshort: true, //Если "true" - короткая строка тоже "бегает", "false" - стоит на месте
						hoverstop: true, //true - строка останавливается при наведении курсора мыши, false - строка не останавливается
						inverthover: false, //false - стандартное поведение. Если "true" - строка начинает движение только при наведении курсора
						xml: false //Путь к xml файлу с нужным текстом
					};
					if (options) {
						$.extend(p, options);
					}

					return this.each(function () {
						var enterEvent = 'mouseenter';
						var leaveEvent = 'mouseleave';
						if(p.inverthover){
							enterEvent = 'mouseleave';
							leaveEvent = 'mouseenter';	
						}


						var
							loop = p.loop,
							strWrap = $(this).addClass('str_wrap'),
							fMove = false;
					}

				}
									 }
									 }
									 };
};

							 
		
