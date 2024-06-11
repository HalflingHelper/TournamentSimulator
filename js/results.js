function getResArray(scores, wins) {
    return Object.keys(wins)
        .map(k => [wins[k], scores[k], k])
        .sort((a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0])
}

function buildTableHtml(res_array) {
    let res_html = `<thead><tr>
                        <th>Player</th><th>Win Chance</th><th>Average Score</th>
                    </tr></thead>
                    <tbody>`;

    res_array.forEach(e => {
        [w, s, p] = e;
        res_html += `<tr>
                        <td>${p}</td>
                        <td>${Math.round(10000 * w / batchSize) / 100}%</td>
                        <td>${Math.round(100 * s) / 100}</td>
                    </tr>`
    });

    res_html += `</tbody>`;

    return res_html;
}

function processTournament() {
    let [scores, wins] = tournament.simulateBatch(batchSize);
    let res_array = getResArray(scores, wins)
    res_table.innerHTML = buildTableHtml(res_array)
}
