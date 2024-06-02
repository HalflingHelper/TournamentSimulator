

const hikaru = new Player("Hikaru", 2790)
const fabiano = new Player("Fabiano", 2800)
const magnus = new Player("Magnus", 2830)
const nepo = new Player("Nepo", 2770)

const r1 = new Round();
r1.addGame(hikaru, nepo);
r1.addGame(fabiano, magnus);

const r2 = new Round();
r2.addGame(magnus, hikaru);
r2.addGame(nepo, fabiano);

const r3 = new Round();
r3.addGame(hikaru, fabiano);
r3.addGame(nepo, magnus);


const testTourney = new Tournament(
    players = [
        magnus,
        hikaru,
        fabiano,
        nepo,
    ],
    rounds = [r1, r2, r3],
)

let res = testTourney.simulate();
console.log(JSON.stringify(res));

res = testTourney.simulateBatch();
console.log(JSON.stringify(res));

document.getElementById("result").innerText = JSON.stringify(res)