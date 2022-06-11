
const addGame = async (event) => {
    event.preventDefault();

    const gameAB = document.getElementById('game-ab').value.trim();
    const gameHits = document.getElementById('game-hits').value.trim();
    const gameBB = document.getElementById('game-bb').value.trim();
    const gameStrikeouts = document.getElementById('game-strikeouts').value.trim();
    const gameRBI = document.getElementById('game-rbi').value.trim();
    const gameRS = document.getElementById('game-rs').value.trim();
    const gameSB = document.getElementById('game-sb').value.trim();
    const gameInnings = document.getElementById('game-innings').value.trim();
    const gameEarnedRuns = document.getElementById('game-earned-runs').value.trim();
    const gameHitsGiven = document.getElementById('game-hits-given').value.trim();
    const gameK = document.getElementById('game-k').value.trim();
    const gameWalk = document.getElementById('game-walks').value.trim();
    const player_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch("/api/games", {
        method: 'POST',
        body: JSON.stringify({
            gameAB,
            gameHits,
            gameBB,
            gameStrikeouts,
            gameRBI,
            gameRS,
            gameSB,
            gameInnings,
            gameEarnedRuns,
            gameHitsGiven,
            gameK,
            gameWalk,
            player_id
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};


document.getElementById('add-game').addEventListener('submit', addGame);