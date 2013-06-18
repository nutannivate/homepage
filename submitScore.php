<?php

require 'db.php';
header('Content-Type: application/json');

if(AddScore($_GET['name'],$_GET['points'],$_GET['uniquenum']))
	return json_encode(array('success'=>true));

return json_encode(array('success'=>false));

