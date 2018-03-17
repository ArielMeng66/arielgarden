var $navlist = $('#nav-list'),
	$topnav = $('#top-nav'),
	$menubtn = $('#menu-btn');

if(menuLocation){
	$navlist.find("[date-key="+ menuLocation +"]").addClass('active')
	.siblings().removeClass('active');
}


$('#top-nav-inner').hover(function(){
	if($menubtn.is(':visible')){
		$navlist.slideDown(100);
		$topnav.addClass('show');
	}
},function(){
	if($menubtn.is(':visible')){
		$navlist.slideUp(100);
		$topnav.removeClass('show');
	}
});