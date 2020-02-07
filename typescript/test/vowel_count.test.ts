import { VowelCount } from '../src/vowel_count';
import { assert } from 'chai';
import 'mocha';

describe("vowelCount", function() {
  it ("should count vowels", function() {
    assert.strictEqual(VowelCount.getCount("abracadabra"), 5);
  });

  it ("should return 0 on empty string", function() {
    assert.strictEqual(VowelCount.getCount(""), 0);
  });

  it ("should ignore case", function() {
    assert.strictEqual(VowelCount.getCount("XxXxOXxX"), 1);
  });

  it ("should ignore different cases", function() {
    assert.strictEqual(VowelCount.getCount("bAdaBOum"), 4);
  });
});
