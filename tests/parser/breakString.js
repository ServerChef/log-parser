import {expect} from 'chai';
import breakString from '../../src/parser/breakString';

describe('parser/breakString.js', ()=>{
    it('Should be able to read empty line', ()=>{
        expect(breakString.bind(this, '')).to.not.throw(Error);
        expect(breakString('')).to.be.empty;
    });

    it('Should be able to parse quotes', () => {
        expect(breakString(`HI, I'm breakString. I say, "Nice to meet you!"`)).to.have.length.of(6);
    });

});