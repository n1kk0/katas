<?php
function productFib($prod) {
    $n1 = 0;
    $n2 = 1;
  
    while ($n1 * $n2 < $prod) {
        $sum = $n1 + $n2; 
        $n1 = $n2; 
        $n2 = $sum; 
    }
  
    return [$n1, $n2, $n1 * $n2 == $prod];
}
