export const parseConfig = (rows, config)  => {

    return rows.map((row) => {
        const ret = {};
        Object.keys(config.fields).forEach((field) => {
            let mapping = config.fields[field];
            if (!Array.isArray(mapping)) mapping = [mapping];

            ret[field] = mapping.map((x) => {
                if(x == 0){
                   return row.actual;
                }else return row.broken[x-1];
            }).join(" ");

            if (config.formatters && config.formatters[field]){
                let formatters = config.formatters[field];
                if (!Array.isArray(formatters)) formatters = [formatters];

                formatters.forEach((formatter) => {
                    ret[field] = formatter(ret[field]);
                });
            }
        });

        return ret;

    });
};

export default parseConfig