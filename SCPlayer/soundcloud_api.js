/*
	Soundcloud JS API. Copyright 2011 Ogge
*/

Soundcloud=function(trackId){
	this.TrackID=trackId;
	this.Server='http://player.soundcloud.com/';
	this.PlayerFile='player.swf';
	this.ApiURL='http://api.soundcloud.com/tracks/';
	this.OtherParameters='&show_comments=true&auto_play=false&color=f77';

	if(
		!window.jQuery||
		window.jQuery!=$||
		!window.SWFObject
	){
		this.Error();
		return;
	}

	this.Write=function(elementId){
		if(!$('#'+elementId)){
			this.Error();
			return;
		}
		var width=$('#'+elementId).width();
		var so=new SWFObject(
			this.Server+
			this.PlayerFile+
			'?url='+
			this.ApiURL+
			this.TrackID+
			this.OtherParameters,

			'mpl',
			width,
			'81',
			'9');
		so.addParam('allowscriptaccess','always');
		so.write(elementId);
	};
}
