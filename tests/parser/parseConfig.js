import {expect} from 'chai';
import parseConfig from '../../src/parser/parseConfig'
import * as parsers from '../../src/parser/parsers'

describe('parser/parseConfig.js', () => {
    let rows, config;

    beforeEach(() => {
        rows = Object.freeze([
            {'broken': ['1', '2', '3', '4', '5'], 'actual': '1 2 3 4 5'}
        ]);

        config = Object.freeze({
            fields: {
                'first': 1,
                'whole_line': 0,
            }
        });

    });

    it('Should be able to parse logs using config', () => {
        const result = parseConfig(rows, config);

        expect(result.length).to.equal(rows.length);

        expect(result[0].first).to.equal('1');
    });

    it('Should be able to use formatters', () => {
        let newConfigs = Object.assign({}, config, {
            'formatters': {
                'first': parsers.integer
            }
        });

        const result = parseConfig(rows, newConfigs);

        expect(result.every((x) => typeof x.first === 'number')).to.equal(true);
    });
});