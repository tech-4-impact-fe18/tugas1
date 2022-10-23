const main = document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '663409d041mshaf8303a81fcd1b5p14a014jsn01049bd2bb42',
		'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
	}
};

fetch('https://mental-health-info-api.p.rapidapi.com/news/thetimes', options)
	.then(response => response.json())
	.then(response => showart(response))
	.catch(err => console.error(err));

    
function showart(response) {
    // clear main
    main.innerHTML = "";

    response.forEach((article) => {
        const {source, title, url} = article;

        const articleEl = document.createElement("div");
        articleEl.classList.add("article");

        articleEl.innerHTML = `
        <div class="card h-100 ">
            <div class="card-body">
              <p class="card-text">${title}</p>
            </div>
            <div class="card-footer mb-2">
                <a href="${url}" class="btn btn-outline-secondary" role="button" >Selengkapnya</a>
            </div>
        </div>
        `;

        main.appendChild(articleEl);
    });
}

let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
const loginButton = document.getElementById("loginButton");
const loginGoogle = document.getElementById("loginGoogle");
const bLogin = document.getElementById("b-login");
const bRegister = document.getElementById("b-register");
const dUser = document.getElementById("d-user");
const btnClose = document.getElementById("auth-modal");
let userName = document.getElementById("userName");

// tangkap ID LOGIN dan ID MASUK, manipulasi cssnya

// *IF LOGIN SUCCESS, CALL THIS FUNCTION
const loginSuccess = (user) => {
  btnClose.click();
  bLogin.style.display = "none";
  bRegister.style.display = "none";
  dUser.style.display = "block";
  userName.innerHTML = user;
  return;
  // toStorage(user);
};

// const toRedirect = (redic) => {
//   console.log(redic);
//   if (localStorage.getItem("name") == redic) {
//     console.log("okee");
//     bLogin.style.display = "none";
//     bRegister.style.display = "none";
//     dUser.style.display = "block";
//     userName.innerHTML = redic;
//     return;
//   }
// };

//   const toStorage = (storg) => {
//     // console.log(storg);
//     // console.log(localStorage.getItem('name'));
//     if(localStorage.getItem('name') == storg) {

//         bLogin.classList.toggle("b-none");
//         bRegister.classList.toggle("b-none");
//         dUser.classList.toggle("d-user");
//         userName.innerHTML = storg;
//     }
//     return
//   }

//   const toRedirect = (user) => {
//     console.log(user);

//   }

// *VALIDATION INPUT
document.addEventListener("DOMContentLoaded", (e) => {
//   const user = localStorage.getItem("name");
// //   console.log(user);
//   if (user === null || user === "") {
//     // return window.location.href = "index.html";
//     return;
//   } else {
//     bLogin.style.display = "none";
//     bRegister.style.display = "none";
//     dUser.style.display = "block";
//     userName.innerHTML = user;
//   }
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
      console.log("login berhasil")
      return loginSuccess(user.nama);
        // alert(user.nama)
    //   localStorage.setItem("name", user.nama);
      //   toRedirect(user.name);

      //IF API ERROR
    } catch (error) {
      alert(error);
    }
  });
});
