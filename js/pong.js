Clone=function(obj){
	return jQuery.extend(true,{},obj);
}

//The canvas element
var Element=undefined;

//The canvas context
var Canvas=undefined;

//Points
var Points=0;

//Point
var Point=1;

//The bouncer
var Bouncer={
	X:150,		//Xposition
	Y:150,		//Yposition
	SizeX:10,	//Xsize
	SizeY:10,	//Ysize
	DirX:1,		//Xdirection
	DirY:1,		//Ydirection
	Speed:1		//Speed
}

//Paddle1
var Paddle1={
	X:10,
	Y:50,
	SizeX:10,
	SizeY:50,
	Used:0
}

//Paddle2
var Paddle2={
	X:760,
	Y:50,
	SizeX:10,
	SizeY:50,
	Used:0
}

//Paddle3
var Paddle3={
	X:50,
	Y:10,
	SizeX:50,
	SizeY:10,
	Used:0
}

//Paddle4
var Paddle4={
	X:50,
	Y:480,
	SizeX:50,
	SizeY:10,
	Used:0
}

//Mouse
var Mouse={
	X:0,
	Y:0
}

//Default values
var StartValues={
	Points:Points,
	Point:Point,
	Bouncer:Clone(Bouncer),
	Paddle1:Clone(Paddle1),
	Paddle2:Clone(Paddle2),
	Paddle3:Clone(Paddle3),
	Paddle4:Clone(Paddle4)
};

//Allowed randomized starting positions
minStartX=290;
maxStartX=490;
minStartY=150;
maxStartY=350;

//Canvas dimensions
var Width=0;
var Height=0;

//Increase factor
var IncreaseFactor=25;

//Interval handle
var iHandle=undefined;

//Unique result number
var Uniquenum=$.md5(new String((new Date()).getTime()));

DrawPoints=function(){
	Canvas.font="24px 'Trebuchet MS',Verdana,Arial,sans-serif black";
	var pWidth=Canvas.measureText(Points+" poäng").width;
	//console.log(pWidth);
	var pX=(Width/2)-(pWidth/2);
	var pY=(Height/2)-12;
	//console.log("pX:"+pX+"\npY:"+pY);
	Canvas.fillText(Points+" poäng",pX,pY);
}

Random=function(rndMin,rndMax){
	var rnd=Math.floor(Math.random()*1000);
	while(rnd<rndMin||rnd>rndMax)
		rnd=Math.floor(Math.random()*1000);
	return rnd;
}

Rect=function(x,y,w,h){
	//console.log("Rect("+x+","+y+","+w+","+h+")");1
	
	//console.log("\tCanvas.beginPath()");
	Canvas.beginPath();
	
	//console.log("\tCanvas.rect("+x+","+y+","+w+","+h+")");
	Canvas.rect(x,y,w,h);
	
	//console.log("\tCanvas.closePath()");
	Canvas.closePath();
	
	//console.log("\tCanvas.fill()");
	Canvas.fill();
	
	//console.log("\tCanvas.stroke()");
	Canvas.stroke();
}

Clear=function(){
	//console.log("Clear()");

	//console.log("\tCanvas.clearRect(0,0,"+Width+","+Height+")");
	Canvas.clearRect(0,0,Width,Height);
}

FailCheck=function(){
	if(Bouncer.X<=0)
		Fail();
	if(Bouncer.X+Bouncer.SizeX>=Width)
		Fail();
	
	if(Bouncer.Y<=0)
		Fail();

	if(Bouncer.Y+Bouncer.SizeY>=Height)
		Fail();
}

UpdateBouncer=function(){
	pAddX=Bouncer.Speed*Bouncer.DirX;
	pAddY=Bouncer.Speed*Bouncer.DirY;
	
	Bouncer.X+=pAddX;
	Bouncer.Y+=pAddY;
}

UpdatePaddles=function(){
	Paddle1.Y=Mouse.Y-(Paddle1.SizeY/2);
	//Paddle2.Y=(Height+Mouse.Y*-1)-(Paddle2.SizeY/2);
	Paddle2.Y=Mouse.Y-(Paddle2.SizeY/2);
	
	Paddle3.X=Mouse.X-(Paddle3.SizeX/2);
	//Paddle4.X=(Width+Mouse.X*-1)-(Paddle4.SizeX/2);
	Paddle4.X=Mouse.X-(Paddle4.SizeX/2);

	if(Paddle1.Y+Paddle1.SizeY>=Height){
		Paddle1.Y=Height-Paddle1.SizeY;
	}

	if(Paddle1.Y<=(Height-Height)){
		Paddle1.Y=(Height-Height);
	}



	if(Paddle2.Y+Paddle2.SizeY>=Height){
		Paddle2.Y=Height-Paddle1.SizeY;
	}
	
	if(Paddle2.Y<=(Height-Height)){
		Paddle2.Y=(Height-Height);
	}



	if(Paddle3.X+Paddle3.SizeX>=Width){
		Paddle3.X=Width-Paddle3.SizeX;
	}

	if(Paddle3.X<=(Height-Height)){
		Paddle3.X=(Height-Height);
	}



	if(Paddle4.X+Paddle4.SizeX>=Width){
		Paddle4.X=Width-Paddle4.SizeX;
	}

	if(Paddle4.X<=(Height-Height)){
		Paddle4.X=(Height-Height);
	}
}

Update=function(){
	FailCheck();
	UpdateBouncer();
	UpdatePaddles();
	DetectCollisions();
}

DetectCollisions=function(){

	//Test bouncer against Paddle 1
	var coll1X1=Paddle1.X+Paddle1.SizeX;
	var coll1Y1=Paddle1.Y;
	var coll1Y2=Paddle1.Y+Paddle1.SizeY;

	if(Bouncer.X<=coll1X1){
		//console.log(11);
		if(Bouncer.Y>=coll1Y1||Bouncer.Y+Bouncer.SizeY>=coll1Y1){
			//console.log(12);
			if(Bouncer.Y<=coll1Y2){
				//console.log(13);
				if(Paddle1.Used===0){
					Points+=Point;
					console.log(1);
					Bouncer.Speed+=Points/IncreaseFactor;
					Paddle1.Used=1;
					Paddle2.Used=0;
					Paddle3.Used=0;
					Paddle4.Used=0;
				}
				Bouncer.DirX=1;
			}
		}
	}

	//Test bouncer against Paddle 2
	var coll2X1=Paddle2.X;
	var coll2Y1=Paddle2.Y;
	var coll2Y2=Paddle2.Y+Paddle2.SizeY;

	if(Bouncer.X+Bouncer.SizeX>=coll2X1){
		//console.log(21);
		if(Bouncer.Y>=coll2Y1||Bouncer.Y+Bouncer.SizeY>=coll2Y1){
			//console.log(22);
			if(Bouncer.Y<=coll2Y2){
				//console.log(23);
				if(Paddle2.Used===0){
					Points+=Point;
					console.log(2);
					Bouncer.Speed+=Points/IncreaseFactor;
					Paddle1.Used=0;
					Paddle2.Used=1;
					Paddle3.Used=0;
					Paddle4.Used=0;
				}
				Bouncer.DirX=-1;
			}
		}
	}

	//Test bouncer against Paddle 3
	var coll3Y1=Paddle3.Y+Paddle3.SizeY;
	var coll3X1=Paddle3.X;
	var coll3X2=Paddle3.X+Paddle3.SizeX;

	if(Bouncer.Y<=coll3Y1){
		//console.log(31);
		if(Bouncer.X>=coll3X1||Bouncer.X+Bouncer.SizeX>=coll3Y1){
			//console.log(32);
			if(Bouncer.X<=coll3X2){
				//console.log(33);
				if(Paddle3.Used===0){
					Points+=Point;
					console.log(3);
					Bouncer.Speed+=Points/IncreaseFactor;
					Paddle1.Used=0;
					Paddle2.Used=0;
					Paddle3.Used=1;
					Paddle4.Used=0;
				}
				Bouncer.DirY=1;
			}
		}
	}

	//Test bouncer against Paddle 4
	var coll4Y1=Paddle4.Y;
	var coll4X1=Paddle4.X;
	var coll4X2=Paddle4.X+Paddle4.SizeX;

	if(Bouncer.Y+Bouncer.SizeY>=coll4Y1){
		//console.log(41);
		if(Bouncer.X>=coll4X1||Bouncer.X+Bouncer.SizeX>=coll4X1){
			//console.log(42);
			if(Bouncer.X<=coll4X2){
				//console.log(43);
				if(Paddle4.Used===0){
					Points+=Point;
					console.log(4);
					Bouncer.Speed+=Points/IncreaseFactor;
					Paddle1.Used=0;
					Paddle2.Used=0;
					Paddle3.Used=0;
					Paddle4.Used=1;
				}
				Bouncer.DirY=-1;
			}
		}
	}
}

Fail=function(){
	Stop();
	$("#submitPoints").show("slow");
	ShowScore();
}

Draw=function(){
	//console.log("Draw()");

	Clear();

	Canvas.fillStyle="white";
	Canvas.fillRect(0,0,Width,Height);

	Canvas.fillStyle="blue";
	Canvas.strokeStyle="blue";
	Canvas.fillRect(Bouncer.X,Bouncer.Y,Bouncer.SizeX,Bouncer.SizeY);
	Canvas.strokeRect(Bouncer.X,Bouncer.Y,Bouncer.SizeX,Bouncer.SizeY);

	Canvas.fillStyle="green";
	Canvas.fillRect(Paddle1.X,Paddle1.Y,Paddle1.SizeX,Paddle1.SizeY);
	Canvas.fillRect(Paddle2.X,Paddle2.Y,Paddle2.SizeX,Paddle2.SizeY);
	Canvas.fillRect(Paddle3.X,Paddle3.Y,Paddle3.SizeX,Paddle3.SizeY);
	Canvas.fillRect(Paddle4.X,Paddle4.Y,Paddle4.SizeX,Paddle3.SizeY);

	Canvas.strokeStyle="red";
	Canvas.strokeRect(0,0,Width,Height);
}
	
NoCanvasError=function(){
	//console.log("NoCanvasError");

	alert('Oops');
}

Init=function(){
	if(!SupportCanvas())
		return false;
	if(!SupportCanvasText())
		return false;
	//console.log("Init");

	//Get the canvas element
	Element=document.getElementById('html5test');
	
	//Check if HTML5 works
	if(Element.getContext){
		//Get the canvas context
		Canvas=Element.getContext('2d');
	}else{
		//Display an error message and quit
		NoCanvasError();
		return;
	}

	Canvas.canvas.width=$("#html5test").width();
	Canvas.canvas.height=$("#html5test").height();

	Width=Canvas.canvas.width;
	Height=Canvas.canvas.height;
	$("#html5stop").hide();
	$("#html5test").hide();

	$("#html5test").mousemove(MouseHandler);

	$("#submitPoints").hide();
	$("#scoreDiv").hide();

	$("#waiter").hide();

	$("#scoreForm").submit(function(e){
		//alert("FFFFFFFFFUUUUUUUUUUUUUUUUU");
		e.preventDefault();
		SaveResult();
		//alert("FFFFFFFFFUUUUUUUUUUUUUUUUU");
		return false;
	});
	if(window.location.hash=="showScore")
		ShowOtherScore();
}
	
Move=function(){
	//console.log("Move()");

	Update();
	Draw();
	Debug();
	DrawPoints();
}
	
AnimateFunction=function(func){
	//console.log("AnimateFunction("+func+")");
	iHandle=setInterval(func,15);
}

StopAnimate=function(){
	if(iHandle==undefined)
		return false;
	clearInterval(iHandle);
	return true;
}

Toggle=function(){
	$("#html5start").toggle("slow");
	$("#html5stop").toggle("slow");
}

Start=function(anim){
	if(!SupportCanvas()||!SupportCanvasText())
		return false;

	Reset();
	StartX=Random(minStartX,maxStartX);
	StartY=Random(minStartY,maxStartY);

	Bouncer.X=StartX;
	Bouncer.Y=StartY;

	RandomDirection();

	$("#submitPoints").hide("slow");
	$("#score").text("");

	if(anim==undefined||anim===true){
		$("#html5test").show("fast",function(){
			Toggle();
			//console.log("Start()");
			AnimateFunction(Move);
		});
	}else
		AnimateFunction(Move);
}

Stop=function(anim){
	if(StopAnimate()){
		if(anim==undefined||anim===true){
			Toggle();
			$("#html5test").hide("slow");
		}
	}
}
Debug=function(){
	if(window.location.hash!='#debug') return;
	var e=document.getElementById('html5debug');
	e.innerHTML="Bouncer.X:"+Bouncer.X+"\n"+
				"Bouncer.Y:"+Bouncer.Y+"\n"+
				"Bouncer.DirX:"+Bouncer.DirX+"\n"+
				"Bouncer.DirY:"+Bouncer.DirY+"\n"+
				"Bouncer.Speed:"+Bouncer.Speed+"\n"+
				"Mouse.X:"+Mouse.X+"\n"+
				"Mouse.Y:"+Mouse.Y+"\n"+
				"Paddle1.Y:"+Paddle1.Y+"\n"+
				"Paddle1.Used:"+Paddle1.Used+"\n"+
				"Paddle2.Y:"+Paddle2.Y+"\n"+
				"Paddle2.Used:"+Paddle2.Used+"\n"+
				"Paddle3.X:"+Paddle3.X+"\n"+
				"Paddle3.Used:"+Paddle3.Used+"\n"+
				"Paddle4.X:"+Paddle4.X+"\n"+
				"Paddle4.Used:"+Paddle4.Used+"\n"+
				"Points:"+Points+"\n";
}

MouseHandler=function(e){
	var position=$("#html5test").offset();
	Mouse.X=e.pageX-position.left;
	Mouse.Y=e.pageY-position.top;
}

ShowScore=function(){
	$("#score").text("Du lyckades få "+Points+" poäng");
}

SaveResult=function(){
	var Name=$("#namn").val();
	//var Uniquenum=$.md5(new String((new Date()).getTime()));
	
	$.get('/Webdesign/submitScore.php',{name:Name,points:Points,uniquenum:Uniquenum},function(data){
		$("#submitPoints").hide();	
		ShowOtherScore();
		$("#waiter").hide();
	});
	$("#submitPoints").hide();
	$("#waiter").show();
}

ShowOtherScore=function(Uniquenum){
	$.getJSON('/Webdesign/getScores.php',function(data){
		ClearTree(document.getElementById('scoreList'));
		for(var item in data){
			var element=document.createElement('li');
			element.innerHTML="";
			if(Uniquenum==data[item].uniquenum){
				element.innerHTML+="<span class='highlight'>";
			}
			element.innerHTML=data[item].timestamp+": "+data[item].name+" - <span class='highlight'>"+data[item].points+" poäng</span>";
			//element.innerHTML+="<pre>"+data[item].uniquenum+"</pre>";
			if(Uniquenum==data[item].uniquenum){
				element.innerHTML+="</span>";
			}

			$('#scoreList').append(element);
		}
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
Reset=function(){
	Points=StartValues.Points
	Point=StartValues.Point
	Bouncer=StartValues.Bouncer
	Paddle1=StartValues.Paddle1
	Paddle2=StartValues.Paddle2
	Paddle3=StartValues.Paddle3
	Paddle4=StartValues.Paddle4
}
RandomDirection=function(){
	var dirY=Random(0,1);
	if(dirY==0)
		dirY=-1;
	var dirX=Random(0,1);
	if(dirX==0)
		dirX=-1;
	Bouncer.DirX=dirX;
	Bouncer.DirY=dirY;
}
$(document).ready(function(){
	Init();
});
