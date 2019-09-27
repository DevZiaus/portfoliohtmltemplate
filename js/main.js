/*
****************************************************************
****************************************************************

Template Name: Potfolio | A One Page Portfolio HTML Template
Template URL: https://www.mzsbulbul.ga
Description:  Portfolio is made to create a fully professional 
Personal CV/Resume, Portfolio or mini website template.
Author: Md. Ziaus Samad
Author URL: https://www.mzsbulbul.ga
Version: 1.0
Copyright: 2019 | Md Ziaus Samad | https://www.mzsbulbul.ga

* This file contains the JavaScript & jQuery Code.

****************************************************************
****************************************************************
*/

/*-------------------------------------------------------------------------------
    
    
JS INDEX
=============

01 - Preloader
02 - On refresh Takes to Top
03 - Bootstrap Better Nav
04 - smooth scrolling
05 - Scrolling Animation
06 - Type Effect
07 - Navbar Scroll Background
08 - Skills Animation
09 - Portfolio Item Filtering
10 - Portfolio Venobox
11 - Owl Carousel for Testimonials
12 - Achievement Number Counter
13 - Back To Top Button


--------------------------------------------------------------------------------*/

/*------------------------------------------------
            01 - Preloader
    ---------------------------------------------------*/
$(window).on("load",function(){
	$('.preloader').fadeOut(500);
});

/***** jQuery Code */
var doc = jQuery(document);
doc.ready(function () {
    "use strict";
    
/*------------------------------------------------
           02 - On refresh Takes to Top
    ---------------------------------------------------*/
    $(window).scrollTop(0);
    
/*------------------------------------------------
           03 - Bootstrap Better Nav
    ---------------------------------------------------*/
    

    var body = $('body');
    var navbarCollapse = $('.navbar-collapse');
    body.append('<div class="side-menu-overlay"></div>');
    var overlay = $('.side-menu-overlay');
    body.append('<div id="side-menu"></div>');
    var sideMenu = $('#side-menu');
    sideMenu.append('<button class="close"><span aria-hidden="true">×</span></button>')
    var sideMenuCloseBtn = sideMenu.find('.close');
    sideMenu.append('<div class="contents"></div>')
    var sideMenuContents = sideMenu.find('.contents');
    navbarCollapse.on('show.bs.collapse', function (e) {
        e.preventDefault();
        /*mdshefat.com the professional web designer and developer*/
        var menuContent = $(this).html();
        sideMenuContents.html(menuContent);
        slideIn()
    });
    sideMenuCloseBtn.on('click', function (e) {
        e.preventDefault();
        slideOut()
    });
    overlay.on('click', function (e) {
        slideOut()
    });
    $(window).resize(function () {
        if (!navbarCollapse.is(":visible") && body.hasClass('side-menu-visible')) {
            sideMenu.show();
            overlay.show()
        } else {
            sideMenu.hide();
            overlay.hide()
            /*mdshefat.com the professional web designer and developer*/
        }
    });

    function slideIn() {
        body.addClass('overflow-hidden');
        sideMenu.show();
        setTimeout(function () {
            body.addClass('side-menu-visible');
            overlay.fadeIn()
        }, 50)
    }

    function slideOut() {
        body.removeClass('side-menu-visible');
        overlay.fadeOut(); /*mdshefat.com the professional web designer and developer*/
        setTimeout(function () {
            sideMenu.hide();
            body.removeClass('overflow-hidden')
        }, 400)
    }


    // navbar toogle
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
/*------------------------------------------------
            04 - smooth scrolling
    ---------------------------------------------------*/
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500);
                return false; //Md Ziaus Samad
            }
        }
    });
    
/*------------------------------------------------
            05 - Scrolling Animation
    ---------------------------------------------------*/

	$('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var cssvalue = $(this.element).attr('data-animation');

			$(this.element).addClass("animated "+cssvalue);
			$(this.element).css('opacity','1').fadeIn(2000);
		  },
		  offset: '85%'
		}) //https://www.mzsbulbul.ga
	});

/*------------------------------------------------
            06 - Type Effect
    ---------------------------------------------------*/
    var typed = new Typed(".my-text", {
        strings: ["John Doe", "a Web Designer", "a Web Developer", "a Graphic Designer", "a SEO Expert"],
        smartBackspace: true, // Default value
        loop: true,
        backDelay: 1000,
        typeSpeed: 50,
        backSpeed: 30
    });

/*------------------------------------------------
            07 - Navbar Scroll Background
    ---------------------------------------------------*/
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 100) {
            $('header').addClass('header-dark')
        } else {
            if ($('header').hasClass('header-dark')) {
                $('header').removeClass('header-dark') 
            } //Md Ziaus Samad
        }
    });

/*------------------------------------------------
            08 - Skills Animation
    ---------------------------------------------------*/
    $('.progress-content .skill-progress').each(function () {
        var waypoint = new Waypoint({
            element: this,
            handler: function (direction) {
                var value = $(this.element).attr('data-progress');
                $(this.element).css('width', '' + value + '%');
            },
            offset: '70%'
        })//https://www.mzsbulbul.ga
    });

/*------------------------------------------------
            09 - Portfolio Item Filtering
    ---------------------------------------------------*/
    var $grid = $('.portfolio-wrapper').isotope({
        itemSelector: '.portfolio-item'
    });

    $('.filter li').on('click', function () {
        $('.filter li').removeClass('filter-active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $(this).addClass('filter-active');
    });//Md Ziaus Samad
    
/*------------------------------------------------
            10 - Portfolio Venobox
    ---------------------------------------------------*/
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#0095da',
    });
    
/*------------------------------------------------
            11 - Owl Carousel for Testimonials
    ---------------------------------------------------*/
    $(".owl-carousel").owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        autoplayHoverPause: true
    });//https://www.mzsbulbul.ga
    
/*------------------------------------------------
            12 - Achievement Number Counter
    ---------------------------------------------------*/
    $(function(){
	  $('.count-num').rCounter({
	    duration: 50
	  });//Md. Ziaus Samad
	});
    
/*------------------------------------------------
            13 - Back To Top Button
    ---------------------------------------------------*/
    $(function () {
        var btn = $('#button');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });//https://www.mzsbulbul.ga

    });
    
})