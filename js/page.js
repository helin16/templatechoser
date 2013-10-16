//function to fix height of iframe!
var calcHeight = function() {
	var headerDimensions = $('#headerlivedemo').height();
	var selector = '#iframelive';
	if ($('#advanced').hasClass('closed')) {
		$(selector).height($(window).height());
	} else {
		$(selector).height($(window).height() - headerDimensions);
	}
}
$(document).ready(function() {
	calcHeight();
});
$(window).resize(function() {
	calcHeight();
}).load(function() {
	calcHeight();
});

$(function() {
	mobileCss = function() {
		if (navigator.userAgent.match(/iPhone/i)
				|| navigator.userAgent.match(/iPod/i)
				|| navigator.userAgent.match(/iPad/i)
				|| navigator.userAgent.match(/Android/i)
				|| navigator.userAgent.match(/Opera Mini/)) {
			$('#dropdown.box-drop ul.list-drop li .popover').css('top',
					'-1000px').css('display', 'none !important');
			$('.view_options').hide();
			$('body').css({
				'height' : 'auto'
			});
			$('html').css({
				'height' : 'auto'
			});
			$('#headerlivedemo').addClass('mobile');
			// $('#frameWrapper').addClass('mobile');
			// $('#iframelive iframe').addClass('mobile');
		}
	};
	mobileCss();
});

$(document)
		.ready(
				function() {
					if (!(navigator.userAgent.match(/iPhone/i)
							|| navigator.userAgent.match(/iPod/i)
							|| navigator.userAgent.match(/iPad/i)
							|| navigator.userAgent.match(/Android/i) || navigator.userAgent
							.match(/Opera Mini/))) {

						var frame = document.getElementById('frame');

						$('ul#responsivator').show();

						$('ul#responsivator li.response').click(function() {

							$('ul#responsivator li').removeClass('active');
							$(this).addClass('active');
							var device = $(this).attr('id');
							$('#iframelive').removeClass().addClass(device);
							frame.src = frame.src;
						});

						$('ul#responsivator li#qr').unbind('click');

						$('.responsive-block').css('left',
								(($(window).width() / 2) - 100) + 'px').show();

						$(window).resize(
								function() {
									$('.responsive-block').css(
											'left',
											(($(window).width() / 2) - 100)
													+ 'px');
								});

					}

				});

$(function() {
	$('.name_template .link-1').click(function() {

		var dd = $('.view_options  dt').siblings('dd');
		var pop = $('#popover2');
		var dropdown = $('#dropdown');
		if (pop.is(':visible')) {
			pop.fadeOut(100);
			return false;
		} else {
			pop.fadeIn(100);
			$('#dt').removeClass("active");
			if (dd.is(':visible')) {
				dd.fadeOut(100);
			}
			if (dropdown.is(':visible')) {
				dropdown.fadeOut(100);
				return false;
			}
			return false;
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$("#advanced").css({
				position : 'relative'
			});
		} else {
			$("#advanced").css({
				position : 'relative'
			});
		}
	});

	$("#advanced").css({
		marginTop : '0px'
	}).removeClass('closed');
	$("#advanced .trigger").toggle(
			function() {
				$(this).find('em').parent().parent('#advanced').addClass(
						'closed').animate({
					marginTop : '-53px'
				}, "fast", function() {
					calcHeight();
				});
				strCookies2 = $.cookie("panel2", null);
				strCookies = $.cookie("panel", 'boo');
			},
			function() {
				$(this).find('em').parent().parent('#advanced').removeClass(
						'closed').animate({
					marginTop : '0px'
				}, "fast", function() {
					calcHeight();
				})
				strCookies2 = $.cookie("panel2", 'opened');
				strCookies = $.cookie("panel", null);
			});
	if ($(window).scrollTop() > 0) {
		$("#advanced").css({
			position : 'relative'
		});
	} else {
		$("#advanced").css({
			position : 'relative'
		});
	}

	$('.trigger').click(function() {
		$('.view_options dd').fadeOut(100);
	})
	$('.trigger').click(function() {
		$('.buy_now').removeClass("open");
	})

	// $('.view_options a')
	// .click(function(){
	// var th=$(this)
	// ,img=$('img',this)
	// ,holder=th.parents('.view_options')
	// th.parent().addClass('active').siblings().removeClass('active')
	// holder.find('dt img').attr({src:img.attr('src')})
	// holder.find('dd').fadeOut()
	// holder.find('dt').removeClass('active')
	// })

	$('.view_options  dt').click(function() {
		var dd = $(this).siblings('dd');
		var pop = $('#popover2');
		var dropdown = $('#dropdown');
		if (dd.is(':visible')) {
			dd.fadeOut(100);
			$(this).removeClass("active");
			return false;
		} else {
			$(this).addClass("active");
			dd.fadeIn(100);
			if (pop.is(':visible')) {
				pop.fadeOut(100);
				return false;
			}
			if (dropdown.is(':visible')) {
				dropdown.fadeOut(100);
				return false;
			}

			return false;
		}
	});

	$('#buy-button').click(function() {

		var dt = $('#dt');
		var dd = $('.view_options  dt').siblings('dd');
		var pop = $('#popover2');
		var dropdown = $('#dropdown');

		if (dropdown.is(':visible')) {
			dropdown.fadeOut(100);
			return false;
		} else {
			dt.removeClass('active');
			dropdown.fadeIn(100);
			if (pop.is(':visible')) {
				pop.fadeOut(100);
				return false;
			}
			if (dd.is(':visible')) {
				dd.fadeOut(100);
				return false;
			}
			return false;

		}

	});

	var ua = navigator.userAgent;

	$(document).click(function(e) {
		$('#dd').fadeOut(100);
		$('#dt').removeClass("active");
	});

	$('.link-1').hover(function() {
		$(this).find('span').css('background-position', '-188px -39px');
	}, function() {
		$(this).find('span').css('background-position', '-188px -6px');
	});
	$('#dt').hover(function() {
		$(this).find('span').css('background-position', '-193px -41px');
	}, function() {
		$(this).find('span').css('background-position', '-193px -8px');
	});

	$(document).click(function(e) {
		if ($('#popover2').is(':visible')) {
			$('#popover2').fadeOut(100);
		}
		if ($('#dropdown').is(':visible')) {
			$('#dropdown').fadeOut(100);
		}
	});
	if ($.browser.msie) {
		$('body').addClass('ie');
	}
	if (($.browser.msie) && ($.browser.version == '9.0')) {
		$('body').addClass('ie9');
	}
});

$('#dropdown.box-drop ul.list-drop li a').hover(
		function() {
			$(this).siblings('.popover').css('opacity', '1').css('z-index',
					'999');
		},
		function() {
			$('#dropdown.box-drop ul.list-drop li .popover')
					.css('opacity', '0').css('z-index', '-999');
		});

$('.trigger').click(function() {
	$('#popover2, #dd, #dropdown').hide();
});

var cssFix = function() {
	var u = navigator.userAgent.toLowerCase(), addClass = function(el, val) {
		if (!el.className) {
			el.className = val;
		} else {
			var newCl = el.className;
			newCl += (" " + val);
			el.className = newCl;
		}
	}, is = function(t) {
		return (u.indexOf(t) != -1)
	};
	addClass(
			document.getElementsByTagName('html')[0],
			[
					(!(/opera|webtv/i.test(u)) && /msie (\d)/.test(u)) ? ('ie ie' + RegExp.$1)
							: is('firefox/2') ? 'gecko ff2'
									: is('firefox/3') ? 'gecko ff3'
											: is('gecko/') ? 'gecko'
													: is('opera/9') ? 'opera opera9'
															: /opera (\d)/
																	.test(u) ? 'opera opera'
																	+ RegExp.$1
																	: is('konqueror') ? 'konqueror'
																			: is('safari/') ? 'webkit safari'
																					: is('mozilla/') ? 'gecko'
																							: '',
					(is('x11') || is('linux')) ? ' linux' : is('mac') ? ' mac'
							: is('win') ? ' win' : '' ].join(" "));
}();
