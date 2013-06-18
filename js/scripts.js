var Sharebox={};
/*
	This file contains the javascript that animates the share-this box
	on pages using this template. To change the name and the side of 
	the share box, edit the values 
		* Sharebox.ElementId and 
		* Sharebox.Side 
	below. Remember to also edit the .css file if you have changed the
	share box id in the HTML template!
*/
Sharebox.ElementId='share-this'; //this value must be a valid HTML id
Sharebox.Side='right'; //this value must be either right or left

/************** DO NOT EDIT ANYTHING BELOW THIS LINE! **************/

Sharebox.ErrorMessage=function(){
	alert(
			'Ooops! Something went terribly wrong. I can '+
			'assure you that it was really not supposed '+
			'to happen. Our super-intelligent tech support '+
			'dwarves are en route to your location to fix '+
			'this ashaming bug!'
	);
	return;
};
Sharebox.Initialize=function(){
	if(
		!window.jQuery||
		window.jQuery!=$
	){
		Sharebox.ErrorMessage();
	}
	Sharebox.Element=$('#'+Sharebox.ElementId);
	Sharebox.ElementWidth=Sharebox.Element.width();
	/*Sharebox.Element.children().mouseenter(function(){
		if(Sharebox.Visible==true) return;
		Sharebox.Visible=true;
		Sharebox.AnimateShow();
	});*/
	Sharebox.Element.mouseenter(function(){
		console.log('mouseenter');
		//if(Sharebox.Visible==true) return;

		//Sharebox.Visible=true;

		Sharebox.AnimateShow();
	});
	Sharebox.Element.mouseleave(function(){
		console.log('mouseleave');
		//if(Sharebox.Visible==false) return;

		//Sharebox.Visible=false;

		Sharebox.AnimateHide();
	});
	
	//Initial hide
	Sharebox.AnimateHide();
};
Sharebox.Visible=false;
Sharebox.AnimateShow=function(){
	var e=Sharebox.Element;
	var width=Sharebox.ElementWidth;
//	e.delay(400);
	e.animate({
		'width':width+'px'
		//'right':width+'px'
	},'slow');
	e.clearQueue();
};
Sharebox.AnimateHide=function(){
	var e=Sharebox.Element;
	var width=Sharebox.ElementWidth;
//	e.delay(400);
	e.animate({
		'width':'0px'
		//'right':'-'+(width+5)+'px'
	},'slow');
	e.clearQueue();
};

$(document).ready(function(){Sharebox.Initialize();});





