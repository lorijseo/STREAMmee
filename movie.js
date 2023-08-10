
// displays 12 movies that are trending this week
const trendingWeekBtn = document.getElementById("trendweek");

trendingWeekBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});

async function getTrendweek(){
    const response = await fetch(`http://localhost:4000/moviedata/trendweek`);
    const data = await response.json();
    return data
}


// displays 12 movies that are trending today
const trendingDayBtn = document.getElementById("trendday");

trendingDayBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});

async function getTrendday(){
    const response = await fetch(`http://localhost:4000/moviedata/trendday`);
    const data = await response.json();
    return data

}

// displays 12 romance movies
const romanceBtn = document.getElementById("romance");
romanceBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});
async function getRomance(){
    const response = await fetch(`http://localhost:4000/moviedata/romance`);
    const data = await response.json();
    return data

}

// displays 12 horror movies
const horrorBtn = document.getElementById("horror");
horrorBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});
async function getHorror(){
    const response = await fetch(`http://localhost:4000/moviedata/horror`);
    const data = await response.json();
    return data
}

// displays 12 action movies
const actionBtn = document.getElementById("action");
actionBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});
async function getAction(){
    const response = await fetch(`http://localhost:4000/moviedata/action`);
    const data = await response.json();
    return data

}

// displays 12 adventure movies
const adventureBtn = document.getElementById("adventure");
adventureBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});
async function getAdventure(){
    const response = await fetch(`http://localhost:4000/moviedata/adventure`);
    const data = await response.json();
    return data

}

// displays 12 animation movies
const animationBtn = document.getElementById("animation");
animationBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});
async function getAnimation(){
    const response = await fetch(`http://localhost:4000/moviedata/animation`);
    const data = await response.json();
    return data
}

// displays 12 comedy movies
const comedyBtn = document.getElementById("comedy");
comedyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});

async function getComedy(){
    const response = await fetch(`http://localhost:4000/moviedata/comedy`);
    const data = await response.json();
    return data

}

//displays 12 documentary movies
const documentaryBtn = document.getElementById("documentary");
documentaryBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});

async function getDocumentary(){
    const response = await fetch(`http://localhost:4000/moviedata/documentary`);
    const data = await response.json();
    return data

}

//displays 12 drama movies
const dramaBtn = document.getElementById("drama");
dramaBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});
async function getDrama(){
    const response = await fetch(`http://localhost:4000/moviedata/drama`);
    const data = await response.json();
    return data

}

//displays 12 family movies
const familyBtn = document.getElementById("family");
familyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});


async function getFamily(){
    const response = await fetch(`http://localhost:4000/moviedata/family`);
    const data = await response.json();
    return data

}

//displays 12 fantasy movies
const fantasyBtn = document.getElementById("fantasy");
fantasyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});


async function getFantasy(){
    const response = await fetch(`http://localhost:4000/moviedata/fantasy`);
    const data = await response.json();
    return data
}

//displays 12 history movies
const historyBtn = document.getElementById("history");
historyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});

async function getHistory(){
    const response = await fetch(`http://localhost:4000/moviedata/history`);
    const data = await response.json();
    return data

}

//displays 12 music movies
const musicBtn = document.getElementById("music");
musicBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
})

async function getMusic(){
    const response = await fetch(`http://localhost:4000/moviedata/music`);
    const data = await response.json();
    return data
}

//displays 12 mystery movies
const mysteryBtn = document.getElementById("mystery");
mysteryBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
})

// async function getMystery(){
//     const response = await fetch(`http://localhost:4000/moviedata/mystery`);
//     const data = await response.json();
//     return data
// }





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




const thrillerBtn = document.getElementById("thriller");
thrillerBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
})


async function getMovieApi(genreName){
    const response = await fetch(`http://localhost:4000/moviedata/${genreName}`);
    const data = await response.json();
    return data
}














function createMovieContainer(data,index){
    const {id,title, poster_path, backdrop_path, overview, release_date, vote_average} = data;
    const imageWidth = 300;
    const className = "movie_btn_" + index;
    let imgSrc = `"https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}"` 

    if((poster_path == null)){
        imgSrc=`"ammonia_icon.png" style = "width: 300px"`
    }


    return `    <div class="movie" id=${className}>    <div class="poster">
            <div> <img src=${imgSrc} alt="movie poster"/> </div>
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


// function createMovieContainer(data,index){
//     const {id,title, poster_path, backdrop_path, overview, release_date, vote_average} = data;
//     const imageWidth = 780;
//     const className = "movie_btn_" + index;
//     let imgSrc = `"https://image.tmdb.org/t/p/w${imageWidth}/${backdrop_path}"` 

//     if((backdrop_path == null)){
//         imgSrc=`"ammonia_icon.png" style = "width: 300px"`
//     }


//     return `    <div class="movie" id=${className}>    <div class="poster">
//             <div> <img src=${imgSrc} alt="movie poster"/> </div>
//         </div>


//         <div id="${id}" class="title" style="width: ${imageWidth}px ">
//             ${title}
//         </div>

//         <div class="descr">
//             <div class="date">${release_date}</div>
//             <div class="vote"><i class="fa-solid fa-star" style="color:orange">&nbsp;</i>${vote_average}</div>
//         </div>
//         </div>
//         `
    
// }








//displays 12 war movies
const warBtn = document.getElementById("war");
warBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});


async function getWar(){
    const response = await fetch(`http://localhost:4000/moviedata/war`);
    const data = await response.json();
    return data
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
    // let potentialTrailerList = [];
    for(let video in videoList){
        let current_vid = videoList[video]
        if((current_vid.type == "Trailer")&&(current_vid.official == true)){
            let video_key = current_vid.key;
            console.log(current_vid);
            console.log(document.querySelector("#modalthere"));
            document.querySelector("#modalthere").innerHTML = `
            <iframe height="360" width="640"  
            src="https://www.youtube.com/embed/${video_key}">
            </iframe>`

            return
            
        }
    }
}



function validateTrailer(videoList){
    let videoSrc = '""';
    if (videoList.length > 0){
        for(let i=videoList.length-1; i>=0; i--){
            let currentVid = videoList[i];
            if((currentVid.name.search("trailer") >= 0)||(currentVid.name.search("Trailer") >= 0)){
                let videoKey = currentVid.key;
                return videoSrc = `"https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&rel=0"`
            }
        }
    }
    return videoSrc


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



// function displayMovie(foundMovie){

//     const videoWidth = 798;
//     const videoHeight = 798 / (16/9);

//     document.querySelector("#modalhere").innerHTML = `
//     <div class="videoDisplay">
//     <iframe id="movieTrailer"height="${videoHeight}" width="${videoWidth}" allow="autoplay" 
//     src="https://www.youtube.com/embed/${foundMovie.videos.results[0].key}?autoplay=1&mute=1&rel=0"" frameborder="0" allowfullscreen> 
//     </iframe></div>
//     <div><h3 class="previewTitle">${foundMovie.title}</h3></div>
//     <div><p class="previewDescr" id= "overview">${foundMovie.overview}</p></div>

//     `
  
// }


function displayMovie(foundMovie){
    console.log(foundMovie)
    const {id,title, poster_path, runtime, genres, production_companies, overview, release_date, vote_average, videos} = foundMovie;
    const videoWidth = 798;
    const videoHeight = 798 / (16/9);

    const videoSrc = validateTrailer(videos.results)

    // logoList =[]
    // for (company in production_companies){
    //     let logoSrc = production_companies[company].logo_path;
    //     logoList.push(logoSrc)
    // }
    const logoArray = displayPreviewLogo(production_companies)

    const genreArray = displayPreviewGenre(genres);

    document.querySelector("#modalhere").innerHTML = `
    <div class="videoDisplay">
    <iframe id="movieTrailer"height="${videoHeight}" width="${videoWidth}" allow="autoplay" 
    src=${videoSrc} frameborder="0" allowfullscreen> 
    </iframe></div>
    <h3 class="previewTitle">${title}</h3>
    ${genreArray} <p class="previewTime">${runtime} min</p>
    <p class="previewDescr" id= "overview">${overview}</p>
    ${logoArray}


    `
  
}

{/* <p class="previewDescr"><img src="https://image.tmdb.org/t/p/w92/${object.logo_path}" alt=""></p>    
<p class="previewDescr"><img src="https://image.tmdb.org/t/p/w92/${logoList[1]}" alt=""></p>
<p class="previewDescr"><img src="https://image.tmdb.org/t/p/w92/${logoList[2]}" alt=""></p>
<p class="previewDescr"><img src="https://image.tmdb.org/t/p/w92/${logoList[3]}" alt=""></p> */}

function displayPreviewLogo(logoList){
    let dataDisplay = logoList.slice(0,logoList.length).map((object, index) => {
        if (object.logo_path !== null){
            return `<p class="previewLogoIcon" id="logo_${index}"><img src="https://image.tmdb.org/t/p/w92/${object.logo_path}" alt=""></p>`
        }
        return
    }).join("");
    return dataDisplay
}


function displayPreviewGenre(genreList){

    let dataDisplay = genreList.slice(0,genreList.length).map((object, index) => {
        return `<p class="previewGenreIcon" id="genre_${index}">${object.name}</p>`
    }).join("");
    return dataDisplay
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
    for (let i=0; i<selectedMovie.length; i++){
        if (selectedMovie[i].id){
            const movieBtn = document.querySelector(`#${selectedMovie[i].id}`);
            movieBtn.addEventListener("click", async function(e){
                e.preventDefault();
                const movieClass = this.querySelector(".title");
                const movieId = movieClass.id;
                data = await getMovie(movieId);
                displayMoviePreview(data);
    
            })
        }

    }
}



function displayMoviePreview(data){
    displayMovie(data);
    // displayVideo(data.id);
    // jQuery.noConflict();
    $('#myModal').modal('show');
}

// $(function displayMoviePreview(e,data){
//     e.preventDefault();
//     $('#myModal').modal('hide');
//     displayMovie(data);
//     displayVideo(data.id);
//     $('#myModal').modal('show');
// })

$('.wap').click(function(){
    $('.modalContainer').show();
})

$('.wapa').click(function(){
    $('.modalContainer').hide();
})

// document.querySelector("#modalthere").innerHTML=`WAPAAAAA`


//turns off youtube when modal closed
$(document).ready(function() {
    let url = $("#movieTrailer").attr('src');
    $('#myModal').on('hide.bs.modal', function() {
        $("#movieTrailer").attr('src', '');
    });
    $('#myModal').on('show.bs.modal', function() {
        $("#movieTrailer").attr('src', url);
    });
});

// $('.dropdown-item').click(function(){
//     $('.dropdown-menu').css("display", "none")
// })