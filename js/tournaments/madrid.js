/* 
    Information for the Madrid chess festival.
    Entered by hand, source: https://www.chess.com/events/2024-madrid-chess-festival-closed-a
*/
// TODO: Hand entry is a pain, look for data sources
const players = [
    //0
    new Player("GM Tomas Sosa", 2535),
    //1
    new Player("GM Pepe Cuenca", 2493),
    //2
    new Player("IM Julio Suarez Gomez", 2477),
    //3
    new Player("IM Diego Macias Pino", 2471),
    //4
    new Player("GM Lelys Stanley Martinez Duany", 2453),
    //5
    new Player("IM Aaron Alonso Garcia", 2460),
    //6
    new Player("FM Akira Nakada", 2414),
    //7
    new Player("IM Adrian Suarez Uriel", 2401),
    //8
    new Player("FM Dani Tabuenca Mendataurigoitia", 2355),
    //9
    new Player("IM Levy Rozman", 2322),
];

const rounds = [
    new Round([
        new Game(players[7], players[1]).setResult(GameResults.BLACK),
        new Game(players[5], players[4]).setResult(GameResults.DRAW),
        new Game(players[2], players[6]).setResult(GameResults.BLACK),
        new Game(players[8], players[3]).setResult(GameResults.DRAW),
        new Game(players[0], players[9]).setResult(GameResults.BLACK),
    ]),
    new Round([
        new Game(players[1], players[9]).setResult(GameResults.DRAW),
        new Game(players[3], players[0]).setResult(GameResults.WHITE),
        new Game(players[6], players[8]).setResult(GameResults.DRAW),
        new Game(players[4], players[2]).setResult(GameResults.BLACK),
        new Game(players[7], players[5]).setResult(GameResults.DRAW),
    ]),
    new Round([
        new Game(players[5], players[1]).setResult(GameResults.DRAW),
        new Game(players[2], players[7]).setResult(GameResults.WHITE),
        new Game(players[8], players[4]).setResult(GameResults.DRAW),
        new Game(players[0], players[6]).setResult(GameResults.WHITE),
        new Game(players[9], players[3]).setResult(GameResults.WHITE),
    ]),
    new Round([
        new Game(players[1], players[3]).setResult(GameResults.BLACK),
        new Game(players[6], players[9]).setResult(GameResults.DRAW),
        new Game(players[4], players[0]).setResult(GameResults.DRAW),
        new Game(players[7], players[8]).setResult(GameResults.DRAW),
        new Game(players[5], players[2]).setResult(GameResults.DRAW),
    ]),
    new Round([
        new Game(players[2], players[1]).setResult(GameResults.WHITE),
        new Game(players[8], players[5]).setResult(GameResults.WHITE),
        new Game(players[0], players[7]).setResult(GameResults.BLACK),
        new Game(players[9], players[4]).setResult(GameResults.WHITE),
        new Game(players[3], players[6]).setResult(GameResults.BLACK),
    ]),
    new Round([
        new Game(players[1], players[6]).setResult(GameResults.DRAW),
        new Game(players[4], players[3]).setResult(GameResults.DRAW),
        new Game(players[7], players[9]).setResult(GameResults.DRAW),
        new Game(players[5], players[0]).setResult(GameResults.DRAW),
        new Game(players[2], players[8]).setResult(GameResults.DRAW),
    ]),
    new Round([
        new Game(players[8], players[1]).setResult(GameResults.WHITE),
        new Game(players[0], players[2]).setResult(GameResults.BLACK),
        new Game(players[9], players[5]).setResult(GameResults.DRAW),
        new Game(players[3], players[7]).setResult(GameResults.WHITE),
        new Game(players[6], players[4]).setResult(GameResults.BLACK),
    ]),
    new Round([
        new Game(players[1], players[4]).setResult(GameResults.WHITE),
        new Game(players[7], players[6]).setResult(GameResults.WHITE),
        new Game(players[5], players[3]).setResult(GameResults.DRAW),
        new Game(players[2], players[9]).setResult(GameResults.WHITE),
        new Game(players[8], players[0]).setResult(GameResults.BLACK),
    ]),
    new Round([
        new Game(players[0], players[1]),
        new Game(players[9], players[8]),
        new Game(players[3], players[2]),
        new Game(players[6], players[5]),
        new Game(players[4], players[7]),
    ]),
]
