/*
	Hypothesis by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($){

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
		$slidelrscale = $('.slide-lr-scale'),
		$slideup = $('.slide-up'),
		$slideupfade = $('.slide-up-fade'),
		$slideupscale = $('.slide-up-scale'),
		$enterprise = $('.ent-transition'),
        $banner = $('#banner');
		

    // Breakpoints.
        breakpoints({
            xlarge:   [ '1281px',  '1680px' ],
            large:    [ '981px',   '1280px' ],
            medium:   [ '737px',   '980px'  ],
            small:    [ '481px',   '736px'  ],
            xsmall:   [ '361px',   '480px'  ],
            xxsmall:  [ null,      '360px'  ]
        });

    // Play initial animations on page load.
        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-preload');
				$slidelrscale.removeClass('inactive');
				$slideup.removeClass('inactive');
				$slideupfade.removeClass('inactive');
				$slideupscale.removeClass('inactive');
				$enterprise.removeClass('inactive');
            }, 100);
        });

	// Transitions.
		var $features = $('.dl-transition, .news-transition');

		if ($features.length > 0
		&&	browser.canUse('transition'))
			$features.each(function() {

				var $this = $(this);

				$this.scrollex({
					mode: 'middle',
					top: '-30vh',
					bottom: '-30vh',
					initialize: function() { $this.addClass('inactive'); },
					enter: function() { $this.removeClass('inactive'); }
				});
			});

		var $features = $('.about-transition, .faq-transition');

		if ($features.length > 0
		&&	browser.canUse('transition'))
			$features.each(function() {

				var $this = $(this);

				$this.scrollex({
					mode: 'middle',
					top: '-40vh',
					bottom: '-40vh',
					initialize: function() { $this.addClass('inactive'); },
					enter: function() { $this.removeClass('inactive'); }
				});
			});

	// Scrolly.
		$('.scrolly').scrolly({
			offset: function() { return $header.height() - 5; }
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
			});

		}

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'center',
			hideDelay: 350,
			mode: 'fade',
			speed: 690,
			easing: 'swing',
			baseZIndex: 100000
		});

	// Menu.
		$('<a href="#navPanel" class="navPanelToggle" title="Menu"><span class="not-small">Menu</span></a>')
			.appendTo($header);

		$(	'<div id="navPanel">' +
				'<nav>' +
					$('#nav') .navList() +
				'</nav>' +
				'<a href="#navPanel" class="close" title="close"></a>' +
			'</div>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'is-navPanel-visible',
					side: 'right'
				});

	// Banner.
		if ($banner.length > 0) {

			// Edge + IE: Workaround for object-fit.
				if (browser.name == 'edge'
				||	browser.name == 'ie') {

					var $video = $banner.find('video'),
						v = $video[0],
						t, f;

					// Handler function.
						var f = function() {

							var w = v.videoWidth, h = v.videoHeight,
								pw = $window.width(), ph = $window.height(),
								nw, nh, x;

							// Calculate new width, height.
								if (pw > ph) {

									nw = pw;
									nh = (nw / w) * h;

								}
								else {

									nh = ph;
									nw = (nh / h) * w;

								}

							// Set width, height.
								if (nw < pw) {

									v.style.width = '100vw';
									v.style.height = 'auto';

								}
								else
									v.style.width = nw + 'px';

								if (nh < ph) {
									v.style.height = '100vh';
									v.style.width = 'auto';
								}
								else
									v.style.height = nh + 'px';

							// Set position (bottom-right).
								v.style.top = v.style.bottom = v.style.left = v.style.right = 'auto';
								v.style.bottom = '0';
								v.style.right = '0';

						};

					// Do an initial call of the handler.
						(f)();

					// Add event listeners.
						$window.on('resize load', function() {

							clearTimeout(t);

							t = setTimeout(f, 125);

						});
				}
		}


        // Typed Effect.

        $(".element").each(function(){
            var $this = $(this);
                $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                loop: true,
                startDelay: 2500,
                backDelay: 5000,
            });
        });


	// Tabs.
		$('.tabs').selectorr({
			titleSelector: 'h3',
			delay: 250
		});


	// Accordion.
		$(document).ready(function() {
			$('#only-one [data-accordion]').accordion();
			$('#multiple [data-accordion]').accordion({
				singleOpen: false,
				transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
				transitionSpeed: 800
			});
			$('#single [data-accordion]').accordion({
				transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
				transitionSpeed: 800
			});
		});


	// Back to Top.
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1200);
			return false;
		});

})(jQuery);