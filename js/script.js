class Player {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }

    static getResultProbability(p1, p2, drawChance = 0.4) {
        if (drawChance < 0 || drawChance > 1) { }

        if (p1.rating > p2.rating) {
            return this.getResultProbability(p2, p1).reverse();
        }

        let D = p2 - p1;
        let p1Win = 1 / (1 + 10 ^ (D / 400));
        let p2Win = 1 - p1Win;
        return [p1Win, p2Win].map(e => (1 - drawChance) * e)


    }
}

const GameResults = Object.freeze({
    NONE: Symbol("none"),
    WHITE: Symbol("1-0"),
    BLACK: Symbol("0-1"),
    DRAW: Symbol("1/2-1/2"),
    FORFEIT: Symbol("0-0"),
});

class Game {
    constructor(white, black) {
        this.white = white;
        this.black = black;
        this.result = GameResults.NONE
    }

    get scores() {
        switch (this.result) {
            case GameResults.WHITE:
                return [1, 0];
            case GameResults.BLACK:
                return [0, 1];
            case GameResults.DRAW:
                return [0.5, 0.5];
            case GameResults.FORFEIT:
                return [0, 0];
            default:
                return null;
        }
    }

    simRandom(drawChance = 0.4) {
        let res = Player.getResultProbability(this.white, this.black, drawChance);
        let rand = Math.random();
        if (rand < res[0]) {
            // White wins
            return [1, 0];
        } else if (rand < res[1]) {
            // Black wins
            return [0, 1]
        } else {
            // Draw
            return [0.5, 0.5]
        }
    }
}

class Round {
    constructor(games = []) {
        this.games = games;
    }

    addGame(p1, p2) {
        this.games.push(new Game(p1, p2));
    }
}

const TournamentFormats = Object.freeze({
    ROUND_ROBIN: Symbol("round robin"),
    // DOUBLE_RR,
    // NORWAY,
    // SWISS?
    // CUSTOM?
});

class Tournament {
    constructor(players = [], rounds = [], format = TournamentFormats.ROUND_ROBIN) {
        this.players = players;
        this.format = format;
        this.rounds = rounds;
    }

    // A generic mapping from players to values that is useful
    get emptyPlayersDict() {
        let r = {}
        this.players.forEach(p => r[p.name] = 0);
        return r;
    }

    get currentScores() {
        let curScores = this.emptyPlayersDict;
        this.rounds.forEach(r =>
            r.games.forEach(g => {
                let s = g.scores;
                if (s) {
                    curScores[g.white.name] += s[0];
                    curScores[g.black.name] += s[1];
                }
            })
        );
    }

    // Simulate the remaining results from the tournament
    simulate() {
        let scores = this.emptyPlayersDict;

        this.rounds.forEach(r =>
            r.games.forEach(g => {
                let s = g.scores ? g.scores : g.simRandom();
                scores[g.white.name] += s[0];
                scores[g.black.name] += s[1];
            })
        );

        return scores;
    }

    simulateBatch(batchSize = 1000) {
        let totalRes = this.emptyPlayersDict;

        for (let i = 0; i < batchSize; ++i) {
            let res = this.simulate();
            this.players.forEach(p => totalRes[p.name] += res[p.name]);
        }

        // Scale by size
        this.players.forEach(p => totalRes[p.name] /= batchSize);
        return totalRes;
    }
}


