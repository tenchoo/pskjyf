﻿document.writeln("<style type=\"text\/css\">");
document.writeln("");
document.writeln(".window {");
document.writeln("	width:250px;");
document.writeln("	position:fixed;");
document.writeln("	display:none;");
document.writeln("	top:40%;");
document.writeln("	left:50%;");
document.writeln("	 z-index:9999;");
document.writeln("	margin:-50px auto 0 -125px;");
document.writeln("	padding:0px;");
document.writeln("	border-radius:0.1em;");
document.writeln("	-webkit-border-radius:0.1em;");
document.writeln("	-moz-border-radius:0.1em;");
document.writeln("	background-color: #ffffff;");
document.writeln("	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);");
document.writeln("	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);");
document.writeln("	-o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);");
document.writeln("	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);");
document.writeln("	font:14px\/1.5 Microsoft YaHei,Helvitica,Verdana,Arial,san-serif;");
document.writeln("}");
document.writeln(".window .title {");
document.writeln("	");
document.writeln("	background-color: #A3A2A1;");
document.writeln("	line-height: 26px;");
document.writeln("    padding: 5px 5px 5px 10px;");
document.writeln("	color:#ffffff;");
document.writeln("	font-size:16px;");
document.writeln("	border-radius:0.1em 0.1em 0 0;");
document.writeln("	-webkit-border-radius:0.1em 0.1em 0 0;");
document.writeln("	-moz-border-radius:0.1em 0.1em 0 0;");
document.writeln("	background-color: #002f7b;");
document.writeln("	");
document.writeln("}");
document.writeln(".window .content {");
document.writeln("	\/*min-height:100px;*\/");
document.writeln("	overflow:auto;");
document.writeln("	padding:10px;");
document.writeln("	background: linear-gradient(#FBFBFB, #EEEEEE) repeat scroll 0 0 #FFF9DF;");
document.writeln("    color: #222222;");
document.writeln("    text-shadow: 0 1px 0 #FFFFFF;");
document.writeln("	border-radius: 0 0 0.6em 0.6em;");
document.writeln("	-webkit-border-radius: 0 0 0.6em 0.6em;");
document.writeln("	-moz-border-radius: 0 0 0.6em 0.6em;");
document.writeln("}");
document.writeln(".window #txt {");
document.writeln("	min-height:30px;font-size:16px; line-height:22px;");
document.writeln("    color: #8a8a8a;");
document.writeln("}");
document.writeln(".window .txtbtn {");
document.writeln("	");
document.writeln("	background: #fff;");
document.writeln("	background-color: #002f7b;");
document.writeln("	color: #fff;");
document.writeln("	display: block;");
document.writeln("	width: 50%;");
document.writeln("	text-overflow: ellipsis;");
document.writeln("	white-space: nowrap;");
document.writeln("	cursor: pointer;");
document.writeln("	text-align: windowcenter;");
document.writeln("	font-size: 16px;");
document.writeln("	padding:5px;");
document.writeln("	margin:10px auto;");
document.writeln("}");
document.writeln(".window .txtbtn:visited {");
document.writeln("	background-color: #8a8a8a;");
document.writeln("}");
document.writeln(".window .txtbtn:hover {");
document.writeln("	background-color: #8a8a8a;");
document.writeln("}");
document.writeln(".window .txtbtn:active {");
document.writeln("	background-color: #8a8a8a;");
document.writeln("	border-top: 1px solid #B4B4B4;");
document.writeln("}");
document.writeln("");
document.writeln(".window .title .close {");
document.writeln("	float:right;");
document.writeln("	background-image: url(\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACTSURBVEhL7dNtCoAgDAZgb60nsGN1tPLVCVNHmg76kQ8E1mwv+GG27cestQ4PvTZ69SFocBGpWa8+zHt\/Up+IN+MhgLlUmnIE1CpBQB2COZibfpnXhHFaIZkYph0SOeeK\/QJ8o7KOek84fkCWSBtfL+Ny2MPpCkPFMH6PWEhWhKncIyEk69VfiUuVhqJefds+YcwNbEwxGqGIFWYAAAAASUVORK5CYII=\");");
document.writeln("	width:26px;");
document.writeln("	height:26px;");
document.writeln("	display:block;	");
document.writeln("}");
document.writeln("<\/style>");
document.writeln("<div class=\"window\" id=\"windowcenter\">");
document.writeln("	<div id=\"title\" class=\"title\">消息提醒<span class=\"close\" id=\"alertclose\"><\/span><\/div>");
document.writeln("	<div class=\"content\">");
document.writeln("	 <div id=\"txt\"><\/div>");
document.writeln("	 <input type=\"button\" value=\"确定\" id=\"windowclosebutton\" name=\"确定\" class=\"txtbtn\">	");
document.writeln("	<\/div>");
document.writeln("<\/div>");
$(document).ready(function () {

    $("#windowclosebutton").click(function () {
        $("#windowcenter").slideUp(500);
    });
    $("#alertclose").click(function () {
        $("#windowcenter").slideUp(500);
    });

});
function alert(title) {
//var windowHeight; 
//var windowWidth; 
//var popWidth;  
//var popHeight; 
//windowHeight=$(window).height(); 
//windowWidth=$(window).width(); 
//popHeight=$(".window").height(); 
//popWidth=$(".window").width(); 
//var popY=(windowHeight-popHeight)/2; 
//var popX=(windowWidth-popWidth)/2; 
//$("#windowcenter").css("top",popY).css("left",popX).slideToggle("slow"); 
    $("#windowcenter").slideToggle("slow");
    $("#txt").html(title);
//$("#windowcenter").hide("slow"); 
    setTimeout('$("#windowcenter").slideUp(500)', 8000);
} 

