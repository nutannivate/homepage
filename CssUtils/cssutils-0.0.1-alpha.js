/*
	CssUtils - Some CSS utilities for javascript
	Author: Oscar Nygren<o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1-alpha
*/

var CssUtils={
	HasClass:function(element,className){
		var regex=new RegExp('(\\s|^)'+className+'(\\s|$)');
		return element.className.match(regex);
	},
	AddClass:function(element,className){
		if(!this.HasClass(element,className))
			element.classname+=' '+className;
	},
	RemoveClass:function(element,classname){
		if(this.HasClass(element,className)){
			var regexp=new RegExp('(\\s|^)'+className+'(\\s|$)');
			element.className=element.className.replace(regexp,'');
		}
	}
}
 
