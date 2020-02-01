// simple parser as all inputs are received as string

const parseInput = input => {
    try {
        const result = parseFloat(input);
        return isNaN(result) || !isFinite(result) ? 0 : result;
    } catch (err) {
        return 0;
    }
}


const checkOutput = a => { 
    return parseInput(a);
};

exports.input = parseInput;
exports.output = checkOutput;
