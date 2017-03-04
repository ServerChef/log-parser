import {expect} from 'chai'
import * as parsers from '../../src/parser/parsers'

describe('parser/parsers.js', ()=>{

    describe('integer', ()=>{

        it('should be able to parse string into integer', ()=>{
            expect(parsers.integer('10123')).to.equal(10123);

            expect(parsers.integer('200')).to.equal(200);
        });



    })

});