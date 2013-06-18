/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/core.js
*/

ShareThis=function(settings){
	//this function should only call the ShareThis.Initialize function
	this.Initialize(settings);
}
ShareThis.Initialize=function(settings){
	//initial execution test
	if(!this.InitialTest(settings)){
		this.ErrorMessage(this.TestResult);
		return;
	}
	
	//if we've come this far, everything is OK
	
	//store some settings locally
	this.ImagePath=settings.imagePath;
	this.Items=settings.items;
	this.Layout=settings.layout;
	
	//build the ShareThis menu
	this.BuildMenu();
	
	//add the animations
	this.AddAnimations();
	
	//this ends the Initialize function
}
