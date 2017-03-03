import {expect} from 'chai'
import readFile from '../../src/parser/readFile'
import {join} from 'path';
import fs from 'fs';

describe('parser/readFileTest.js', ()=>{
    it('should catch error on ENOENT', ()=>{

        readFile('/sdflkjdslfjlkjlkewqjkjfdalklfdskjdsfaoiuwqelkjfdsauqwoielkdsjlkj')
            .then(() => {
                throw new Error("Why does this file even exist?");
            })
            .catch((e) => {
                expect(e.code).to.equal('ENOENT');
            });
    });

    it('should be able to read log files', () => {
        const log_file_path = join(__dirname, '..', 'logs', 'nginx_access_log');
        expect(fs.existsSync(log_file_path)).to.equal(true);

        return readFile(log_file_path)
            .then((lines) => {
                expect(lines).to.have.length.of(11);

                expect(Object.keys(lines[0].broken)).to.have.length.of(10);

                expect(lines[9].broken[8]).to.equal('http://www.megaboilerplat.com/');
            });


    });
});