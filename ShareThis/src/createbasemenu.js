/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is released under the MIT license
	Version: 0.0.1
	File: src/createbasemenu.js
*/

ShareThis.CreateBaseMenu=function(){
	//create the base element
	var element=document.createElement('div');
	element.setAttribute('id','share-this-base');
	element.setAttribute('class',
		this.Layout.className+' share-this-base-'+this.Layout.alignment);

	//create the base list
	var baselist=document.createElement('ul');
	baselist.setAttribute('id','share-this-base-list');

	//bind the list to the base element
	element.appendChild(baselist);

	//calculate the necessary width
	//TODO: Fix this part to support different kinds of positioning
	var width=this.Layout.columnCount*(
		this.Layout.columnWidth+(
			2*this.Layout.columnPadding
		)
	);

	//bind the base element to the page body
	var body=document.getElementsByTagName('body')[0];
	body.appendChild(element);

	//change the width of the base element
	//Is this necessary???
	$(element).width(width);
}
