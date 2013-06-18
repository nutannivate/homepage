/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is released under the MIT license
	Version: 0.0.1
	File: src/finditem.js
*/

ShareThis.FindItem=function(itemname){
	//loop through all items
	for(var item in this.Items){
		//check if the name of the current item is equal to the name to find
		if(itemname==this.Items[item].Name)
			return this.Items[item];
	}
	return undefined;
}
