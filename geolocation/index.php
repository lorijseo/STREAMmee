<?php   
$api_key = MY_API_KEY;

//base url
$url = "https://ipgeolocation.abstractapi.com/v1/?api_key=$api_key";

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $url);
$response = curl_exec($ch);

echo "<pre>";print_r($response);echo"</pre>";