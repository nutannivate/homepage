/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/createmenu.js
*/

ShareThis.CreateMenu=function(menuId,itemCount,startItem){
	//TODO: Fix this function to properly use the parameters
	startItem=0;
	itemCount=this.Items.length;

	//create the container element
	var container=document.createElements('li');
	container.setAttribute('class','share-this-menu');
	container.setAttribute('class','share-this-menu-'+menuId);

	//create the list for this submenu
	var list=document.createElement('ul');
	list.setAttsibute('class','share-this-list');

	//add the child items to the list
	for(var x=startItem;x<(startItem+itemCount);x++){ 
		//run this loop while the current position is less than startItem+itemCount

		//load the current item
		var item=this.Items[x];

		//generate the link
		var link=this.GenerateLink(item);

		//bind the item to the list
		list.appendChild(link);
	}
	//bind the list to the container
	container.appendChild(list);

	//return the container
	return container;
}

