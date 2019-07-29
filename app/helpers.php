<?php

if (!function_exists('currentRoute')) {
    function currentRoute($route)
    {
        return request()->url() == route($route) ? ' class=current' : '';
    }
}

if (!function_exists('currentRouteBootstrap')) {
    function currentRouteBootstrap($route)
    {
        return request()->url() == route($route) ? ' class=active' : '';
    }
}

if (!function_exists('arraysStrickEquil')) {
    function arraysStrickEquil(Array $a, Array $b)
    {
        if (count($a) != count($b)) return false;
        foreach ($a as $i => $value) {
          if($b[$i] != $value) return false;
        }
        return true;
    }
}
