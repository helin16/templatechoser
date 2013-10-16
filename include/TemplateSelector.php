<?php
abstract class TemplateSelector
{
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
    
    private static function _getOptions()
    {
    	$confFile = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'suggestion.conf';
    	if(!file_exists($confFile))
    		return array();
    	$array = array();
    	$lines = file($confFile);
    	foreach($lines as $lineNo => $line)
    	{
    		if(trim($line) === '')
    			continue;
    		list($name, $url) = explode(':', $line);
    		$array[trim($name)] = trim($url);
    	}
    	return $array();
    }
}