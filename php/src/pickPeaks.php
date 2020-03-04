<?php
class Vector {
    const UP = 1;
    const PLATEAU = 0;
    const DOWN = -1;
}

function pickPeaks(array $arr) {
    $lastVector = Vector::DOWN;
    $firstOfPlateau = null;
    $results = ['pos' => [], 'peaks' => []];

    for($i = 1; $i < count($arr); $i++) {
        $currentVector = getVector($arr, $i);

        if ($currentVector < $lastVector && $lastVector == Vector::UP) {
            $firstOfPlateau = $i - 1;
        }

        if ($currentVector < $lastVector && $currentVector == Vector::DOWN && $firstOfPlateau != null) {
            $results['pos'][] = $firstOfPlateau;
            $results['peaks'][] = $arr[$i - 1];
            $firstOfPlateau = null;
        }

        $lastVector = $currentVector;
    }

    return $results;
}

function getVector(array $arr, $i) {
    if ($arr[$i] > $arr[$i -1]) {
        return Vector::UP;
    } elseif ($arr[$i] < $arr[$i - 1]) {
        return Vector::DOWN;
    } else {
        return Vector::PLATEAU;
    }
}
