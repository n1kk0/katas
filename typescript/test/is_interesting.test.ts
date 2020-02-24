import { isInteresting } from '../src/is_interesting';
import { assert } from 'chai';
import 'mocha';

function test(n: number, awesome: number[], expected: number) {
    assert.strictEqual(isInteresting(n, awesome), expected);
}

describe("Is interresting ?", function(){
    it('should work, dangit!', function() {
        test(3, [1337, 256], 0);
        test(109, [1337, 256], 1);
        test(1336, [1337, 256], 1);
        test(1337, [1337, 256], 2);
        test(3454, [1337, 256], 1);
        test(3456, [1337, 256], 2);
        test(6541, [1337, 256], 1);
        test(6543, [1337, 256], 2);
        test(67890, [1337, 256], 2);
        test(11208, [1337, 256], 0);
        test(11209, [1337, 256], 1);
        test(11211, [1337, 256], 2);
    });
});
