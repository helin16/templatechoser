<?php
abstract class TemplateSelector
{
    public static function genSelectDiv()
    {
        $html = '<div class="templateSelector">';
            $html .= 'There are a couple of templates(how you website will looks like), that we think will suites you:';
            $html .= '<select>';
                $html .= '<option value="test">test</option>';
            $html .= '</select>';
        $html .= '<div>';
        return $html;
    }
}