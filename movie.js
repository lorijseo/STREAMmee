
// displays 12 movies that are trending this week
const trendingWeekBtn = document.getElementById("trendingWeekBtn");

trendingWeekBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayTrendweek();
})

async function getTrendweek(){
    const response = await fetch(`http://localhost:4000/moviedata/trendweek`);
    const data = await response.json();
    return data
}


// displays 12 movies that are trending today
const trendingDayBtn = document.getElementById("trendingDayBtn");

trendingDayBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayTrendday();
})

async function getTrendday(){
    const response = await fetch(`http://localhost:4000/moviedata/trendday`);
    const data = await response.json();
    return data

}

// displays 12 romance movies
const romanceBtn = document.getElementById("romanceBtn");
romanceBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayRomance();
})
async function getRomance(){
    const response = await fetch(`http://localhost:4000/moviedata/romance`);
    const data = await response.json();
    return data

}

// displays 12 horror movies
const horrorBtn = document.getElementById("horrorBtn");
horrorBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayHorror();
})
async function getHorror(){
    const response = await fetch(`http://localhost:4000/moviedata/horror`);
    const data = await response.json();
    return data
}

// displays 12 action movies
const actionBtn = document.getElementById("actionBtn");
actionBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayAction();
})
async function getAction(){
    const response = await fetch(`http://localhost:4000/moviedata/action`);
    const data = await response.json();
    return data

}

// displays 12 adventure movies
const adventureBtn = document.getElementById("adventureBtn");
adventureBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayAdventure();
})
async function getAdventure(){
    const response = await fetch(`http://localhost:4000/moviedata/adventure`);
    const data = await response.json();
    return data

}

// displays 12 animation movies
const animationBtn = document.getElementById("animationBtn");
animationBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayAnimation();
})
async function getAnimation(){
    const response = await fetch(`http://localhost:4000/moviedata/animation`);
    const data = await response.json();
    return data
}

// displays 12 comedy movies
const comedyBtn = document.getElementById("comedyBtn");
comedyBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayComedy();
})

async function getComedy(){
    const response = await fetch(`http://localhost:4000/moviedata/comedy`);
    const data = await response.json();
    return data

}

//displays 12 documentary movies
const documentaryBtn = document.getElementById("documentaryBtn");
documentaryBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayDocumentary();
})

async function getDocumentary(){
    const response = await fetch(`http://localhost:4000/moviedata/documentary`);
    const data = await response.json();
    return data

}

//displays 12 drama movies
const dramaBtn = document.getElementById("dramaBtn");
dramaBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayDrama();
})

async function getDrama(){
    const response = await fetch(`http://localhost:4000/moviedata/drama`);
    const data = await response.json();
    return data

}

//displays 12 family movies
const familyBtn = document.getElementById("familyBtn");
familyBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayFamily();
})

async function getFamily(){
    const response = await fetch(`http://localhost:4000/moviedata/family`);
    const data = await response.json();
    return data

}

//displays 12 fantasy movies
const fantasyBtn = document.getElementById("fantasyBtn");
fantasyBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayFantasy();
})

async function getFantasy(){
    const response = await fetch(`http://localhost:4000/moviedata/fantasy`);
    const data = await response.json();
    return data
}

//displays 12 history movies
const historyBtn = document.getElementById("historyBtn");
historyBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayHistory();
})

async function getHistory(){
    const response = await fetch(`http://localhost:4000/moviedata/history`);
    const data = await response.json();
    return data

}

//displays 12 music movies
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayMusic();
})

async function getMusic(){
    const response = await fetch(`http://localhost:4000/moviedata/music`);
    const data = await response.json();
    return data
}

//displays 12 mystery movies
const mysteryBtn = document.getElementById("mysteryBtn");
mysteryBtn.addEventListener("click", async function(e){
    e.preventDefault();
    await displayMystery();
    addMovieRoutes();
})

async function getMystery(){
    const response = await fetch(`http://localhost:4000/moviedata/mystery`);
    const data = await response.json();
    return data
}




const thrillerBtn = document.getElementById("thrillerBtn");
thrillerBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const data = await getThriller();
    displayMovieContainer(data);
    addMovieRoutes();
})


async function getThriller(){
    const response = await fetch(`http://localhost:4000/moviedata/thriller`);
    const data = await response.json();
    return data

}

function displayMovieContainer(data){
    let dataDisplay = data.results.slice(0,12).map((object, index) => {
        return createMovieContainer(object,index)
    }).join("");

    document.querySelector(".displayList").innerHTML = dataDisplay;
}
















// function test(data){
//     const {title, poster_path, overview, release_date, vote_average} = data;
//     return `
//     <div class="grid-item">
//     <div title="Synopsis: ${overview}"> <img src="https://image.tmdb.org/t/p/w300/${poster_path}" alt="movie poster" /> </div>
//     </div>
//     <div class="grid-item" id="one-movie">
//     <div class="grid-item"><h3 class="title" title="Synopsis: ${overview}">"${title}"</h3></div>
//     <div class="grid-item"><p class="overview" id= "overview" title="Synopsis: ${overview}">${overview}</p></div>
//     <div class="grid-item"><p class="date" id= "date">Release Date:  ${release_date.slice(5,10)}${release_date[4]}${release_date.slice(0,4)} &nbsp; Vote Average: ${vote_average.toFixed(1)} </p></div>
//     </div>
//     `
// }

// function createMovieContainer(data){
//     const {title, poster_path, overview, release_date, vote_average} = data;
//     const imageWidth = 300;

//     return `    <div class="movie">    <div class="poster">
//             <img src="https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}" alt="movie poster" /> 
//         </div>


//         <div class="title" style="width: ${imageWidth}px ">
//             ${title}
//         </div>

//         <div class="descr">
//             <div class="date">${release_date}</div>
//             <div class="vote"><i class="fa-solid fa-star" style="color:orange">&nbsp;</i>${vote_average}</div>
//         </div>
//         </div>
//         `
    
// }

function createMovieContainer(data,index){
    const {id,title, poster_path, overview, release_date, vote_average} = data;
    const imageWidth = 300;
    const className = "movie_btn_" + index;
    return `    <div class="movie" id=${className}>    <div class="poster">
            <div> <img src="https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}" alt="movie poster" /> </div>
        </div>


        <div id="${id}" class="title" style="width: ${imageWidth}px ">
            ${title}
        </div>

        <div class="descr">
            <div class="date">${release_date}</div>
            <div class="vote"><i class="fa-solid fa-star" style="color:orange">&nbsp;</i>${vote_average}</div>
        </div>
        </div>
        `
    
}











//displays 12 war movies
const warBtn = document.getElementById("warBtn");
warBtn.addEventListener("click", function(e){
    e.preventDefault();
    displayWar();
})

async function displayWar(){
    const response = await fetch(`http://localhost:4000/moviedata/war`);
    const data = await response.json();
    let dataDisplay = data.results.slice(0,12).map((object) => {
        const {title, poster_path, backdrop_path, overview, release_date, vote_average} = object;
        let imgSrc = `"https://image.tmdb.org/t/p/w300/${poster_path}"`;

        if((poster_path == null) && (backdrop_path== null)){
            imgSrc="ammonia_icon.png"
        }
        else if (poster_path == null){
            imgSrc = `"https://image.tmdb.org/t/p/w300/${backdrop_path}"`
        }
        else{
            imgSrc = `"https://image.tmdb.org/t/p/w300/${poster_path}"`
        }


        return `
        <div class="grid-item">
        <div title="Synopsis: ${overview}"> <img src=${imgSrc} alt="movie poster" /> </div>
        </div>
        <div class="grid-item" id="one-movie">
        <div class="grid-item"><h3 class="title" title="Synopsis: ${overview}">"${title}"</h3></div>
        <div class="grid-item"><p class="overview" id= "overview" title="Synopsis: ${overview}">${overview}</p></div>
        <div class="grid-item"><p class="date" id= "date">Release Date:  ${release_date.slice(5,10)}${release_date[4]}${release_date.slice(0,4)} &nbsp; Vote Average: ${vote_average.toFixed(1)} </p></div>
        </div>
        `
    }).join("");

    document.querySelector(".displayList").innerHTML = dataDisplay;

}


async function getKeywords(movie_id){
    const response = await fetch(`http://localhost:4000/get_keys/${movie_id}`);
    const data = await response.json();
    return data.keywords

}

async function getMovieList(movie_title){
    const response = await fetch(`http://localhost:4000/get_movies/${movie_title}`);
    const data = await response.json();
    return data
}

async function getMovie(movie_id){
    const response = await fetch(`http://localhost:4000/get_movie/${movie_id}`);
    const data = await response.json();
    return data
}

async function getVideo(movie_id){
    const response = await fetch(`http://localhost:4000/get_video/${movie_id}`);
    const data = await response.json();
    return data
}


// given movie's keywords, find any keywords relating to books or novels
function adaptedFromBook(keywordArr){
    for(let i in keywordArr){
        if(keywordArr[i].id == 818){
            return true
        }
    }
}


// ********consider if poster not available*********
// async function displaySimiliarMovies(data){

//     let dataDisplay = data.results.slice(0,20).map((object,index) => {
//         const {title,id, poster_path, backdrop_path, overview, release_date, vote_average} = object;
//         let imgSrc = `"https://image.tmdb.org/t/p/w300/${poster_path}"`;

//         let className = "movie_btn_" + index;
//         if((poster_path == null) && (backdrop_path== null)){
//             imgSrc="ammonia_icon.png"
//         }
//         else if (poster_path == null){
//             imgSrc = `"https://image.tmdb.org/t/p/w300/${backdrop_path}"`
//         }
//         else{
//             imgSrc = `"https://image.tmdb.org/t/p/w300/${poster_path}"`
//         }

//         return `
//         <div class="movie"> 
//         <div id="${id}" class=${className}> <img src=${imgSrc} alt="movie poster" /> </div>
//         </div>
//         `
//     }).join("");

//     document.querySelector(".displayList").innerHTML = dataDisplay;

// }


function displaySimiliarMovies(data){

    let dataDisplay = data.results.slice(0,12).map((object, index) => {
        // return displayMoviePoster(object)
        return createMovieContainer(object,index)
    }).join("");

    document.querySelector(".displayList").innerHTML = dataDisplay;

}



function createMovieBtns(){
    //consider the number of outcomes
    for (let i=0; i<10; i++){
        let className = "#movie_btn_" + i;
        console.log(className)

        const movieBtn = document.querySelector(className)
        console.log(movieBtn)
        movieBtn.addEventListener("click", async function(e){
            e.preventDefault();
            const chosenMovie = document.querySelector(className);
            console.log(chosenMovie)
            document.querySelector(".displayList").innerHTML="";
            // document.querySelector(".displayList").appendChild(chosenMovie);
            const id = chosenMovie.id;
            const data = await getMovie(id);
            displayMovie(data);
            const keywordsData = await getKeywords(id);
            if (adaptedFromBook(keywordsData)){
                alert("we have a book!")
            }
            else{
                alert("noiirrr book")
            }
            displayVideo(id)
        })

    }
    
}

async function displayVideo(id){
    const video = await getVideo(id);
    const videoList = video.results;
    const wordList = ["Official", "official", "Trailer", "trailer"]
    let potentialTrailerList = [];
    for(let video in videoList){
        let current_vid = videoList[video]
        if((current_vid.type == "Trailer")&&(current_vid.official == true)){
            let video_key = current_vid.key;
            console.log(current_vid);
            document.querySelector(".displayVideo").innerHTML = `
            <iframe height="360" width="640"  
            src="https://www.youtube.com/embed/${video_key}">
            </iframe>`
            return
            
        }
    }
}


const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const searchMovie = document.querySelector("#search_input").value;
    const movieList = await getMovieList(searchMovie);

    //validate if movie title exists
    if (movieList.results.length > 0){
        displaySimiliarMovies(movieList);
        addMovieRoutes()
        // createMovieBtns();
    }
    else{
        alert("doesn't exist")
    }
    return
})

function displayMovie(foundMovie){
    document.querySelector(".displayMovie").innerHTML = `
    <div class="grid-item">
    <div title="Synopsis: ${foundMovie.overview}"> <img src="https://image.tmdb.org/t/p/w300/${foundMovie.poster_path}" alt="movie poster" /> </div>
    </div>
    <div class="grid-item" id="one-movie">
    <div class="grid-item"><h3 class="title" title="Synopsis: ${foundMovie.overview}">"${foundMovie.title}"</h3></div>
    <div class="grid-item"><p class="overview" id= "overview" title="Synopsis: ${foundMovie.overview}">${foundMovie.overview}</p></div>
    </div>
    `
}

async function findMovie(movieTitle){
    const response = await fetch(`http://localhost:4000/moviedata/trendweek`);
    const data = await response.json();

    for(let page in data){
        for(let j=0; j<20; j++){
            if (data[page].results[j].title == movieTitle){
                const foundMovie = data[page].results[j];
                const movieId = foundMovie.id;
                // console.log(movieId);
                return foundMovie;
            }
        } 
    }
    alert("NANI what movie?!?")
    return false;
}





function addMovieRoutes(){
    let selectedMovie = document.querySelectorAll(".movie");
    console.log(selectedMovie)
    for (let i=0; i<selectedMovie.length; i++){
        console.log(selectedMovie[i].id);
        if (selectedMovie[i].id){
            const movieBtn = document.querySelector(`#${selectedMovie[i].id}`);
            movieBtn.addEventListener("click", async function(e){
                e.preventDefault();
                const movieClass = this.querySelector(".title");
                const movieId = movieClass.id;
                data = await getMovie(movieId);
                console.log(data);
                displayMoviePreview(data);
    
            })
        }

    }
}

function displayMoviePreview(data){
    document.querySelector(".displayList").innerHTML="";
    displayMovie(data);
    displayVideo(data.id);
}