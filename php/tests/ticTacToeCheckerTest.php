<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/ticTacToeChecker.php";

final class IsSolvedTest extends TestCase {
  public function testExample() {
    $this->assertEquals(-1, is_solved([
      [0, 0, 1],
      [0, 1, 2],
      [2, 1, 0]
    ]), '0 cell returns -1');

    $this->assertEquals(1, is_solved([
      [1, 1, 1],
      [2, 2, 1],
      [2, 1, 2]
    ]), '1 wins horizontally -> 1');

    $this->assertEquals(2, is_solved([
      [1, 2, 1],
      [2, 2, 2],
      [2, 1, 2]
    ]), '2 wins horizontally -> 2');

    $this->assertEquals(2, is_solved([
      [2, 2, 1],
      [2, 1, 2],
      [2, 1, 2]
    ]), '2 wins vertically -> 2');

    $this->assertEquals(2, is_solved([
      [2, 2, 1],
      [1, 2, 2],
      [2, 1, 2]
    ]), '2 wins diagonally -> 2');

    $this->assertEquals(0, is_solved([
      [2, 2, 1],
      [1, 1, 2],
      [2, 1, 2]
    ]), 'no one wins -> 0');

    $this->assertEquals(-1, is_solved([
      [0, 0, 2],
      [0, 0, 0],
      [1, 0, 1]
    ]), 'no one wins with zeroes -> -1');
  }
}
