const APIPath = "https://raw.githubusercontent.com/rejinnepal/SuperHero/main/posts%20copy.json";
const numberOfResults = 9;
const postGrid = document.querySelector('#post-grid');
const searchBtn = document.querySelector('#btn-search');
let posts = [];

fetch("https://raw.githubusercontent.com/rejinnepal/SuperHero/main/posts%20copy.json")

    .then(response => response.json())
    .then((data) => {
        posts = data;
        console.log("This is the res:",data);
        updatePosts(data);
    });

function updatePosts(posts) {
    let allCardsDom = '';
    for (var i =0; i < posts.length; i++){
        const cardTemplate = 
            `<div class="col">
                <div class="card">
                    <img src="${posts[i].images}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${posts[i].name}</h5>
                        <p class="card-poster">${posts[i].by}</p>
                        <p class="card-date">${posts[i].on}</p>
                        <p class="card-text">${posts[i].detail}</p>  
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
         postGrid.innerHTML = allCardsDom;
    };
}

function filterByName() {
    const searchInput = document.querySelector('#search-input').value;
    let filteredArray = [];
    if(searchInput && searchInput.length){
        posts.forEach((post) => {
            if(post.name.toLowerCase()
                .startsWith(searchInput.toLowerCase()))
                filteredArray.push(post);
        });
    }else {
        return posts;
    }
    console.log({searchInput});
    return filteredArray;
}

searchBtn.addEventListener('click',(e)=>{
    console.log('Search button clicked...');
    let filteredList = filterByName();
    updatePosts(filteredList);
});