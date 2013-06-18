/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/addanimations.js
*/

ShareThis.AddAnimations=function(){
	//TODO: Remove the jQuery dependency
	//TODO: Add support for different positioning
	//TODO: Add the submenu animations
	//first, we must resize the submenues
	$('#share-this-base-list').children().height(48);

	//now we'll store the current width of the base
	this.BaseWidth=$('#share-this-base').width();
	
	//then we'll store the base to a local variable
	var base=$('#share-this-base');

	//add base animations
	base.mouseenter(function(){
		base.animate({
			'width':this.BaseWidth+'px'
		},'slow');
		base.clearQueue(); //this is necessary to prevent an awful bug
	});
	base.mouseleave(function(){
		base.animate({
			'width':'20px',
		},'slow');
		base.clearQueue(); //this is necessary to prevent an awful bug
	});
}
