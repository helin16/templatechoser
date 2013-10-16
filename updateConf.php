<?php require_once dirname(__FILE__) . '/include/TemplateSelector.php'; ?>

<?php if(!isset($_REQUEST['confdata']) || trim($_REQUEST['confdata']) === '') {?>
	<form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
	<textarea id="confdata" name="confdata" style="width: 100%; height: 600px;">
	<?php echo TemplateSelector::getConfiFile()?>
	</textarea> 
	<input type="submit" value="save" />
	</form>
<?php } else { TemplateSelector::writeToConfiFile($_REQUEST['confdata']); }?>
