/*
	Hypothesis by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($){

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $iconrotate = $('.icon-rotate-in'),
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
				$iconrotate.removeClass('inactive');
            }, 100);
        });

	// Copy to clipboard init.
		var clipboard = new ClipboardJS('.copy');

		$( document ).ready(function() {
			clipboard.on('success', function(e) {
				$(e.trigger).text("Copied!");
				e.clearSelection();
				setTimeout(function() {
					$(e.trigger).text("Copy");
				}, 2500);
			});

			clipboard.on('error', function(e) {
				$(e.trigger).text("Can't in Safari");
				setTimeout(function() {
				  $(e.trigger).text("Copy");
				}, 2500);
			});
		});

	// Transitions.
		var $features = $('.os-transition, .about-transition, .feature, .fade-in-scale');

		if ($features.length > 0
		&&	browser.canUse('transition'))
			$features.each(function() {

				var $this = $(this);

				$this.scrollex({
					mode: 'middle',
					top: '-25vh',
					bottom: '-25vh',
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
		$('<a href="#navPanel" class="navPanelToggle"><span class="not-small">Menu</span></a>')
			.appendTo($header);

		$(	'<div id="navPanel">' +
				'<nav>' +
					$('#nav') .navList() +
				'</nav>' +
				'<a href="#navPanel" class="close"></a>' +
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

	
	// Parallax.
		if (browser.name == 'ie'
		||	browser.name == 'edge'
		||	browser.mobile) {

			$.fn._parallax = function() {
				return $(this);
			};

		}
		else {

			$.fn._parallax = function() {

				var $this = $(this);

				if (this.length == 0)
					return $this;

				if (this.length > 1) {

					for (var i=0; i < this.length; i++)
						$(this[i])._parallax(userOptions);

					return $this;

				}

				$this.each(function() {

					var $t = $(this),
						on, off;

					on = function() {

						$t.css('background-position', 'center 100%, center 100%, center 0px');

						$window
							.on('scroll._parallax', function() {

								var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

								$t.css('background-position', 'center 100%, center 100%, center ' + (pos * -0.275) + 'px');

							});

					};

					off = function() {

						$t
							.css('background-position', '');

						$window
							.off('scroll._parallax');

					};

					breakpoints.on('<=medium', off);
					breakpoints.on('>medium', on);

				});

				return $(this);

			};

			$window
				.on('load resize', function() {
					$window.trigger('scroll');
				});
		}

		// News.
			$('#news')._parallax();

		// About.
			$('#about')._parallax();


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