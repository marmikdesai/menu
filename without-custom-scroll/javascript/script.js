/*!
 * Facebook Style Mobile Menu
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
 
$(document).ready(function(){
	swip();
	menuClick();
	$('.mai1 a').addClass('notClick');
	b();
	bodyClick();
});
function menuOpen(){
	$('.sli').removeClass('close').addClass('open');
	$('.mai1').css({'left': 260 + 'px'});
	$('.mai1').css({'overflow': 'hidden'});
	var heh = ($(window).height());
	$('.sli').css({'height': heh + 'px'});
};
function menuClose(){
	$('.mai1 a').removeClass('click').addClass('notClick');
	$('.sli').removeClass('open').addClass('close');
	$('.mai1').css({'left': 0 + 'px'});
	$('.mai1').css({'overflow': 'auto'});
};
function menuClick(){
	$('.mai1 a').on("click touchstart", function(){
		if ($(this).hasClass("notClick")) {
			$('.mai1 a').removeClass('notClick').addClass('click');
			$('.sli').removeClass('close').addClass('open');
			$('.mai1').css({'left': 260 + 'px'});
			$('.mai1').css({'overflow': 'hidden'});
			var heh = ($(window).height());
			$('.sli').css({'height': heh + 'px'});
			return false;
		} else {
			$('.mai1 a').removeClass('click').addClass('notClick');
			$('.sli').removeClass('open').addClass('close');
			$('.mai1').css({'left': 0 + 'px'});
			$('.mai1').css({'overflow': 'auto'});
			return false;
		}
	});
};
function bodyClick(){
	$(".wrapper, .sli").on("click touchstart", function(){
		console.log(34);
		if ($('.sli').hasClass("open")) {
			console.log(36);
			menuClose();
			return false;
		}
	});
}
function swip() {
	$('.mai1').swipe( {
		swipe:function(event, direction, distance, duration, fingerCount) {
			var dire = direction;
			var ri = 'right';
			var le = 'left';
			if (dire == ri){
				if ($(this).find('a').hasClass("notClick")){
					$('.mai1 a').removeClass('notClick').addClass('click');
				};
				menuOpen();
			} else if(dire == le){
				menuClose();
			}
		},
		threshold:0
	});
};
function b(){
	$(".mnu1 ul li").on("click touchstart", function(){
		if ($(".mnu1 ul li").hasClass("act")) {
			$(".mnu1 ul li").removeClass("act");
			$(this).addClass("act");
			$(".act ul").css({
				"visibility": "visible",
				"left": 0,
				"background": "rgb(164, 64, 184)"
			});
			c();
		} else if (!($(".mnu1 ul li").hasClass("act"))) {
			$(this).addClass("act");
			$(".act ul").css({
				"visibility": "visible",
				"left": 0,
				"background": "rgb(164, 64, 184)"
			});
			c();
		}
	});
}
function c(){
	$(".act ul li:first-child").on("click touchstart", function(){
		$(".mnu1 ul li ul").css({
			"visibility": "hidden",
			"left": -260,
			"background": "rgb(224, 203, 50)"
		});
		return false;
	});
}