<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<header class="cmp640 bg-lu hang40 txt-c " style="line-height: 40px;">
    <a href="javascript:gb()" class="pull-left pl-10 "  style="position: absolute;left: 5px"><i class="fa fa-chevron-left mr-10"></i>返回</a>
    <span class="size16 zi-bai " >选择车型</span>
    <a href="javascript:gb()" id="cd-menu-trigger" href=" "><i class="fa fa-1dx fa-remove " style="margin-top:8px;margin-right: 2px"></i></a>
    
</header>

<div class="slider-content cmp640 mt-40 lock" id="slider"  >
	<li >
		<a name="a" class="title txt-l"><i class="fa fa-minus fa-rotate-90 zi-lu "></i>&nbsp;车牌选择</a>
    	<#list jcdictList as dict> 
    	<a href="javascript:seldict21('${dict.key}','${dict.value}');" class="jianxie txt-c"><p>${dict.value}</p></a>
    	</#list>          
                 
		</li>
	
		
</div>

<a href="#zimu" class="zi-hui" style="position: fixed;right:10px;bottom: 10px">
        <span class="fa-stack fa-2x">
               <i class="fa fa-square fa-stack-2x" style="color:rgba(0, 0, 0, 0.4);"></i>
               <i class="fa fa-arrow-up fa-stack-1x fa-inverse" style="left:-4px"></i>
         </span>
      </a>	

	
</html>