/* 
    Information for the GCT Bucharest
    Entered by hand, source: https://www.chess.com/events/2024-gct-superbet-chess-classic/games
*/
const players = [
    //0
    new Player("GM Fabiano Caruana", 2805),
    //1
    new Player("GM Alireza Firouzja", 2737),
    //2
    new Player("GM Praggnanandhaa Rameshbabu", 2747),
    //3
    new Player("GM Nodirbek Abusattorov", 2766),
    //4
    new Player("GM Ian Nepomniatchtchi", 2770),
    //5
    new Player("GM Maxime Vachier-Lagrave", 2732),
    //6
    new Player("GM Bogdan-Daniel Deac", 2680),
    //7
    new Player("GM Gukesh Dommaraju", 2763),
    //8
    new Player("GM Wesley So", 2757),
    //9
    new Player("GM Anish Giri", 2745),
];

const rounds = [
    new Round([
        new Game(players[1], players[0]),
        new Game(players[3], players[2]),
        new Game(players[5], players[4]),
        new Game(players[7], players[6]),
        new Game(players[9], players[8]),
    ]),
    new Round([
        new Game(players[0], players[8]),
        new Game(players[6], players[9]),
        new Game(players[4], players[7]),
        new Game(players[2], players[5]),
        new Game(players[1], players[3]),
    ]),
    new Round([
        new Game(players[3], players[0]),
        new Game(players[5], players[1]),
        new Game(players[7], players[2]),
        new Game(players[9], players[4]),
        new Game(players[8], players[6]),
    ]),
    new Round([
        new Game(players[0], players[6]),
        new Game(players[4], players[8]),
        new Game(players[2], players[9]),
        new Game(players[1], players[7]),
        new Game(players[3], players[5]),
    ]),
    new Round([
        new Game(players[5], players[0]),
        new Game(players[7], players[3]),
        new Game(players[9], players[1]),
        new Game(players[8], players[2]),
        new Game(players[6], players[4]),
    ]),
    new Round([
        new Game(players[0], players[4]),
        new Game(players[2], players[6]),
        new Game(players[1], players[8]),
        new Game(players[3], players[9]),
        new Game(players[5], players[7]),
    ]),
    new Round([
        new Game(players[7], players[0]),
        new Game(players[9], players[5]),
        new Game(players[8], players[3]),
        new Game(players[6], players[1]),
        new Game(players[4], players[2]),
    ]),
    new Round([
        new Game(players[0], players[2]),
        new Game(players[1], players[4]),
        new Game(players[3], players[6]),
        new Game(players[5], players[8]),
        new Game(players[7], players[9]),
    ]),
    new Round([
        new Game(players[9], players[0]),
        new Game(players[8], players[7]),
        new Game(players[6], players[5]),
        new Game(players[4], players[3]),
        new Game(players[2], players[1]),
    ]),
]
