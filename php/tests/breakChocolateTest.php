<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/breakChocolate.php";

class BreakChocolateTests extends TestCase
{
    public function testThatSomethingShouldHappen() {
      $this->assertEquals(breakChocolate(5, 5), 24);
      $this->assertEquals(breakChocolate(1, 1), 0);
    }
}
