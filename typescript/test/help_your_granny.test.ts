import solution = require("../src/help_your_granny");
import { assert } from 'chai';
import 'mocha';

function dotest(
    friends: Array<string>,
    fTowns: Array<Array<string>>,
    distTable: Array<string|number>,
    expected: number
) {
    assert.equal(solution.G964.tour(friends, fTowns, distTable), expected);
}

describe("Fixed Tests", function() {
    it("tour", function() {
        var friends1 = ["A1", "A2", "A3", "A4", "A5"];

        var fTowns1 = [
            ["A1", "X1"],
            ["A2", "X2"],
            ["A3", "X3"],
            ["A4", "X4"]
        ];

        var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

        dotest(friends1, fTowns1, distTable1, 889);
    });
});
