/*
	ShareThis - A Social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/generatelink.js
*/

ShareThis.GenerateLink=function(itemname){
	var item={};
	if(
		typeof(itemname)=='object'||
		typeof(itemname)=='ShareThis.Item'
	){
		item=itemname;
	}else
		item=this.FindItem(itemname);

	//now we've got an item stored. Lets make a link out of it

	//create all elements
	var listitem=document.createElement('li');
	var linkitem=document.createElement('a');
	var imgitem=document.createElement('img');

	//assign src and alt to imgitem
	imgitem.setAttribute('src',this.ImagePath+item.Image);
	imgitem.setAttribute('alt',item.Alternative);

	//assign href and classes to linkitem
	linkitem.setAttribute('href',item.Href);
	listitem.setAttribute('class','share-this-item');

	//bind imgitem to linkitem
	linkitem.appendChild(imgitem);

	//bind linkitem to listitem
	linkitem.appendChild(linkitem);

	//return the list item
	return listitem;
}
