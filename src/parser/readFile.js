import {createReadStream} from 'fs';
import {createInterface} from 'readline';
import breakString from './breakString';

const readFile = (path) => {

    return new Promise((resolve, reject) => {
        const runLine = (line) => {
            rows.push({
                'actual': line,
                'broken': breakString(line)
            })
        };

        const stream = createReadStream(path);
        const iface = createInterface({input: stream});

        const rows = [];
        iface.on('line',runLine);
        iface.on('close', () => resolve(rows));
        iface.on('error', (e) => reject(e));
        stream.on('error', (e) => reject(e));
    });
};


export default readFile;