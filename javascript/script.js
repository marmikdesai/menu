function hei(){
	var lef = $('.mai1');
	var hei1 = $(".mai1").outerWidth();
	$('.mai1').css({'height': hei1 + 'px'});
	$('.mai').css({'opacity': '1'});
	$('.mai1 a').css({'height': hei1 + 'px'});

}
function mam(){
	var sli2 = $(".sli1").outerWidth();
	var righsl2 = ($(window).width());
	$('.sli').css({'left': righsl2 + 'px'});
	$('.sli1').css({'height': sli2 + 'px'});
	$('.sli1 a').css({'height': sli2 + 'px'});
}
function slid(){
	$('.mai1').each(function(i) {
		$(this).attr("id", 'ma_' + [i]);
	});
	$('.mai1 a').click(function(){
		var clicked_element = $(this).attr("id")+"-next";
		alert(clicked_element);
		var div = $(".sli");
			var righsl1 = ($(window).width());
		$(".mai").animate({
		
			left: -righsl1,
			display: 'none'
		}, 800, function (){
			$(".sli").animate({
				opacity: 1,
				visibility: 'visible',
				left: 0
			}, 800);
			$(".sli1").css("display","none");
		//	console.log(clicked_element);
			$("."+clicked_element).css("display","block");
		});
	});
}
function nare(){
	$('.nav a').click(function(){
		var div = $(".sli");
			var righsl1 = ($(window).width());
		$(".sli").animate({
		
			left: righsl1,
			display: 'none',
			visibility: 'hidden',
		}, 800, function (){
			$(".mai").animate({
				opacity: 1,
				visibility: 'visible',
				left: 0
			}, 800);
		});
	});
}
$(document).ready(function(){
	nare();
	hei();
	mam();
	slid();
});