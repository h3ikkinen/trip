
$(document).ready(function() {


    //scroll
    new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage' ,'sixthPage', 'seventhPage', 'eighthPage'],
        menu: '#myMenu',
        lazyLoading: true,
        scrollOverflow: true,// вот эта хуйня не работает почему-то, из-за стилей скорее всего
        onLeave: function(origin, destination, direction){
            if ( destination.index != 5 ) {
                $('.before-title').removeClass('active');
                $('.section-title').removeClass('active');
                $('.tab_1').removeClass('active');
                $('.tab_2').removeClass('active');
                $('.tab_3').removeClass('active');
                $('.line').removeClass('active');
            } else {
                $('.before-title').addClass('active');
                $('.section-title').addClass('active');
                $('.tab_1').addClass('active');
                $('.tab_2').addClass('active');
                $('.tab_3').addClass('active');
                $('.line').addClass('active');
            }
            if ( destination.index != 7 ) {
                // $('.feedback__block-item').removeClass('active');
            } else {
                $('.feedback__block-item').addClass('active');
            }
            if ( destination.index != 8 ) {
                $('header').removeClass('footer_act');
            } else {
                $('header').addClass('footer_act');
            }
            $('.burger-toggle').addClass('black');
            $('header').addClass('active');
            if (destination.index === 0 || destination.index === 2 || destination.index === 4 || destination.index === 6) {
                $('header').removeClass('active');
            } 
            if (destination.index === 0 || destination.index === 2 || destination.index === 4 || destination.index === 6) {
                $('.burger-toggle').removeClass('black');
            }
            if (destination.index === 1 || destination.index === 3) {
                $('.parallax_item').addClass('active');
                
                if ($('.parallax_item').hasClass('active')) {
                    $('.parallax_item').addClass('layer');
                    $('.parallax__list').parallax();
                }
            } else {
                $('.parallax_item').removeClass('active');
            }
            // if (direction == 'down') {
                
            // }
        }   
    });

    // parallax
    $('.intro__wrapper>div').addClass('layer');
    $('.wrapper_trans').addClass('layer');
    $('.intro__wrapper').parallax();

    //slider
    //1 
    const swiper = new Swiper('.swiper-container__guide', {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
    
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
    
            },
            901: {
                slidesPerView: 3, 
            }
        }
    });
    //2 
    const swiperCouchsurfing1 = new Swiper('.couchsurfing__swiper-container-1', {
        navigation: {
            nextEl: '.couchsurfing__slider-1-next',
            prevEl: '.couchsurfing__slider-1-prev',
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        fadeEffect: {
        crossFade: true,
        },
        
        
        breakpoints: {
            300: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
    
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 1, //работай,сука *бью кулаком по столу и много матерюсь
            },
            1000 :{
                slidesPerView: 3,
            }
        }
      });
      //3 

      var swiperCouchsurfing2 = new Swiper('.couchsurfing__swiper-container-2', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.couchsurfing__slider-2-next',
            prevEl: '.couchsurfing__slider-2-prev',
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
      //4 
      let swiperSearch = new Swiper('.searh_slider-container', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        spaceBetween: 0,
        navigation: {
            nextEl: '.searh-next',
            prevEl: '.searh-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            820: {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            480: {
              slidesPerView: 2,
              slidesPerColumn: 2,
            },
            320: {
              slidesPerView: 1,
              slidesPerColumn: 2,
            },
        }
    });
    //waypoint 

    //burger
    let menuToggle = document.querySelector('.burger-toggle'),
        menuBurger = document.querySelector('.burger-menu'),
        burgerLinks = document.querySelectorAll('.burger-lnk');
        
    function toggleBurgerMenu() {
        menuToggle.classList.toggle('active');
        menuBurger.classList.toggle('active');
        if(menuToggle.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();

        toggleBurgerMenu();
    });
    
    burgerLinks.forEach((item) => {
        item.addEventListener('click', toggleBurgerMenu);
    });

    //tabs

    const tabs1 = document.querySelectorAll('.tabheader__item'),
          tabsContent1 = document.querySelectorAll('.tabcontent'),
          tabsParent1 = document.querySelector('.tabheader__items'),
          tabs2 = document.querySelectorAll('.tabheader__item_2'),
          tabsContent2 = document.querySelectorAll('.tabcontent_2'),
          tabsParent2 = document.querySelector('.tabheader__items_2'),
          tabs3 = document.querySelectorAll('.tabheader__item_3'),
          tabsContent3 = document.querySelectorAll('.tabcontent_3'),
          tabsParent3 = document.querySelector('.tabheader__items_3');

    function selectTabs(tabs, tabsContent, tabsParent) {
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
        // параметры по умолчанию 
        function showTabContent(i = 0) { // 0 - параметр по умолчанию
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
    
        hideTabContent();
    
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('tabheader__item') || target.classList.contains('tabheader__item_2') || target.classList.contains('tabheader__item_3')) {
                tabs.forEach( (item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
    //1
    selectTabs(tabs1, tabsContent1, tabsParent1);
    document.querySelector('.tab_1').addEventListener('click', selectTabs);

    //2
    selectTabs(tabs2, tabsContent2, tabsParent2);
    document.querySelector('.tab_2').addEventListener('click', selectTabs);

    //3 
    selectTabs(tabs3, tabsContent3, tabsParent3);
    document.querySelector('.tab_3').addEventListener('click', selectTabs);
});