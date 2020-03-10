<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/CaesarCipher.php";

class CaesarCipherHelperTestCases extends TestCase {
    public function testExamples() {
        $c = new CaesarCipher(5);
        $this->assertEquals($c->encode('Codewars'), 'HTIJBFWX');
        $this->assertEquals($c->decode('Htijbfwx'), 'CODEWARS');

        $c2 = new CaesarCipher(3);
        $this->assertEquals($c2->encode('Hello World'), 'KHOOR ZRUOG');
    }
}
