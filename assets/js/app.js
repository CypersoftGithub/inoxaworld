// easeScrolling page

    // $("html").easeScroll({
    //     frameRate: 60,
    //     animationTime: 3000,
    //     stepSize: 120,
    //     pulseAlgorithm: !0,
    //     pulseScale: 8,
    //     pulseNormalize: 1,
    //     accelerationDelta: 20,
    //     accelerationMax: 1,
    //     keyboardSupport: !0,
    //     arrowScroll: 50
    //   });

    
// filter sticky

    // $(document).ready(function() {
    //   var $window = $(window);  
    //   var $sidebar = $(".main-filter"); 
    //   var $sidebarHeight = $sidebar.innerHeight();   
    //   var $footerOffsetTop = $(".footer-area").offset().top - 100; 
    //   var $sidebarOffset = $sidebar.offset();
      
    //   $window.scroll(function() {
    //     if($window.scrollTop() > $sidebarOffset.top) {
    //       $sidebar.addClass("fixed");   
    //     } else {
    //       $sidebar.removeClass("fixed");   
    //     }    
    //     if($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
    //       $sidebar.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});        
    //     } else {
    //       $sidebar.css({"top": "120px"});  
    //     }    
    //   });   
    // });




// slider here

var revapi27,
        tpj;
    (function() {
        if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
        else onLoad();

        function onLoad() {
            if (tpj === undefined) {
                tpj = jQuery;
                if ("off" == "on") tpj.noConflict();
            }
            if (tpj("#rev_slider_27_1").revolution == undefined) {
                revslider_showDoubleJqueryError("#rev_slider_27_1");
            } else {
                revapi27 = tpj("#rev_slider_27_1").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "vendor/revslider/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 4000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        mouseScrollReverse: "default",
                        onHoverStop: "off",
                        bullets: {
                            enable: true,
                            hide_onmobile: false,
                            hide_over: 992,
                            style: "hephaistos",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 20,
                            space: 5,
                            tmp: ''
                        },
                        tabs: {
                            style: "spa",
                            enable: false,
                            width: 236,
                            height: 120,
                            min_width: 0,
                            wrapper_padding: 0,
                            wrapper_color: "transparent",
                            tmp: '<div class="spa-tabs">    <div class="spa-tabs__wrap">    <div class="spa-tabs__title">{{title}}</div>    <div class="spa-tabs__desc">{{description}}</div>   </div></div>',
                            visibleAmount: 4,
                            hide_onmobile: true,
                            hide_under: 992,
                            hide_onleave: false,
                            hide_delay: 200,
                            direction: "horizontal",
                            span: true,
                            position: "inner",
                            space: 0,
                            h_align: "right",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: -10
                        }
                    },
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1200, 992, 768, 576],
                    gridheight: [1200, 800, 960, 720],
                    lazyType: "none",
                    parallax: {
                        type: "mouse",
                        origo: "slidercenter",
                        speed: 1200,
                        speedbg: 0,
                        speedls: 0,
                        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                    },
                    shadow: 0,
                    spinner: "spinner0",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar: "on",
                    hideThumbsOnMobile: "on",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            };
        };
    }());



