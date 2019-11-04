const game = gameObject()
const players = playersObject()
const teams = Object.values(game)

function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                }, 
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                }
            }
        }
    }
}

function numPointsScored(playerName){
    return players[playerName].points
}

function playersObject(){
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function homeTeam(){
    return game.home
}

function awayTeam(){
    return game.away
}

function teamColors(teamName) {
    return findByTeamName(teamName).colors
}

function findByTeamName(teamName) {
    return teams.find(team => teamName === team.teamName)
}

function teamNames() {
    return teams.map(team => team.teamName)
}

console.log(teamColors('Brooklyn Nets'))
