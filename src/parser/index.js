import configs from './configurations'
import readFile from './readFile'
import parseConfig from './parseConfig'

export const index = (req, res) => {
    res.send({
        'code': 0,
        'availableOptions': Object.keys(configs)
    })
};

export const serveLog = (req, res) => {
    const config = configs[req.params.logId];

    return readFile(config.path)
        .then((lines) => {
            console.log("success");
            const result = parseConfig(lines, config);

            res.send({
                'code': 0,
                'logs': result,
            });
        })
        .catch(e => {
            console.log("error caught");
            res.send({
                'code': 1,
                'error': e
            })

        });


};