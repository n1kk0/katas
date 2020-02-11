import { countBits } from '../src/count_bits';
import { assert } from 'chai';
import 'mocha';

describe("countBits", function() {
  it("test", () => {
    assert.equal(countBits(1234), 5, "1234");
    assert.equal(countBits(0), 0, "0");
    assert.equal(countBits(4), 1, "4");
    assert.equal(countBits(7), 3, "7");
    assert.equal(countBits(9), 2, "9");
    assert.equal(countBits(10), 2, "10");
  });
});


111