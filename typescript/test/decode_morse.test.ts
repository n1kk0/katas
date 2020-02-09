import { decodeMorse } from '../src/decode_morse';
import { assert } from 'chai';
import 'mocha';


describe("decodeMorse", function() {
    it('HEY JUDE', () => assert.equal(decodeMorse('.... . -.--   .--- ..- -.. .'), "HEY JUDE"));
    it('SOS', () => assert.equal(decodeMorse('...---...'), "SOS"));
    it('LOL', () => assert.equal(decodeMorse('.-.. --- .-..'), "LOL"));
    it("I'M SO DUMB", () => assert.equal(decodeMorse('.. .----. --   ... ---   -.. ..- -- -...'), "I'M SO DUMB"));
    it("HELP", () => assert.equal(decodeMorse('.... . .-.. .--.'), "HELP"));
});
