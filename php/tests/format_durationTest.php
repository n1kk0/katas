<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/format_duration.php";

class FormatDurationTests extends TestCase {
    public function testFormatDuration() {
        $this->assertEquals("now", format_duration(0));
        $this->assertEquals("1 second", format_duration(1));
        $this->assertEquals("1 minute and 2 seconds", format_duration(62));
        $this->assertEquals("2 minutes", format_duration(120));
        $this->assertEquals("1 hour", format_duration(3600));
        $this->assertEquals("1 hour, 1 minute and 2 seconds", format_duration(3662));
        $this->assertEquals("182 days, 1 hour, 44 minutes and 40 seconds", format_duration(15731080));
    }
}
