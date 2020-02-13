import { interpreter } from '../src/interpreter';
import { assert } from 'chai';
import 'mocha';

describe("Your Interpreter", function () {
    it("should work for some example test cases", function () {
        assert.equal(interpreter("*", "00101100"), "10101100");
        assert.equal(interpreter(">*>*", "00101100"), "01001100");
        assert.equal(interpreter("*>*>*>*>*>*>*>*", "00101100"), "11010011");
        assert.equal(interpreter("*>*>>*>>>*>*", "00101100"), "11111111");
        assert.equal(interpreter(">>>>>*<*<<*", "00101100"), "00000000");

        assert.equal(
            interpreter(
                "*[>*]",
                "00000000000000000000000000000000000000000000000000000000000"
            ),
            "11111111111111111111111111111111111111111111111111111111111"
        );

        assert.equal(
            interpreter(
                "*>*>>>*>*>>>>>*>[>*]",
                "00000000000000000000000000000000000000000000000000000000000"
            ),
            "11001100001000000000000000000000000000000000000000000000000"
        );
    });
});
