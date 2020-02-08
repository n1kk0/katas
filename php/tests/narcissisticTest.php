<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/narcissistic.php";

class NarcissisticTest extends TestCase {
  public function testExamples() {
    $this->assertTrue(narcissistic(7), '7 is narcissistic');
    $this->assertTrue(narcissistic(371), '371 is narcissistic');
  }
}
