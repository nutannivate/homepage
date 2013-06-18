/*
	ShareThis - A Social media sharing script for your website.
	Copyright 2011 Ogge
	File: sharethis-0.0.1-alpha.js 
*/

ShareThis=function(settings){
	this.ErrorMessage=function(){
		var message='Oops. It seems like an unexpected error has occured. '+
					'We apologize for the inconveniece'; 
		new ErrorPopup(message).Show({'modal':true});
	}
	this.CheckFunctionality=function(){
		var test1 = window.jQuery!=undefined;
		var test2 = $!=undefined;
		var test3 = $==window.jQuery;
		console.log('window.jQuery!=undefined ==> '+test1);
		console.log('$!=undefined ==> '+test2);
		console.log('$==window.jQuery ==> '+test3);
		return (test1 && test2 && test3);
	};
	this.GenerateLink=function(itemname){
		var item={};
		if(itemname.Name!=undefined){
			item=itemname;
		}else{
			item=this.FindItem(itemname);
		}
		//create all elements
		var listitem=document.createElement('li');
		var linkitem=document.createElement('a');
		var imgitem=document.createElement('img');
		
		//assign src and alt to imgitem
		imgitem.setAttribute('src',this.ImagePath+item.Image);
		imgitem.setAttribute('alt',item.Alternative);

		//assign href to linkitem
		linkitem.setAttribute('href',item.Href);

		//assign classes to listitem
		listitem.setAttribute('class','share-this-item');

		//bind imgitem to linkitem
		linkitem.appendChild(imgitem);

		//bind linkitem to listitem
		listitem.appendChild(linkitem);

		//return listitem
		return listitem;
	};
	this.BuildMenu=function(){
		this.CreateBaseMenu();
		//var itemsPerColumn=Math.ceil(this.Items.length/this.Layout.columncount);
		var columns=[];
		var x=0;
		//for(var x=0;x<itemsPerColumn;x++){
			columns[x]=this.CreateMenu(0,0,0);
		//}
		console.log(columns);
		var base=document.getElementById('share-this-base-list');
		for(var column in columns){
			console.log(columns[column]);
			base.appendChild(columns[column]);
		}
	};
	this.CreateMenu=function(menuId,itemCount,startItem){
		startItem=0;
		itemCount=this.Items.length;
		var container=document.createElement('li');
		container.setAttribute('class','share-this-menu');
		container.setAttribute('id','share-this-menu-'+menuId);
		
		var list=document.createElement('ul');
		list.setAttribute('class','share-this-list');
		
		for(var x=0;x<itemCount;x++){
			var item=this.Items[x+startItem];
			list.appendChild(this.GenerateLink(item));
		}
		container.appendChild(list);
		return container;
	};
	this.AddAnimations=function(){
		//first, we must resize the subs
		$('#share-this-base-list').children().height(0);

		this.BaseWidth=$('#share-this-base').width();
		var base=$('#share-this-base');

		//base animations
		base.mouseenter(function(){
			base.animate({
				'width':this.BaseWidth+'px'
			},'slow');
			base.clearQueue();
		});
		base.mouseleave(function(){
			base.animate({
				'width':'20px'
			},'slow');
			base.clearQueue();
		});
	};
	this.CreateBaseMenu=function(){
		var element=document.createElement('div');
		element.setAttribute('id','share-this-base');
		element.setAttribute('class',
			this.Layout.className+' share-this-base-'+this.Layout.alignment);

		var subElement=document.createElement('ul');
		subElement.setAttribute('id','share-this-base-list');

		element.appendChild(subElement);

		var width=this.Layout.columnCount*(
			this.Layout.columnWidth+(
				2*this.Layout.columnPadding
			)
		);
		var body=document.getElementsByTagName('body')[0];
		body.appendChild(element);
		$(element).width(width);
		//console.log(element);
	};
	this.FindItem=function(itemname){
		for(var item in this.Items){
			console.log(this.Items[item]);
			console.log(itemname);
			if(itemname==this.Items[item].Name){
				return this.Items[item];
			}
		}
		return undefined;
	}
	this.Initialize=function(settings){
		if(settings==undefined){
			this.ErrorMessage();
			return;
		}
		this.ImagePath=settings.imagePath;
		this.Items=settings.items;
		this.Layout=settings.layout;

		this.BuildMenu();
		this.AddAnimations();
		console.log(document.getElementById('share-this-base'));
	};



	//this ends the ShareThis class
	this.Initialize(settings);
}
ShareThis.Item=function(name,href,image,alternative){
	this.Name=name;
	this.Image=image;
	this.Alternative=alternative;
	this.Href=href;
}

