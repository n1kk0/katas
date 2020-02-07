import { romanNumeralDecode } from '../src/roman_numeral_decode';
import { assert } from 'chai';
import 'mocha';

describe("romanNumeralDecode", function() {
  it('XXI -> 21', () => assert.equal(romanNumeralDecode('XXI'), 21));
  it('I -> 1',() => assert.equal(romanNumeralDecode('I'), 1));
  it('IV -> 4',() => assert.equal(romanNumeralDecode('IV'), 4));
  it('MMVIII -> 2008',() => assert.equal(romanNumeralDecode('MMVIII'), 2008));
  it('MDCLXVI -> 1666',() => assert.equal(romanNumeralDecode('MDCLXVI'), 1666));
});
