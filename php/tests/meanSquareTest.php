<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/meanSquare.php";

class SolutionTest extends TestCase {
    protected function assertFuzzyEquals(float $expected, float $actual, string $msg = '') {
        $this->assertTrue(abs($expected) <= 1 ? abs($expected - $actual) <= 1e-9 : abs(($expected - $actual) / $expected) <= 1e-9, "$msg\r\nFailed asserting that actual value $actual is sufficiently close to expected value $expected (accepted relative error: 1e-9)");
    }

    public function testFixed() {
        $this->assertFuzzyEquals(9, solution([1, 2, 3], [4, 5, 6]));
        $this->assertFuzzyEquals(16.5, solution([10, 20, 10, 2], [10, 25, 5, -2]));
        $this->assertFuzzyEquals(1, solution([0, -1], [-1, 0]));
    }
}
