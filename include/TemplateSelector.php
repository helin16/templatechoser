<?php
abstract class TemplateSelector
{
	private static $_options = array();
	
    public static function genSelectDiv($selectedKey = '')
    {
        $selectedKey = (trim($selectedKey) === '' ? '' : trim($selectedKey));
        $html = '<span class="templateSelector">';
            $html .= 'There are a couple of templates(how you website will looks like), that we think will suites you:';
            $html .= '<select onchange="window.location = ' . "'" . $_SERVER['PHP_SELF'] . '?tname=' . "' + $(this).val();" . '">';
                $html .= '<option value="">Please Select</option>';
                foreach(self::_getOptions() as $key => $url)
                {
                    $html .= '<option value="' . $key . '" ' . ($key === $selectedKey ? 'selected' : '') . '>' . $key . '</option>';
                }
            $html .= '</select>';
        $html .= '</span>';
        return $html;
    }
    
    public static function getSelectedUrl($name)
    {
        $options = self::_getOptions();
        if (($name = trim($name)) === '' || !isset($options[$name]))
            return 'welcome.php';
        return $options[$name];
    }
    
    private static function _getConfFile()
    {
    	return dirname(__FILE__) . DIRECTORY_SEPARATOR . 'suggestions.conf';
    }
    
    private static function _getOptions($reload = false)
    {
    	if(count(self::$_options) === 0 || $reload === true)
    	{
    		$confFile = self::_getConfFile();
	    	if(file_exists($confFile))
	    	{
	    		$array = array();
		    	$lines = file($confFile);
		    	foreach($lines as $lineNo => $line)
		    	{
		    		if(trim($line) === '' || substr(trim($line), 0, 1) === '#')
		    			continue;
		    		list($name, $url) = explode(':', $line, 2);
		    		$array[trim($name)] = trim($url);
		    	}
		    	self::$_options = $array;
	    	}
    	}
    	return self::$_options;
    }
    
    public function writeToConfiFile($data)
    {
    	file_put_contents(self::_getConfFile(), $data);
    	return self::_getOptions(true);
    }
    public function getConfiFile()
    {
    	return file_get_contents(self::_getConfFile(), $data);
    }
}