<?php

global $dbConn;
$dbConn=mysql_connect('dbserver.local','pong','beaver') or die('Database error');
mysql_select_db('pong',$dbConn);

function AddScore($name,$score,$uniquenum){
	global $dbConn;
	$timestamp=time();
	$name=mysql_real_escape_string($name,$dbConn);
	$score=mysql_real_escape_string($score,$dbConn);
	$uniquenum=mysql_real_escape_string($uniquenum,$dbConn);
	mysql_query("INSERT INTO results(name,points,uniquenum) VALUES('$name','$score','$uniquenum');",$dbConn);
	$error=mysql_errno($dbConn);
	if($error!==0) die('Error: '.$error);
	return true;
}

function GetScores(){
	global $dbConn;
	$results=array();
	$result=mysql_query('SELECT * FROM results ORDER BY points DESC LIMIT 0,10;',$dbConn);
	while($res=mysql_fetch_assoc($result)){
		$results[]=$res;
	}
	return json_encode($results);
}
