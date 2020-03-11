import { dirReduc } from '../src/dir_reduc';
import { assert } from 'chai';
import 'mocha';

describe('Fixed Tests', function() {
  it('dirReduc', function() {
    assert.deepEqual(dirReduc(
        ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']
    ), ['WEST']);

    assert.deepEqual(dirReduc(
        ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']
    ), []);

    assert.deepEqual(dirReduc(
        [
            'EAST', 'EAST', 'WEST', 'NORTH', 'WEST',
            'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST'
        ]
    ), ['EAST', 'NORTH']);

    assert.deepEqual(dirReduc([
        'EAST', 'WEST', 'EAST', 'WEST', 'SOUTH', 'SOUTH', 'WEST', 'NORTH',
        'SOUTH', 'EAST', 'EAST', 'WEST', 'EAST', 'NORTH', 'WEST', 'WEST',
        'EAST', 'SOUTH', 'EAST', 'EAST'
    ]), ['SOUTH', 'SOUTH', 'EAST', 'NORTH', 'WEST', 'SOUTH', 'EAST', 'EAST']);
  });
});
