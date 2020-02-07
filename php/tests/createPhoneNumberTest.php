<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/createPhoneNumber.php";

class CreatePhoneNumberTests extends TestCase {
    public function testBasicTests() {
        $this->assertEquals('(123) 456-7890', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
        $this->assertEquals('(111) 111-1111', createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
    }
}