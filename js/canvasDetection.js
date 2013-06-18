SupportCanvas=function(){
	return !!document.createElement('canvas').getContext;
}
SupportCanvasText=function(){
	if(!SupportCanvas()) return;
	var dummyCanvas=document.createElement('canvas');
	var cxt=dummyCanvas.getContext('2d');
	return typeof cxt.fillText == 'function';
}

