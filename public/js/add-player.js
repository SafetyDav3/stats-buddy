
const addPlayer = async (event) => {
    event.preventDefault();

    const player_name = document.getElementById('player-input').value.trim();
    const team_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch("/api/players", {
        method: 'POST',
        body: JSON.stringify({
            player_name,
            team_id
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


document.getElementById('add-player').addEventListener('submit', addPlayer);
