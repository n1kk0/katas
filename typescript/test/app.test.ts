import { add } from '../src/app';
import { assert } from 'chai';
import 'mocha';
 
describe('add', function() {
  assert.strictEqual(add(1, 2), 3);
});
