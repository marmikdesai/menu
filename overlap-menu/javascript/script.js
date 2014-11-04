/*!
 * Mobile Menu Overlap on body
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
 
$(document).ready(function(){
	swip();
	menuClick();
	$('.mai1 a').addClass('notClick');
	b();
});
function menuOpen(){
	$('.sli').removeClass('close').addClass('open');
	$('.sli').css({'left': 0 + 'px'});
	$('.mai1').css({'left': 500 + 'px'});
	var heh = ($(window).height());
	$('.sli').css({'height': heh + 'px'});
};
function menuClose(){
	$('.mai1 a').removeClass('click').addClass('notClick');
	$('.sli').removeClass('open').addClass('close');
	$('.sli').css({'left': -500 + 'px'});
	$('.mai1').css({'left': 0 + 'px'});
};
function menuClick(){
	$('.mai1 a').click(function(){
		if ($(this).hasClass("notClick")) {
			$('.mai1 a').removeClass('notClick').addClass('click');
			$('.sli').removeClass('close').addClass('open');
			$('.sli').css({'left': 0 + 'px'});
			$('.mai1').css({'left': 500 + 'px'});
			var heh = ($(window).height());
			$('.sli').css({'height': heh + 'px'});
		} else {
			$('.mai1 a').removeClass('click').addClass('notClick');
			$('.sli').removeClass('open').addClass('close');
			$('.sli').css({'left': -500 + 'px'});
			$('.mai1').css({'left': 0 + 'px'});
		}
	});
};
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
	$(".mnu1 ul li").click(function(){
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
	$(".act ul li:first-child").click(function(){
		$(".mnu1 ul li ul").css({
			"visibility": "hidden",
			"left": -500,
			"background": "rgb(224, 203, 50)"
		});
		return false;
	});
}