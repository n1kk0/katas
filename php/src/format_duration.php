<?php

function format_duration($seconds) {
    $formatSteps = [
        ['label' => 'year', 'seconds' => 31536000],
        ['label' => 'day', 'seconds' => 86400],
        ['label' => 'hour', 'seconds' => 3600],
        ['label' => 'minute', 'seconds' => 60],
        ['label' => 'second', 'seconds' => 1],
    ];

    $outputArray = [];

    foreach ($formatSteps as $index => $step) {
        $value = floor($seconds / $step['seconds']);

        if ($value != 0) {
            $outputArray[$index] = $value . ' ' . $step['label'] . ($value > 1 ? 's' : '');
            $seconds -= $step['seconds'] * $value;
        }
    }

    $output = '';
    $stepIndex = 0;
    krsort($outputArray);

    foreach ($outputArray as $outputStep) {
        $output = $outputStep . ($stepIndex == 1 ? ' and ' : ($stepIndex > 0 ? ', ' : '')) . $output;
        $stepIndex++;
    }

    return $output == '' ? 'now' : $output;
}
