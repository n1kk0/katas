<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/productFib.php";

class FibProductTestCases extends TestCase {
    private function revTest($actual, $expected) {
        $this->assertEquals($expected, $actual);
    }

    public function testBasics() {        
      $this->revTest(productFib(4895), [55, 89, true]);
      $this->revTest(productFib(5895), [89, 144, false]);
      $this->revTest(productFib(74049690), [6765, 10946, true]);
    }
}
