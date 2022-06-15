const addManager = async (event) => {
    event.preventDefault();

    const manager = document.getElementById('manager-input').value.trim();
    const team_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];
    const response = await fetch("/api/teams/" + team_id, {
        method: 'PUT',
        body: JSON.stringify({
            manager,
            
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

document.getElementById('add-manager').addEventListener('submit', addManager);