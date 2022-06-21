const league_data = require('./file');

const result = Object.keys(league_data).reduce((acc, curr) => {
    acc[curr] = Object.values(league_data[curr].table);
    return acc;
}, {})

console.log(result);