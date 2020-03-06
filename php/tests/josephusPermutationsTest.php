<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/josephusPermutations.php";

class JosephusTest extends TestCase {
  public function testExamples() {
    $this->assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
    $this->assertEquals([2, 4, 6, 8, 10, 3, 7, 1, 9, 5], josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
    $this->assertEquals(['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'], josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4));
    $this->assertEquals([3, 6, 2, 7, 5, 1, 4], josephus([1, 2, 3, 4, 5, 6, 7], 3));
    $this->assertEquals([], josephus([], 3));
  }
}
