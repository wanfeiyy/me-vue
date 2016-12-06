<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/14
 * Time: 23:52
 */
header('Content-type: application/json');
require dirname(__DIR__).'/v2/MusicAPI.php';
$musicApi = new MusicAPI();
//$list = $musicApi->search('todu',10);
//var_dump(json_decode($list,true));
$id = $_GET['id'];
$detail = $musicApi->detail($id);
echo $detail;
