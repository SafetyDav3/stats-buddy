const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const passwordConfirm = document.querySelector("#password-confirm").value.trim();
  
    if (email && password && (password === passwordConfirm)) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/leagues");
      } else {
        alert(
          "Signup failed. Please check your signup credentials and try again."
        );
      }
    }
  };

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);