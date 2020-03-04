<?php
define('LABEL', 'label');
define('SECONDS', 'seconds');

function format_duration($seconds) {
    $formatSteps = [
        [LABEL => 'year', SECONDS => 31536000],
        [LABEL => 'day', SECONDS => 86400],
        [LABEL => 'hour', SECONDS => 3600],
        [LABEL => 'minute', SECONDS => 60],
        [LABEL => 'second', SECONDS => 1],
    ];

    $outputArray = [];

    foreach ($formatSteps as $index => $step) {
        $value = floor($seconds / $step[SECONDS]);

        if ($value != 0) {
            $outputArray[$index] = $value . ' ' . $step[LABEL] . ($value > 1 ? 's' : '');
            $seconds -= $step[SECONDS] * $value;
        }
    }

    $output = '';
    $stepIndex = 0;
    krsort($outputArray);

    foreach ($outputArray as $outputStep) {
        $output = $outputStep . getGlue($stepIndex) . $output;
        $stepIndex++;
    }

    return $output == '' ? 'now' : $output;
}

function  getGlue($stepIndex) {
    if ($stepIndex == 1) {
        return ' and ';
    } elseif ($stepIndex > 0) {
        return ', ';
    } else {
        return '';
    }
}
