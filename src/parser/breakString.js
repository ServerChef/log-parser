/**
 * Break string in an `awk`-ish manner.
 *
 * Ususally, line.split(delimiter) is sufficient but for special cases,
 * when we don't want to break at the delimiter by typing quotes, .split() is not enough.
 *
 * For example, 'Cat is in California' to give ['Cat', 'is', 'in', 'California']
 * 'Cat is in "New York"' to give ['Cat', 'is', 'in', 'New York']
 *
 * Support for both '' and "" is included.
 *
 *
 * @param line string to be broken.
 * @param delimiter the character to break the string.
 * @returns {Array}
 */
export const breakString = (line, delimiter=" ") => {
    const quotes_expr = /(["'])(?:(?=(\\?))\2.)*?\1/g;

    let fields = [];

    let curIndex = 0;

    let result = quotes_expr.exec(line);
    let shortLine, shortResults;

    while (curIndex < line.length) {
        if(result == null){ // no quotes. just break the string.

           shortLine = line.substring(curIndex).filter((x) => x);
           shortResults = shortLine.split(delimiter);

           fields = fields.concat(shortResults);
           curIndex = line.length;
        }else{
            shortLine = line.substring(curIndex, result.index);
            shortResults = shortLine.split(delimiter).filter((x) => x);
            fields = fields.concat(shortResults);
            fields.push(result[0].substring(1, result[0].length -1 ));

            curIndex = result.index + result[0].length;

            result = quotes_expr.exec(line);
        }

    }

    return fields;
};


export default breakString;