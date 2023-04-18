; (function ($) {
    "use strict";

    $(document).ready(function () {


        /*---------------------------
            Testimonial carousel
        ---------------------------*/
        var $testimonialCarousel = $('.testimonial-carousel-01');
        if ($testimonialCarousel.length > 0) {
            $testimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 60,
                dots: true,
                nav: true,
                navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }

        /*---------------------------
            Testimonial carousel Four
        ---------------------------*/
        var $testimonialCarousel = $('.testimonial-carousel-04');
        if ($testimonialCarousel.length > 0) {
            $testimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 60,
                dots: true,
                nav: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }


        /*---------------------------
             Testimonial carousel Inner
         ---------------------------*/
        var $testimonialCarousel = $('.testimonial-carousel-03');
        if ($testimonialCarousel.length > 0) {
            $testimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 60,
                dots: true,
                nav: true,
                navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
       

        /*---------------------------
           Team carousel
        ---------------------------*/
        var $teamCarousel = $('.team-carousel');
        if ($teamCarousel.length > 0) {
            $teamCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 4
                    },
                    1920: {
                        items: 4
                    }
                }
            });
        }
       
        /*---------------------------
           Blog carousel Three
        ---------------------------*/
        $(".blog-carousel-three").owlCarousel({
            items: 2,
            margin: 30,
            dots: false,
            autoplay: true,
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                599: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }

        });




        /*---------------------------
                Blog carousel
        ---------------------------*/
        $(".blog-carousel").owlCarousel({
            items: 3,
            margin: 30,
            dots: true,
            autoplay: true,
            loop: true,
            nav: true,
            center: true,
            navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                599: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
        /*---------------------------
           Blog carousel Five
        ---------------------------*/
        $(".blog-carousel-five").owlCarousel({
            items: 3,
            margin: 30,
            dots: false,
            autoplay: true,
            loop: true,
            nav: true,
            center: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                599: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }

        });

        /*---------------------------
           Blog carousel Two
        ---------------------------*/
        $(".blog-carousel-two").owlCarousel({
            items: 3,
            margin: 30,
            dots: true,
            autoplay: true,
            loop: true,
            nav: true,
            center: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                460: {
                    items: 1
                },
                599: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }

        });



        /*---------------------------
           Testimonial Two carousel
        ---------------------------*/
        var $testimonialTwoCarousel = $('.testimonial-carousel-two');
        if ($testimonialTwoCarousel.length > 0) {
            $testimonialTwoCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }

        // Clinet - active
        $('.client-active-area').owlCarousel({
            loop: true,
            items: 4,
            nav: true,
            margin: 50,
            smartSpeed: 1000,
            dots: false,
            navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        })

        /*---------------------------
                   price carousel Four
        ---------------------------*/
        $('.price-slider-active').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            margin: 140,
            center: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            // stagePadding: 200,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    // center: false,
                },
                600: {
                    items: 1,
                    margin: 10,
                    // center: false,
                },
                768: {
                    items: 1,
                    margin: 10,
                    // center: false,
                },
                992: {
                    items: 1,
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1366: {
                    items: 2
                },
                1440: {
                    items: 3
                }
            }
        })
        

    });


   
    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;

    });
    if ($(window).width() < 769) {
        var scrollPos = 0;

        window.addEventListener("scroll", function () {
            if (document.body.getBoundingClientRect().top > scrollPos) {
                $(".floating-icon").removeClass("show-up-form-icons");
            } else {
                $(".floating-icon").addClass("show-up-form-icons");
            }
            scrollPos = document.body.getBoundingClientRect().top;
        });
    }

    // alert($(window).width());
    $(window).on('load', function () {
        // Pagination Page

        var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
        $('.cdp_i').on('click', function () {
            var go = $(this).attr('href').replace('#!', '');
            if (go === '+1') {
                paginationPage++;
            } else if (go === '-1') {
                paginationPage--;
            } else {
                paginationPage = parseInt(go, 10);
            }
            $('.cdp').attr('actpage', paginationPage);
        });
        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });


        // Nice scroll js
        // $(".terms-area").niceScroll(".terms-wraper", {
        //     cursorcolor: "#c2976b",
        //     cursorwidth: "10px",
        // });

      

    });

// Testimonials Section
document.addEventListener('DOMContentLoaded', () => {
  "use strict";
     /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });
});

})(jQuery); 