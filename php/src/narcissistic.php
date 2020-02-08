<?php
function narcissistic(int $value): bool {
    $power = strlen($value);
    $valueOut = 0;

    for ($i = 0; $i < $power; $i++) {
        $valueOut += pow(strval($value)[$i], $power);
    }

    return $value == $valueOut;
}
