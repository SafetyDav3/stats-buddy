const addManager = async (event) => {
    event.preventDefault();

    const manager = document.getElementById().value.trim();

    const response = await fetch("/api/teams/", {
        method: 'PUT',
        body: JSON.stringify({
            manager
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