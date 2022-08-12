    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var screenWidth = $(window).width();
    var closedFundsWrapper = $(".past-future_top-content").outerWidth();
    var closedFundsMask = $('.past-future_slider-mask').outerWidth();
    var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
    var closedFundSlideO = $('.past-future_slider-slide').outerWidth();
    var dd = new Dragdealer('content-scroller', {
        steps: closedFundSlidesN,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        reflow: true,
        animationCallback: function(x, y) {
            $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
            $('.past-future_slider-mask').css('margin-left', -x * (closedFundsMask - closedFundsWrapper));
        }
    });

    $('.past-future_slider-wrap').on('click', '.past-future_right-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)+1, b);

    });

    $('.past-future_slider-wrap').on('click', '.past-future_left-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)-1, b);
    });
    var homeBenefitsImageWrap = $('.home-benefits-section').outerWidth();
    var sp500Width = $('.home-benefits_image').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.home-benefits_image-wrap').css('margin-left', -x * (sp500Width - screenWidth +64));
        }
    });


    $('.alt-single-press_wrap').each(function() {
        var parent_index = $(this).parent().index();
        $(this).attr('data-testid', 'alt-single-press-wrap-' + parent_index);
    });
    
    $('.past-future_single-card').each(function() {
        var parent_index = $(this).parent().index();
        $(this).attr('data-testid', 'closed-funds-card-' + parent_index);
    });

    $(".testimonials_slider-slide").eq(0).find(".hs5").addClass("current-testimonial-quote"),
        $(".testimonials_click").click(function () {
            $(".hs5").removeClass("current-testimonial-quote");
            var a = $(".testimonials_slider-nav").find(".w-slider-dot.w-active").index();
            $(".testimonials_slider-slide").eq(a).find(".hs5").addClass("current-testimonial-quote");
        });

    for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
        var c = b.item(a);
        c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
    }
    var aPlayed = false;
    function animationsRender() {
        if ($(window).width() > 991) {
            var a = anime.timeline({ loop: !1, autoplay: !1 });
            a.add({
                targets: ".fadeup0 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup0").css("opacity", "1");
                },
            });

            $(document).ready(function () {
                a.play();
                $(window).focus(function() {
                    if (!aPlayed) {
                        a.restart();
                        aPlayed = true;
                    }
                    else {
                        
                    }
                });
            });
    
            var b = anime.timeline({ loop: !1, autoplay: !1 });
            b.add({
                targets: ".fadeup1 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup1").css("opacity", "1");
                },
            });

    
    
            var fd5 = anime.timeline({ loop: !1, autoplay: !1 });
            fd5.add({
                targets: ".fadeup5 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup5").css("opacity", "1");
                },
            });
              
            var viewedSPGraph = false;
            var heroVisualScrollAdd
            var heroVisual = $(".home-page_hero-visual");
            var heroVisualWidth = (heroVisual).width();
            var currentScroll = $(window).scrollTop() + $(window).height();
            $(window).scroll(function() {
                heroVisualScrollAdd = $(this).scrollTop();
                heroVisual.width(heroVisualScrollAdd + heroVisualWidth);
                if ($(".fadeup1").isInViewport(e)) {
                    b.play();
                    $(this).off(e);
                }
                else if ($('.home-benefits_image-title').isInViewport(e)) {
                    if (!viewedSPGraph) {
                        const chart = new Chart(ctx, config);
                        viewedSPGraph = true;
                    }
                    else if  (viewedSPGraph) {
                    }
                    $(this).off(e);
                }
                else if ($(".fadeup5").isInViewport(e)) {
                    fd5.play();
                    setTimeout(function() {
                        $('.past-future_slider-slide').each(function (i) {
                            var $item = $(this).find("._8_fundcards");
                            setTimeout(function() { 
                            $item.click();
                            }, 100*i);
                        });
                    }, 500);
                    $(this).off(e);
                }
                else if ($(".partners-logos_img").isInViewport(e)) {
                    $('.partners-logos_img').each(function (i) {
                        var $item = $(this); 
                        setTimeout(function() { 
                          $item.click();
                        }, 100*i);
                    });
                    $(this).off(e);
                }
            });
        }
        else {
            const chart = new Chart(ctx, config);
        }
    }
    function dragDetector() {
        var closedFundsWrapper = $(".past-future_content").outerWidth();
        var homeBenefitsImageWrap = $('.home-benefits-section').outerWidth();
        var sp500Width = $('.home-benefits_image').outerWidth();
        var closedFundSlideO = $('.past-future_slider-slide').outerWidth();
        if(homeBenefitsImageWrap < sp500Width){
            $('.home-benefits_drag-element').css('display', 'block');
        }
        else {
            $('.home-benefits_drag-element').css('display', 'none');
        }
        if(closedFundsWrapper < (closedFundSlidesN * closedFundSlideO)){
            $('.past-future-drag-component').css('display', 'block');
        }
        else {
            $('.past-future-drag-component').css('display', 'none');
        }
    }
    dragDetector();
    animationsRender();
    $(window).on("orientationchange", function () {
        dragDetector();
        if ($(window).width() > 991) {
            animationsRender();
            $('.animated-word').css('opacity', '1');
        }
    });