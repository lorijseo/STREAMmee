// displays 10 movies that are trending this week
const trendingWeekBtn = document.getElementById("trendingWeekBtn");

trendingWeekBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayTrendweek();
})

async function displayTrendweek(){
    const response = await fetch(`http://localhost:4000/moviedata/trendweek`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,12).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <div class="grid-item">
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        <p>${title}</p>
        </div>
        `
    }).join("");
    document.querySelector(".displayList").innerHTML = dataDisplay;
}


// displays 10 movies that are trending today
const trendingDayBtn = document.getElementById("trendingDayBtn");

trendingDayBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayTrendday();
})

async function displayTrendday(){
    const response = await fetch(`http://localhost:4000/moviedata/trendday`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,12).map((object) => {
        const {title, backdrop_path} = object;

        return `
        <div class="grid-item">
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        <p>${title}</p>
        </div>
        `
    }).join("");
    document.querySelector(".displayList").innerHTML = dataDisplay;
}

// displays 10 romance movies
const romanceBtn = document.getElementById("romanceBtn");
romanceBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayRomance();
})
async function displayRomance(){
    const response = await fetch(`http://localhost:4000/moviedata/romance`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,10).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <h1> TITLE: ${title}</h1>
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        
        `
    });
    document.querySelector(".displayList").innerHTML = dataDisplay;
}

// displays 10 horror movies
const horrorBtn = document.getElementById("horrorBtn");
horrorBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayHorror();
})
async function displayHorror(){
    const response = await fetch(`http://localhost:4000/moviedata/horror`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,10).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <h1> TITLE: ${title}</h1>
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        
        `
    });
    document.querySelector(".displayList").innerHTML = dataDisplay;
}

// displays 10 action movies
const actionBtn = document.getElementById("actionBtn");
actionBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayAction();
})
async function displayAction(){
    const response = await fetch(`http://localhost:4000/moviedata/action`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,10).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <h1> TITLE: ${title}</h1>
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        
        `
    });
    document.querySelector(".displayList").innerHTML = dataDisplay;
}

// displays 10 adventure movies
const adventureBtn = document.getElementById("adventureBtn");
adventureBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayAdventure();
})
async function displayAdventure(){
    const response = await fetch(`http://localhost:4000/moviedata/adventure`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,10).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <h1> TITLE: ${title}</h1>
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        
        `
    });
    document.querySelector(".displayList").innerHTML = dataDisplay;
}

// displays 10 animation movies
const animationBtn = document.getElementById("animationBtn");
animationBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayAnimation();
})
async function displayAnimation(){
    const response = await fetch(`http://localhost:4000/moviedata/animation`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,10).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <h1> TITLE: ${title}</h1>
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        
        `
    });
    document.querySelector(".displayList").innerHTML = dataDisplay;
}

// displays 10 comedy movies
const comedyBtn = document.getElementById("comedyBtn");
comedyBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayComedy();
})

async function displayComedy(){
    const response = await fetch(`http://localhost:4000/moviedata/comedy`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,10).map((object) => {
        const {title, backdrop_path,  } = object;

        return `
        <h1> TITLE: ${title}</h1>
        <div> <img src="https://image.tmdb.org/t/p/w185/${backdrop_path}" alt="movie poster"/> </div>
        
        `
    });
    document.querySelector(".displayList").innerHTML = dataDisplay;
}
