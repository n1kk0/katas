<?php

class CaesarCipher {
    private $shift;

    public function __construct($shift) {
        $this->shift = $shift;
    }

    public function encode($string) {
        $output = '';

        foreach (str_split($string) as $char) {
            $ord = ord(strtoupper($char));

            if ($ord > 90 || $ord < 65) {
                $output .= $char;
            } else {
                $output .= chr(($ord - 65 + $this->shift) % 26 + 65);
            }
        }

        return preg_replace('/[^!\'A-Z]/', ' ', $output);
    }

    public function decode($string) {
        $output = '';

        foreach (str_split($string) as $char) {
            $ord = ord(strtoupper($char));

            if ($ord > 90 || $ord < 65) {
                $output .= $char;
            } elseif ($ord - $this->shift < 65) {
                $output .= chr(91 - (65 - ($ord - $this->shift)));
            } else {
                $output .= chr($ord - $this->shift);
            }
        }

        return preg_replace('/[^!\'A-Z]/', ' ', $output);
    }
}
