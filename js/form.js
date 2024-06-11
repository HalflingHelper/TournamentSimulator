/*
    Builds the form and event listeners for a tournament
*/

const formContainer = document.getElementById("game-picker")


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name)
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function gameSelect(checkbox) {
    onlyOne(checkbox);

    let [_, round, g] = checkbox.name.split(",")

    if (checkbox.checked) {
        let res = checkbox.id === "white" ? GameResults.WHITE :
            checkbox.id === "black" ? GameResults.BLACK :
                GameResults.DRAWx;

        tournament.rounds[round].games[g].result = res;
    } else {
        tournament.rounds[round].games[g].result = GameResults.NONE;
    }

    processTournament();
}

let htmlString = ""

tournament.rounds.forEach((r, i) => {
    htmlString += `<div class="round-box">
                    <h2>Round ${i + 1}</h2>`;
    r.games.forEach((g, j) => {
        let isDisabled = g.result == GameResults.NONE ? "" : "disabled";
        let whiteChecked, drawChecked, blackChecked = "";

        switch (g.result) {
            case GameResults.BLACK:
                blackChecked = "checked";
                break;
            case GameResults.DRAW:
                drawChecked = "checked";
                break;
            case GameResults.WHITE:
                whiteChecked = "checked";
                break;
        }


        htmlString += `<div class="game-box">
                <div class="game-name">
                    ${g.white.name} vs. ${g.black.name}
                </div>
                <fieldset class="game-selector">
                    <div class="white">
                        <input ${isDisabled} type="checkbox" id="white" name="game,${i},${j}" ${whiteChecked} onclick="gameSelect(this)" />
                        <label for="white">White</label>
                    </div>
                    <div class="draw">
                        <input ${isDisabled} type="checkbox" id="draw" name="game,${i},${j}" ${drawChecked} onclick="gameSelect(this)" />
                        <label for="draw">Draw</label>
                    </div>
                    <div class="black">
                        <input ${isDisabled} type="checkbox" id="black" name="game,${i},${j}" ${blackChecked} onclick="gameSelect(this)" />
                        <label for="black">Black</label>
                    </div>

                </fieldset>
            </div>`
    });
    htmlString += `</div>`
});


formContainer.innerHTML = htmlString;