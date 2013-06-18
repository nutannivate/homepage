/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/buildmenu.js
*/

ShareThis.BuildMenu=function(){
	//create the base menu
	this.CreateBaseMenu();

	//TODO:Fix this function to split items equally over the submenues
	var columns=[];
	var x=0;
	columns[x]=this.CreateMenu(0,0,0);
	console.log(columns);

	//add the columns to the base
	var base=document.getElementById('share-this-base-list');
	for(var column in columns){
		console.log(columns[column]);
		base.appendChild(columns[column]);
	}
}
