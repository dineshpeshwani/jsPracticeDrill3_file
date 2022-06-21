const league_data = {
    manutd: {
        name: "Manchester United FC",
        table: {
            played: 38,
            wins: 27,
            loss: 6,
            draws: 5
        }
    },
    livepool: {
        name: "Liverpool FC",
        table: {
            played: 38,
            wins: 29,
            loss: 8,
            draws: 1
        }
    },
    chelsea: {
        name: "Chelsea FC",
        table: {
            played: 38,
            wins: 23,
            loss: 3,
            draws: 12
        }
    },
    arsenal: {
        name: "Arsenal FC",
        table: {
            played: 38,
            wins: 26,
            loss: 11,
            draws: 1
        }
    }, mancity: {
        name: "Manchester City FC",
        table: {
            played: 38,
            wins: 31,
            loss: 5,
            draws: 2
        }
    }, spurs: {
        name: "Tottenham Hotspur FC",
        table: {
            played: 38,
            wins: 21,
            loss: 12,
            draws: 5
        }
    }
}

module.exports = league_data;   

/*

Q1. Add 'pts' property to the table. .
    Pts calculation:  win = 3 pts , draw = 1pt , loss = 0 pts.
Q2. Sort the data based on the highest to lowest pts.
    If two teams have same pts ..sort them based on name.
Q3. Write a method to generate data in the following form
    {
        team: [wins, losses], 
    }
Q4. Copy the league_data into another object.

*/