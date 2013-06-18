/*
	NiceAlerts
	File: nicealerts-0.0.1-alpha.js
*/

NiceAlerts=function(settings){
	this.ErrorMessage=function(){
		alert('Oops. Something really bad happened with NiceAlerts..');
	};
	this.Show=function(){
		if(this.Settings.modal==true)
			this.CreateModal(true);
		this.CreateAlert();
	};
	this.CreateModal=function(create){
		var element=undefined;

		if(document.getElementById('nicealerts-modal')!=undefined)
			element=document.getElementById('nicealerts-modal');
		else{
			element=document.createElement('div');
			element.setAttribute('id','nicealerts-modal');
		}

		CSSUtils.AddClass(element,'nicealerts-hidden');

		if(
			create!=undefined&&
			create==true
		){
			this.ShowModal();
		}
	};
	this.ShowModal=function(){
		var element=document.getElementById('nicealerts-modal');
		if(element==undefined){
			this.CreateModal(true);
			return;
		}
		CSSUtils.AddClass(element,'nicealerts-shown');
		if(CSSUtils.HasClass(element,'nicealerts-hidden'))
			CSSUtils.RemoveClass(element,'nicealerts-hidden');
	};


	this.Initialize=function(settings){
		if(typeof(settings)!='object'){
			this.ErrorMessage();
			return;
		}
		this.Settings=settings;
	};
	this.Initialize(settings);
}
