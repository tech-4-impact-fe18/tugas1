let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
const loginButton = document.getElementById("loginButton");
const loginGoogle = document.getElementById("loginGoogle");
const bLogin = document.getElementById("b-login");
const bRegister = document.getElementById("b-register");
const dUser = document.getElementById("d-user");
const btnClose = document.getElementById('auth-modal')
let userName = document.getElementById("userName");

// *IF LOGIN SUCCESS, CALL THIS FUNCTION
const loginSuccess = (user) => {

    btnClose.click();
    bLogin.classList.toggle("b-none");
    bRegister.classList.toggle("b-none");
    dUser.classList.toggle("d-user");
    userName.innerHTML = user;
    return;
  };

// *VALIDATION INPUT
document.addEventListener("DOMContentLoaded", (e) => {

    // *API ACCESS
  loginButton.addEventListener("click", async (e) => {
    e.preventDefault();

    // *IF API TRUE 0R STATUS 200
    try {
      const users = await fetch(
        "https://6350b1d078563c1d82c627f2.mockapi.io/persons"
      ).then((response) => response.json());

      const email = inputEmail.value;
      const password = inputPassword.value;

      // Todo: Check if user not exists.
      const user = users.find((us) => {
        return us.email === email;
      });

      if (user === undefined) {
        throw new Error("User Not Found!");
      }

      // Todo: If user is exists, check the password.
      if (password !== user.password) {
        throw new Error("Email or Password not Correct!");
      }

      //   Todo: login success
      return loginSuccess(user.name);



      //IF API ERROR
    } catch (error) {
      alert(error.message);
    }
  });
});
