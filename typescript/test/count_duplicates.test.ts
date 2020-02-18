// See https://www.chaijs.com for how to use Chai.
import { duplicateCount } from "../src/count_duplicates";
import { assert } from 'chai';
import 'mocha';

describe("duplicateCount", function() {
  it("counts duplicates", function() {
    assert.equal(duplicateCount(""), 0);
    assert.equal(duplicateCount("abcde"), 0);
    assert.equal(duplicateCount("aabbcde"), 2);
    assert.equal(duplicateCount("aabBcde"), 2,"should ignore case");
    assert.equal(duplicateCount("Indivisibility"), 1)
    assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  });
});
