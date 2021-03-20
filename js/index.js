// 第一部分菜单显示与隐藏
$(document).ready(function() {
	$(".click").click(function() {
		$(".list-tab").slideToggle(1000);
	});
});
// ipad切换
$(document).ready(function() {
	$(".list-tab li").click(function() {
		$(".list-tab li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".tab-list").hide().eq($(this).index()).show();
	});
});
// //第二区域Tab
$(document).ready(function() {
	$(".list-tab2 li").click(function() {
		$(".list-tab2 li").eq($(this).index()).addClass("active2").siblings().removeClass('active2');
		$(".tab-list2").hide().eq($(this).index()).show();
	});
});