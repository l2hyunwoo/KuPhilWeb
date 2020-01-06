$(document).ready(function(){

	var wid = $(".nButton").css("height");
	$(".nButton").css("width",wid);

	$(".nlists").each(function(){
		var dl=$(this);
		var alldt=dl.find("dt");

		function closeAll(){
			alldt.addClass("closed");
		}
		function open(dt){
			dt.removeClass("closed");
		}
		closeAll();
		alldt.click(function(){
			var dt=$(this);
			closeAll();
			open(dt);
		});
	});


});
$(window).resize(function(){
	var wid = $(".nButton").css("height");
	$(".nButton").css("width",wid);
});


function setTextLocation(){
	
};