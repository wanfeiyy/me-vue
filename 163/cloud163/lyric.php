<?php
/**

<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/9
 * Time: 22:02
 */
header('Content-type: application/json');
require dirname(__DIR__).'/v2/MusicAPI.php';
$musicApi = new MusicAPI();
//$list = $musicApi->search('todu',10);
//var_dump(json_decode($list,true));
$id = $_GET['id'];
$detail = $musicApi->lyric($id);
echo $detail;


