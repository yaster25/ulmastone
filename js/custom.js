$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


function initSlider() {
    
        var handlesSlider = document.getElementById("filter-slider-time"),
            priceFrom = parseInt($("#time_from").val()),
            priceTo = parseInt($("#time_to").val());

        var max = typeof maxPrice != "undefined"? maxPrice : 60;

        noUiSlider.create(handlesSlider, {
            start: [ priceFrom, priceTo > 0? priceTo : max ],
            step: 1,
            connect:true,
            tooltips: [true, true],
            range: {
                "min": [  0 ],
                "max": [ max ]
            },
            format: {
                from: function(value) {
                        return parseInt(value);
                    },
                to: function(value) {
                        return parseInt(value);
                    }
                }
        });
    
        var valueInput = document.getElementById('time_from');
        var valueInput2 = document.getElementById('time_to');

        handlesSlider.noUiSlider.on('update', function( values, handle ) {
            
            if ( handle ) {
                 valueInput2.value = parseInt(values[handle]);         
            } else {
                valueInput.value = parseInt(values[handle]);                
            }
        });

        valueInput.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([this.value, null]);
        });

        valueInput2.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([null, this.value]);
        });
}



 $(document).ready(function(){
     
     $(".js-header-search").click(function(){   
         if(!$(this).hasClass('active')){
            $('body').addClass('body-search-active');            
            $('.header-search').addClass('active');     
            $('.header-nav').addClass('search-active');     
            return false; 
         }
            
    });
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-search").length) return;
        $('body').removeClass('body-search-active');            
        $('.header-search').removeClass('active');     
        $('.header-nav').removeClass('search-active');   
        event.stopPropagation();
      });
     
     $('.nav-item_parent').hover(function() {		
		$(this).find('.subnav-wrapper').stop(true, false, true).slideDown(300);	
         $('body').addClass('menu-subnav-open');
		event.preventDefault();
        event.stopPropagation();
		return false;
         
	 }, function() {		
		$(this).find('.subnav-wrapper').stop(true, false, true).slideUp(300);
          $('body').removeClass('menu-subnav-open');
		 event.preventDefault();
         event.stopPropagation();		
		return false;
	 });
     
     $('.nav-item_parent2 .nav-item__link').click(function() {	
		$(this).next('.subnav-wrapper').slideToggle();
		event.preventDefault();
        event.stopPropagation();
		return false;
         
	 });
     
     $('.f-menu-parent').click(function() {	
         if($(window).innerWidth()<992){
             $(this).next('.f-submenu').slideToggle();
                 $(this).toggleClass('active');
                event.preventDefault();
                event.stopPropagation();
                return false;
         }
		
         
	 });
     
     /* TOP SLIDER*/ 
        $('.js-top-slider').slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            autoplay:false,
            responsive: [
                {
                  breakpoint: 1401,
                  settings: {
                    arrows:false
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    arrows:true
                  }
                }
              ]

        });
  
        //ticking machine
        var percentTime;
        var tick;
        var time = 1;
        var progressBarIndex = 0;


        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, 10);

        }

        function interval() {
           percentTime += 1 / (time + 3) /100;
                $('.inProgress').css({
                    opacity:1
                }).css({
                    transform:"scaleX("+percentTime+")"
                });
                if (percentTime >= 1) {
                    $('.top-slider').slick('slickNext');                
                    startProgressbar();
                }         
        }

        function resetProgressbar() {
            $('.inProgress').css({
               transform:"scaleX(0)"
            }).css({
                    opacity:0
                });
            clearInterval(tick);
        }
        startProgressbar();
     
        $('.top-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          startProgressbar();
        });
     
        // End ticking machine
     
     /*END TOP SLIDER*/
     
     /*Partners slider*/     
     $('.js-slider-partners').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 7,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            variableWidth:true,             
            responsive: [
                
                {
                  breakpoint: 1141,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                      variableWidth:false,  
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2,
                      variableWidth:false,  
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                      variableWidth:false,  
                  }
                }
              ]
        });
    });
    /*End Partners slider*/ 
     
     
     /* INFO SLIDER*/ 
     $('.js-slider-info').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
             centerMode:false,
              fade:true,
            responsive: [
                
                
              ]
        });
    });
     if($('.info-item__text').length){
         $(".info-item__text").dotdotdot({
            height:115
        });         
     }
     /* END INFO SLIDER*/ 
     
      if($('.item-country__tooltip').length){
        $('.item-country__tooltip').tooltipster({
            contentCloning: true,
            side:'bottom',
            trigger: 'custom',
            contentAsHTML: true,
		    interactive: true,
            triggerOpen: {
                mouseenter: true,
                click: true,
                touchstart:true, 
                tap:true
            },
            triggerClose: {
                mouseleave:true, 
                touchleave:true
            }
        });    
     }
     
     /* GALLERY SLIDER*/ 
        $('.js-slider-gallery').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 5,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
             centerMode:false,
              fade:false,
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 1141,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 741,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
     /* END GALLERY SLIDER*/ 
     
     /*  ADVANTAGES SLIDER*/ 
        $('.js-slider-advantages').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:3,
            slidesToScroll: 3,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            responsive: [   
                {
                  breakpoint: 9999,
                  settings: "unslick"
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 741,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      adaptiveHeight:true,
                      fade:true
                  }
                }
              ]
        });
    });
     if($('.info-item__text').length){
         $(".info-item__text").dotdotdot({
            height:115
        });         
     }
     /* END ADVANTAGES SLIDER*/ 
     
     /* History SLIDER*/ 
        $('.js-slider-history').each(function () {
          $(this).slick({
            infinite:false,
            arrows:false,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide:true,
            centerMode:true,
            fade:false,
            variableWidth:true,  
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    centerMode:false,
                  }
                },{
                  breakpoint: 741,
                  settings: {
                    centerMode:false,
                    adaptiveHeight:true
                  }
                }
              ]
        });
    });
     /* END History SLIDER*/ 
     
     
     $('[data-fancybox=gallery]').fancybox({
         loop: true,
         infobar: false
    });
     
     $(".input-phone").mask("+7 (999) 999-99-99");
     
    $('.mobile-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar-inner').fadeIn(300);
        }
	});

	$('.js-close-menu').on('click', function(event) {        
        if($('body').hasClass('menu-open')){ 
        $('body').removeClass('menu-open');
				$('.sidebar-inner').fadeOut(300);
        }
        return false;        
	});
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".sidebar, .mobile-trigger").length) return;
         if($('body').hasClass('menu-open')){
            
            
            $('body').removeClass('menu-open');
                    $('.sidebar-inner').fadeOut(300);	
                   
            }

        event.stopPropagation();
      });

     
     if($('.item-product__info').length){
         $(".item-product__info").dotdotdot({
            height:60
        });         
     }
     if($('.item-product-list__info').length){
         $(".item-product-list__info").dotdotdot({
            height:115
        });         
     }
     
     if($('.aside-sticky').length){    
         var sticky = new Sticky('.aside-sticky');
     }
     
     $(window).scroll(function(event){
         
         if($('.aside-sticky').length){     
            if($('.aside-sticky').css("position") === "fixed") {
                $('.aside-sticky').addClass('is-sticky-fixed');
            }  else{
                $('.aside-sticky').removeClass('is-sticky-fixed');
            }
         }
       
    });
     
     
    $('.slider-product-image').slick({
          infinite:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-product-image-nav',
          responsive: [  
                {
                  breakpoint: 741,
                  settings: {
                      arrows:true
                  }
                }
              ]
    });
    $('.slider-product-image-nav').slick({
       infinite:false,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-product-image',
      dots: false,
        arrows:true,
      centerMode:true,
      focusOnSelect: true,
        vertical:true,
        responsive: [
                
                
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 5,
                  }
                }
              ]
    });
     
        
     $('.js-slider-product-icons').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide:true,
            centerMode:false,
                     
            responsive: [
                
                
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 4 
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3, 
                  }
                }
              ]
        });
    });
     
     /*Products slider*/     
     $('.js-slider-products').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
                   
            responsive: [
                {
                  breakpoint: 741,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                      variableWidth:false,  
                  }
                }
              ]
        });
    });
     
     $(window).on('resize orientationchange', function() {
            if($('.item-product-2__info').length){
                 $(".item-product-2__info").dotdotdot({
                    height:80
                });         
             }
        });
     
     if($('.item-product-2__info').length){
         $(".item-product-2__info").dotdotdot({
            height:80
        });         
     }
    /*End Products slider*/ 
     
     $('.product-option-item__name').on('click', function(event) {
         if($(window).innerWidth()<741){
             $(this).parents('.product-option-item').toggleClass('active');
         }
     })
     
     $('.custom-select').selectric({
         disableOnMobile: false,         
         nativeOnMobile: true
     });
     
     if($('.item-options__info').length){
         $(".item-options__info").dotdotdot({
            height:80
        });         
     }
     
     $('.item-options__more').on('click', function(event) {         
         $(this).parents('.item-options').addClass('this');
         $('.item-options:not(".this")').removeClass('active');
         $('.item-options:not(".this")').find(".item-options__info").dotdotdot({
            height:80
        }); 
         $('.item-options:not(".this")').find('.item-options__more .link-show').show();
         $('.item-options:not(".this")').find('.item-options__more .link-hide').hide();
          
         $(this).find('span').toggle();
         $(this).parents('.item-options').toggleClass('active');
         
         if($(this).parents('.item-options').hasClass('active')){
             $(this).prev(".item-options__info").dotdotdot({
                height:null
            }); 
         }else{
             $(this).prev(".item-options__info").dotdotdot({
                height:80
            }); 
         }
         $(this).parents('.item-options').removeClass('this');
         return false;
     })
     
     $('.js-slider-gallery-single').slick({
          infinite:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
    });
     
     /* Sertificates slider*/     
     $('.js-slider-sert').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 7,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            variableWidth:true,             
            responsive: [
                {
                  breakpoint: 1701,
                  settings: {
                    slidesToShow: 6
                  }
                },
                {
                  breakpoint: 1141,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                      variableWidth:false,  
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2,
                      variableWidth:false,  
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                      variableWidth:false,  
                  }
                }
              ]
        });
    });
    /*End Sertificates slider*/      
    
     /* Reviews SLIDER*/ 
        $('.js-slider-reviews').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:true
        });
    });
     /* END Reviews SLIDER*/ 
     
      if($('.item-news__text').length){
         $(".item-news__text").dotdotdot({
            height:80
        });         
     }
     
     if($('.item-news-aside__name').length){
         $(".item-news-aside__name").dotdotdot({
            height:80
        });         
     }
     
   if($('#filter-slider-time').length){
         initSlider();
     }
     
     $('.faq-item__title').click(function(){
		$(this).toggleClass('active');
         $(this).next('.faq-item__content').slideToggle();
	})
    
     $('.item-options-choose').click(function(){
        if ($(event.target).closest("a").length) return;
		$(this).toggleClass('checked');
        var checkBoxes= $(this).find('input');
        if(checkBoxes.prop("checked")==true)
             checkBoxes.prop("checked", false); 
        else
             checkBoxes.prop("checked", true)
         
         $('#count-checked').text($('.block-options input[type="checkbox"]:checked').length);
         
	})
     
     
     $("#formCall").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				}				
			},
			messages: {
				name: "Необходимо заполнить «ФИО».",
				phone: "Необходимо заполнить «Телефон».",
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }				
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                     touch: false,                    
                });
            }
     });
     
     $("#formOrder").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				number: "required",
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
				comment: "required"
			},
			messages: {
				number: "Необходимо заполнить «Серийный номер».",
				name: "Необходимо заполнить «Название станка».",
				phone: "Необходимо заполнить «Телефон».",
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                comment: "Необходимо заполнить «Наименование запчасти(ей)»."				
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                     touch: false,
                    
                });
            }
     });
     
     $("#formComment").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {				
				name: "required",				
                email: {
					required: true,
					email: true
				},
				comment: "required"
			},
			messages: {
				name: "Необходимо заполнить «Имя».",
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный адрес электронной почты."
                },
                comment: "Необходимо заполнить «Комментарий»."				
			},
            submitHandler: function(){
               
            }
     });
     
     $("#formLeasing").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            //element.parent().append(error);
             element.closest('.form__col').append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
                category: "required",
				tool: "required",
			},
			messages: {
				name: "Необходимо заполнить «ФИО».",
				phone: "Необходимо заполнить «Телефон».",
				category: "Необходимо выбрать «Категорию».",
				tool: "Необходимо выбрать «Станок».",
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }				
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                     touch: false,                    
                });
            },
            highlight: function(element, errorClass, validClass) {
              var $element = $(element) 
                , $group = $element.closest('.form__col');

              $group.removeClass('form__col--success').addClass('form__col--error');

              switch (element.type) {
                case 'select-one':
                  if ($group.find('.selectric-wrapper').length !== 0) {
                    // close the select
                    $(element).selectric('close');
                  }
                  break;

                // add more behavior...
              }
            },
            unhighlight: function(element, errorClass, validClass) {
              var $element = $(element) 
                , $group = $element.closest('.form__col');

              $group.removeClass('form__col--error').addClass('form__col--success');

              switch (element.type) {
                case 'selsect-one':
                  if ($group.find('.selectric-wrapper').length !== 0) {
                    // close the select
                    $('select').selectric('close');
                  }
                  break;

                // add more behavior...
              }
            }
     });
     
     $('#formLeasing').on('selectric-change', function(event, element, selectric) {
        console.log(event);
        console.log(element);
        console.log(selectric);

        $(this).valid();
      });
     
     $("#formFaq").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
                question: "required"
			},
			messages: {
				name: "Необходимо заполнить «Ваше имя».",
				phone: "Необходимо заполнить «Телефон».",
				question: "Необходимо заполнить «Вопрос».",
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }				
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                     touch: false,                    
                });
            }
     });
     
     $("#formCall2").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				}				
			},
			messages: {
				name: "Необходимо заполнить «Имя».",
				phone: "Необходимо заполнить «Телефон».",
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный адрес электронной почты."
                }				
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                     touch: false,                    
                });
            }
     });
     
     if($('#map').length){
         initMap();
     }

 });


function initMap() {
    var uluru = {lat: 55.8115267, lng: 37.6525307};
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17, 
            styles: [{
            stylers: [{
              saturation: -100
            },
            {
                "lightness": -50
            }]
        }],
        center: uluru, 
        disableDefaultUI: true,    
        }
    );
    var marker = new google.maps.Marker({
          position: uluru, 
          map: map, 
          icon: 'img/icon-map.png',
          title: 'ул.Маломосковская, д.22, стр.1, эт. Цоколь, пом. I, ком. 65'
    });
}
