/*
	ShareThis - A Social media sharing script for your website
	Copyright 2011 Ogge
	File: sharethis-sampleimplementation-0.0.1-alpha.js
*/

/*
	First, we create the necessary items. In this case we will use
	Facebook and Twitter. The items are instances of the 
	ShareThis.Item class. The items must be stored inside an array.
*/
var items=[
	new ShareThis.Item(
		'Facebook',
		'http://facebook.com',
		'Social_Facebook.png',
		'Share this on Facebook'
	),
	new ShareThis.Item(
		'Twitter',
		'http://twitter.com',
		'Social_Twitter.png',
		'Share this on Twitter'
	),
];

/*
	Now, we create an instance of the ShareThis class. Remember that it
	is only allowed to use one instance of the ShareThis class on each
	page. The only parameter for the constructor is an anonymous object
	where the settings for ShareThis is stored.
*/
var sharethis=new ShareThis({
	'imagePath':'./images/', //this specifies where to find the images
	'layout':{ //this is an object where all layout properties are stored
		'alignment':'left', //this specifies which window border place 
							//ShareThis on. Currently only right and left
							//are supported
		'className':'share-this',	//this specifies which CSS classes to 
									//use on the base 'drawer'
		'columnCount':1, //Specifies the number of columns to use
		'columnWidth':48, //Specifies the width of each column
		'columnPadding':8,	//Specifies the thickness of each columns 
							//padding
	},
	'items':items	//this specifies the items to use. The value should be
					//an array.
});
