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


const bLogin = document.getElementById("b-login");
const bRegister = document.getElementById("b-register");
const dUser = document.getElementById("d-user");
const btnClose = document.getElementById("auth-modal");
const btnOut = document.getElementById("out");
let userName = document.getElementById("userName");


// *VALIDATION INPUT
document.addEventListener("DOMContentLoaded", (e) => {
  const user = localStorage.getItem("name");

  if (user !== null && user !== "") {
    bLogin.style.display = "none";
    bRegister.style.display = "none";
    dUser.style.display = "block";
    userName.innerHTML = user;
  }
  
});

