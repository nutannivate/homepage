/*
	ShareThis - A Social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/errormessage.js
*/

ShareThis.ErrorMessage=function(){
	var message='Oops. It seems like an unexpected error has occured. '+
				'We apologize for the inconvenience';
	var popup=new NiceAlerts.ErrorPopup(message);
	popup.Show({'modal':true});
}
