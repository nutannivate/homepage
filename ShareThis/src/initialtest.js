/*
	ShareThis - A social media sharing script for your website
	Author: Oscar Nygren <o.nygren@gmail.com>
	License: This code is licensed under the MIT license
	Version: 0.0.1
	File: src/initialtest.js
*/

ShareThis.InitialTest=function(settings){
	var Tests=[
		'settings!=undefined',
		'typeof(settings)=="object"',
		'settings.imagePath!=undefined',
		'settings.items!=undefined',
		'typeof(settings.items)=="Array"',
		'settings.layout!=undefined',
		'typeof(settings.layout)=="object"',
	];
	var TestResults=[];

	//run all tests
	for(var test in Tests){
		var testResult=eval(Tests[test]);
		console.log(Tests[test]+' ==> '+testResult);
		TestResults[test]=testResult;
	}

	//check if any of the tests have failed
	var failed=0;
	for(var result in TestResults){
		if(Testresult[result]==false)
			failed++;
	}
	//print a debug message
	if(failed>0)
		console.log(failed+' of '+Tests.length+' failed');
	else
		console.log('All tests was passed successfully');

	//if failed equals zero, no test failed
	return failed==0;
}
