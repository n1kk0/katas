<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . "/../src/pickPeaks.php";

class PickPeaksTest extends TestCase {
    public function testItFindsPeaks() {
        $this->assertEquals(['pos' => [3, 7], 'peaks' => [6, 3]], pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
        $this->assertEquals(['pos' => [1, 12], 'peaks' => [2, 6]], pickPeaks([1, 2, 2, 2, 2, 1, 0, 1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3]));
        $this->assertEquals(['pos' => [2, 7, 14, 20], 'peaks' => [5, 6, 5, 5]], pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]));
        $this->assertEquals(['pos' => [3, 7, 10], 'peaks' => [6, 3, 2]], pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
        $this->assertEquals(['pos' => [3, 7, 13], 'peaks' => [6, 3, 4]], pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 3, 4, 2, 2, 2, 2, 1, 0]));
}
}
