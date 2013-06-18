/*
	ShareThis - A social media sharing script for your website
	Copyright 2011 Ogge
	File: sharethis-tests-0.0.1-alpha.js
*/
var Test={
	tests:[
		"var item=new ShareThis.Item('Bäver','http://facebook.com','Social_Facebook.png','En knubbig liten bäver');",
		//"console.log(item);",
		"var items=[item,item];",
		//"console.log(items);",
		"var st=new ShareThis({'imagePath':'./images/',layout:{'alignment':'right','className':'share-this','columnCount':1,'columnWidth':48,'columnPadding':8},'items':items});",
		"console.log(st)"
	],
	run:function(){
		for(var test in Test.tests){
			console.log(Test.tests[test]);
			eval(Test.tests[test]);
		}
	}
};
	
