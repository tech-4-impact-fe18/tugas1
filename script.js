let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
const loginButton = document.getElementById("loginButton");
const loginGoogle = document.getElementById("loginGoogle");
const bLogin = document.getElementById("b-login");
const bRegister = document.getElementById("b-register");
const dUser = document.getElementById("d-user");
const btnClose = document.getElementById('auth-modal')
let userName = document.getElementById("userName");

// if login success, call this function
const loginSuccess = (user) => {

    // alert("login berhasil");
    btnClose.click();
    bLogin.classList.toggle("b-none");
    bRegister.classList.toggle("b-none");
    dUser.classList.toggle("d-user");
    userName.innerHTML = user;
    // window.location.href = "index.html";
    return;
  };

document.addEventListener("DOMContentLoaded", (e) => {
  loginButton.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      const users = await fetch(
        "https://6350b1d078563c1d82c627f2.mockapi.io/persons"
      ).then((response) => response.json());

      const email = inputEmail.value;
      const password = inputPassword.value;

      // Todo: Check if user not exists.
      const user = users.find((user) => {
        return user.email === email;
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



    } catch (error) {
      console.log(error.message);
    }
  });
});
