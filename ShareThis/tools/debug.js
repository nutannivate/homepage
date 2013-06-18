/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: tools/debug.js
*/
var SuccessCount=0;
var Tests=[
	{
		'Name':'Checking if ShareThis class is available',
		'Code':'ShareThis!=undefined'
	},
	{
		'Name':'Checking if function ShareThis.AddAnimations is available',
		'Code':'ShareThis.AddAnimations!=undefined'
	},
	{
		'Name':'Checking if ShareThis.BuildMenu is available',
		'Code':'ShareThis.BuildMenu!=undefined'
	},
	{
		'Name':'Checking if ShareThis.CreateBaseMenu is available',
		'Code':'ShareThis.CreateBaseMenu!=undefined'
	},
	{
		'Name':'Checking if ShareThis.CreateMenu is available',
		'Code':'ShareThis.CreateMenu!=undefined'
	},
	{
		'Name':'Checking if ShareThis.ErrorMessage is available',
		'Code':'ShareThis.ErrorMessage!=undefined'
	},
	/*{
	},
	{
	},
	{
	},
	{
	},
{
},
{
},
{
},
{
},
{
},
{
},
{}{}{}{}{}{}{}{}{}*/
];
var ShareThisFunctions=[
	'AddAnimations',
	'BuildMenu',
	'CreateBaseMenu',
	'CreateMenu',
	'ErrorMessage',
	'FindItem',
	'GenerateLink',
	'InitialTest'
];

log=function(message){
	var logg=document.getElementById('share-this-log');
	logg.innerHTML+=message+'\n';
	console.log(message);
}
InitDebug=function(){
	log('Starting ShareThis debug session at '+new Date());
	log('Initializing test loop');
	TestLoop();
}

TestLoop=function(){
	for(var test in Tests){
		var code=Tests[test].Code;
		var result=eval(code);
		var name=Tests[test].Name;
		log(name+' ==> '+(result?'Success':'Fail'));
		Tests[test].Result=result;
		if(result==true)
			SuccessCount++;
	}
}
