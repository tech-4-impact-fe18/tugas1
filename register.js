let container = document.getElementsByClassName('container') [0];
let nama = document.getElementById('nama');
let email = document.getElementById('email');
let password = document.getElementById('password'); 
let confirm_pass = document.getElementById('konfirmasi');
let register = document.getElementById("register")

async function daftar(data) {
    try {
        let result = await fetch("https://634f638adf22c2af7b502de8.mockapi.io/users", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              },
            
        })
        alert("Anda Berhasil Registrasi", result);
        window.location.href="landing-page.html"
    } catch (error) {
        alert("gagal register");
    }
}

register.addEventListener("click", (event) => {
    
    event.preventDefault()

    let user_regis = {
        nama : nama.value,
        email : email.value,
        password : password.value 
    };
    if(nama.value && email.value && password.value){
        return daftar(user_regis)
    }
    return alert("Form Harus Diisi")
})
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
const loginButton = document.getElementById("loginButton");
const loginGoogle = document.getElementById("loginGoogle");
const bLogin = document.getElementById("b-login");
const bRegister = document.getElementById("b-register");
const dUser = document.getElementById("d-user");
const btnClose = document.getElementById("auth-modal");
const btnOut = document.getElementById("out");
let userName = document.getElementById("userName");

// *IF LOGIN SUCCESS, CALL THIS FUNCTION
const loginSuccess = (user) => {
  btnClose.click();
  bLogin.style.display = "none";
  bRegister.style.display = "none";
  dUser.style.display = "block";
  userName.innerHTML = user;
  return;
};

// Todo: button Keluar di klik
btnOut.onclick = () => {
  localStorage.clear()
  location.reload()
}

// *VALIDATION INPUT
document.addEventListener("DOMContentLoaded", (e) => {
  const user = localStorage.getItem("name");

  if (user !== null && user !== "") {
    bLogin.style.display = "none";
    bRegister.style.display = "none";
    dUser.style.display = "block";
    userName.innerHTML = user;
  }
  
  // *API ACCESS
  loginButton.addEventListener("click", async (e) => {
    e.preventDefault();

    // *IF API TRUE 0R STATUS 200
    try {
      const users = await fetch(
        "https://634f638adf22c2af7b502de8.mockapi.io/users"
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
      localStorage.setItem("name", user.nama);
      return loginSuccess(user.nama);
      //   toRedirect(user.name);

      //IF API ERROR
    } catch (error) {
      alert(error.message);
    }
  });
});
