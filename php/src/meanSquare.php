<?php

function solution(array $a, array $b): float {
    $squareDiffs = [];

    foreach ($a as $key => $value) {
        $squareDiffs[] = pow($b[$key] - $a[$key], 2);
    }

    return array_sum($squareDiffs) / count($squareDiffs);
}
