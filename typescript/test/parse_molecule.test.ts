import { parseMolecule } from "../src/parse_molecule";
import { assert } from 'chai';
import 'mocha';

describe("parseMolecule", function() {
    it(
        "should parse water",
        () => {
            assert.deepStrictEqual(
                parseMolecule("H2O"),
                {H: 2, O: 1}
            );
        }
    );

    it(
        "should parse magnesium hydroxide: Mg(OH)2",
        () => {
            assert.deepStrictEqual(
                parseMolecule("Mg(OH)2"),
                {Mg: 1, O: 2, H: 2}
            );
        }
    );

    it(
        "should parse Fremy's salt: K4[ON(SO3)2]2",
        () => {
            assert.deepStrictEqual(
                parseMolecule("K4[ON(SO3)2]2"),
                {K: 4, O: 14, N: 2, S: 4}
            );
        }
    );

    it(
        "should parse cyclopentadienyliron dicarbonyl dimer: (C5H5)Fe(CO)2CH3",
        () => {
            assert.deepStrictEqual(
                parseMolecule("(C5H5)Fe(CO)2CH3"),
                {C: 8, H: 8, Fe: 1, O: 2}
            );
        }
    );


    it(
        "should parse hexol sulphate: {[Co(NH3)4(OH)2]3Co}(SO4)3",
        () => {
            assert.deepStrictEqual(
                parseMolecule("{[Co(NH3)4(OH)2]3Co}(SO4)3"),
                {Co: 4, N: 12, H: 42, O: 18, S: 3}
            );
        }
    );
});
