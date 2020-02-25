<?php

function phone($strng, $num) {
    $line = preg_grep('/[+]' . $num . '/', explode("\n", $strng));

    if (count($line) > 1) {
        return "Error => Too many people: $num";
    }

    if (count($line) < 1) {
        return "Error => Not found: $num";
    }

    preg_match('/[+](\d{1,2}-\d{3}-\d{3}-\d{4})/', reset($line), $phones);
    preg_match('/<([a-z\' ]+)>/i', reset($line), $names);

    $addresses = str_replace('<' . $names[1] . '>', '', str_replace('+' . $phones[1] , '', reset($line)));
    $addresses = trim(preg_replace('/[ ][ ]+/', ' ', preg_replace('/[^\da-z\-.]/i', ' ', $addresses)));

    return "Phone => {$phones[1]}, Name => {$names[1]}, Address => $addresses";
}
