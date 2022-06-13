const addLeague = async (event) => {
  event.preventDefault();

  const name = document.getElementById("league-input").value.trim();

  const response = await fetch("/api/leagues", {
    method: "POST",
    body: JSON.stringify({
      name,
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

document.getElementById("new-league").addEventListener("submit", addLeague);
