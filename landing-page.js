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

{/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>

<div class="col-auto">
                <div class="card-body">
                        <p class="card-text">${title}</p>
                    </div>
                    <div class="card-footer">
                        <a href="${url}" class="btn btn-primary me-4" role="button" >Selengkapnya</a>
                    </div>
            </div> */}