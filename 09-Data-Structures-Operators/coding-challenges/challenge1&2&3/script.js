/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀


*/
'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ], [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players
// console.log(players1);
// console.log(players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);


const printGoals = function (...names) {
    console.log(`${names.length} goals scored`);
    console.log(`Scorers are: `);
    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]}`)
    }
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals(...game.scored);

// team1 < team2 && console.log(`Team 1 more likely to win`);

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
GOOD LUCK 😀
*/

// 1.
// for (let i = 0; i < game.scored.length; i++) {
//     console.log(`Goal ${i + 1}: ${game.scored[i]}`)
// }

// for (const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${player}`)
// }

// 2.
// const avgOdd = (team1 + draw + team2) / Object.values(game.odds).length
// console.log(avgOdd);

// 3.
// console.log(Object.entries(game.odds));
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr}: ${game.odds[team]}`)
// }
// ;

// 4.
// const scorers = {};
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : scorers[player] = 1;
// }
// console.log(scorers);

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽   GOAL GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, ' 🔁 Substitution'],
    [64, ' 🔶 Yellow card'],
    [69, ' 🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, ' 🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, ' 🔶 Yellow card']
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop()
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`)
// 4.
for (const [min, event] of gameEvents) {
    // [FIRST HALF] 17: ⚽   GOAL
    const half = min <= 45 ? '[FIRST HALF]' : '[Second HALF]'
    console.log(`${half} ${min}: ${event}`)
}