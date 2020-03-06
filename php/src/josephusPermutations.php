<?php

function josephus(array $items, int $k): array {
  $output = [];
  $index = -1;

  while (count($items) > 0) {
    $index = ($index + $k) % count($items);
    $output[] = array_splice($items, $index, 1)[0];
    $index--;
  }

  return $output;
}
