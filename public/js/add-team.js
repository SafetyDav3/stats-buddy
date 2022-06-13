const addTeam = async (event) => {
  event.preventDefault();

  const manager = "No one";

  const team_name = document.getElementById("team-input").value.trim();
  const league_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(team_name);
  console.log(league_id);
  const response = await fetch("/api/teams", {
    method: "POST",
    body: JSON.stringify({
      team_name,
      manager,
      league_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(await response.text());
    alert(response.statusText);
  }
};

document.getElementById("add-team").addEventListener("submit", addTeam);
