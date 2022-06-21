const league_data = require('./file');

let result = Object.keys(league_data).reduce(function(acc, curr){
    const points = league_data[curr].table.wins * 3 + league_data[curr].table.draws * 1;
    acc[curr] = { ...league_data[curr], points }
    return acc;
}, {})
//console.log(result)
let sortArr = Object.entries(result).sort(function(a,b){
     if(a[1].points > b[1].points){
         return 1;
     }else if (a[1].points < b[1].points){
         return -1;
     }
     else{
         return 0;
     }
})
console.log(sortArr);