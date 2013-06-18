Init=function(){
	$("#scoreDiv").hide();
	$("#waiter").hide();
	$("#waiter").show();
	ShowScore();
}
	
ShowScore=function(Uniquenum){
	$.getJSON('/Webdesign/getScores.php',function(data){
		ClearTree(document.getElementById('scoreList'));
		for(var item in data){
			var element=document.createElement('li');
			element.innerHTML="";
			element.innerHTML=data[item].timestamp+": "+data[item].name+" - <span class='highlight'>"+data[item].points+" poäng</span>";

			document.getElementById('scoreList').appendChild(element);
		}
		$("#waiter").hide();
	});
	$("#scoreDiv").show("slow");
}
ClearTree=function(tree){
	if(tree.hasChildNodes()){
		while(tree.childNodes.length>=1){
			tree.removeChild(tree.firstChild);       
		}
	}
}
$(document).ready(function(){
	Init();
});
