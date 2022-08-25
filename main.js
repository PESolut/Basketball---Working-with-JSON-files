const bballPlayers = require('./bballPlayers.json') // links our json data set to our js file into variable called bballPlayers

// to run we do node main.js ( or whatever you saved your filename to)

// to retrieve the first player 
const player1 = bballPlayers.data[0]
// console.log(player1)

bballPlayers.data.forEach(player => {
    player.eyeColor = 'brown'
});

console.log(bballPlayers)
