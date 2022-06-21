const league_data = require('./file');

let result = Object.keys(league_data).reduce(function(acc, curr){
    const points = league_data[curr].table.wins * 3 + league_data[curr].table.draws * 1
    acc[curr] = { ...league_data[curr], points }
    return acc;
}, {})

console.log(result);
