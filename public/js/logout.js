const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Logout failed. Please try again.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
