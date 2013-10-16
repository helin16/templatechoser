<?php require_once dirname(__FILE__) . '/include/TemplateSelector.php'; ?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link type="text/css" href="css/livedemo.css" rel="stylesheet"/>
		<link type="text/css" href="css/bootstrap.css" rel="stylesheet"/>
		<link type="text/css" href="css/responsive.css" rel="stylesheet"/>
		<link type="text/css" href="css/style.css" rel="stylesheet"/>
		
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/jQuery.min.map.js"></script>
		<script type="text/javascript" src="js/jQuery.cookie.js"></script>
		<script type="text/javascript" src="js/jQuery.migrate.js"></script>
    	<!--[if lte IE 7]><script src="js/lte-ie7.js"></script><![endif]-->
    	<!--[if lt IE 9]>
    		<script type="text/javascript" src="js/html5shiv.js"></script>
        <![endif]-->
    	<!--[if lt IE 9]>
    		<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    	<![endif]-->
	</head>
	<body>
		<div id="headerlivedemo" onmousewheel="SmoothSize; return false" class="relative">
        	<div id="advanced" style="margin-top: 0px; position: relative;">
        		<span class="trigger"> <em></em>
        		</span>
        		<div class="bg">
        			<div class="top_container container">
        				<div class="name_template">
        					<?php echo TemplateSelector::genSelectDiv();?>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
		<div id="iframelive" class="">
            <div id="frameWrapper">
            	<iframe id="frame" frameborder="0" src="<?php echo TemplateSelector::getSelectedUrl(isset($_REQUEST['tname']) ? $_REQUEST['tname'] : null);?>">
			    	[Your user agent does not support frames or is currently configured  not to display frames. However, you may visit the related document.]
				</iframe>
		    </div>
		</div>
		<script type="text/javascript" src="js/page.js"></script>
	</body>
</html>
