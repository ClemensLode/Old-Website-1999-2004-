<html><head><title>PHP Test</title></head>
<body>
<?php echo "Hello World<p>"; ?>
<?php
if(strstr($HTTP_USER_AGENT,"MSIE")) {
?>
<center><b>You are using Internet Explorer</b></center>
<?
} else {
?>
<center><b>You are not using Internet Explorer</b></center>
<?
}
?> 
</body></html>
