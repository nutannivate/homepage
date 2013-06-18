DefaultVideo="http://www.youtube.com/watch?v=857zrsYZKGo";
/////////////////////////////////////i
getVideo=function(){
	var str=window.location.hash;
	if(
		str.indexOf('video=http://')===-1||
		str.indexOf('youtube.com/watch?v=')===-1
	){
		return false;
	}else
		str=str.substr(7);
	return str;
}

createPlayer=function(vidUrl){
	$("#jwp-flash").hide("slow");
	jwplayer("jwp-flash-inner").setup({
		flashplayer:"/Webdesign/flash/player.swf",
		file:vidUrl,
		width:780,
		height:439
	});
	$("#jwp-flash").show("slow");
}
videoswitch=function(){
	var url=$("#ytUrl").val();
	window.location.hash="video="+url;
	window.location=window.location;
	Init();
}
Init=function(){
	var video=getVideo();
	if(video!==false)
		createPlayer(video);
	else{
		createPlayer(DefaultVideo);
		window.location.hash="video="+DefaultVideo;
	}
}
$(document).ready(function(){
	Init();
	$("#ytForm").submit(function(e){
		videoswitch();
		e.preventDefault();
	});
});
