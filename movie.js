var $j = jQuery.noConflict();

$j(".owl-carousel").each(function(){
    $j(this).owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        mouseDrag:true,
        // autoplay:true,
        // autoplayTimeout: 3000,
        dots:true,
        stagePadding:50,
        pagination : false,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:6
            }
        }
    });
  });

//jquery runs after document is loaded


// $j(function($){
//     $('#trendTodayOwl').owlCarousel({
//         loop:true,
//         margin:10,
//         // nav:true,
//         mouseDrag:true,
//         // autoplay:true,
//         // autoplayTimeout: 3000,
//         dots:true,
//         stagePadding:50,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:8
//             }
//         }
//     });
// });

document.querySelector('#topBtn').addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,0);
})


$j(function(){

        $j("#dialog-message" ).dialog({
        modal: true,
        autoOpen:false,
        buttons: [
            {
                id: "cancel-button",
                // text: "byebye",
                // showText: false,
                // icons: {primary: "ui-icon-heart"},
                click: function() {
                    $j( this ).dialog( "close" );}
            }

        ],
        width: 740,
        //prevents lag
        // draggable:false,
        show: {
          effect: "fade",
          duration: 1000
        },
        hide: {
          effect: "fade",
          duration: 1000
        }
    });


    $j( "#cancel-button" ).html('<i class="fa-solid fa-circle-xmark fa-xl"></i>')

})





// async function getTrendweek(){
//     const response = await fetch(`http://localhost:4000/moviedata/trendweek`);
//     const data = await response.json();
//     return data
// }

// async function getTrendday(){
//     const response = await fetch(`http://localhost:4000/moviedata/trendday`);
//     const data = await response.json();
//     return data

// }

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





const thrillerBtn = document.getElementById("thriller");
thrillerBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
})

//displays 12 war movies
const warBtn = document.getElementById("war");
warBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genre = this.getAttribute("id")
    const data = await getMovieApi(genre)
    displayMovieContainer(data);
    addMovieRoutes();
});


// **********************************************FETCH FUNCTIONS**********************************************

async function getMovieApi(genreName){
    const response = await fetch(`http://localhost:4000/moviedata/${genreName}`);
    const data = await response.json();
    return data
}

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

async function getProviders(movie_id){
    const response = await fetch(`http://localhost:4000/get_providers/${movie_id}`);
    const data = await response.json();
    return data
}

async function getUserProviders(data, country){
    if (data.results[country] != null){
        const userProvidersList = data.results[country]
        const movieSubscriptionList = data.results.country.flatrate;
        console.log(userProvidersList);
        console.log(movieSubscriptionList);
        return 
    }
    else{
        console.log("movie not available anywhere")
    }

}
// async function getVideo(movie_id){
//     const response = await fetch(`http://localhost:4000/get_video/${movie_id}`);
//     const data = await response.json();
//     return data
// }








// **********************************************CAROUSEL**********************************************
async function mainCarousel(genre,positionId){
    const data = await getMovieApi(genre);
    let dataDisplay = data.results.slice(0,12).map((object, index) => {

        const newItem = createCarouselImg(object,index);

        $j(function(){
            $j(positionId).owlCarousel('add', newItem);
            $j(positionId).owlCarousel('update')
        })


        return 
    });
}


function createCarouselImg(data, index){
    const {id,title, poster_path, backdrop_path} = data;
    const imageWidth = 300;

    let imgSrc = `https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}` 

    if((poster_path == null)){
        imgSrc=`images/movieSlate.jpg" style = "width: ${imageWidth}px; height: 432px`
    }

    newOwlItem = `    <div class="item" id="item${index}">
    <img class="owlImg" id='${data.id}'src="${imgSrc}">
</div>`
    // const newItem = document.createElement('img');
    // newItem.src = imgSrc
    // console.log(newItem)


    return newOwlItem
}


// **********************************************SEARCH DISPLAY**********************************************

//iterate through top 12

function displayMovieContainer(data){
    let dataDisplay = data.results.slice(0,12).map((object, index) => {
        return createMovieContainer(object,index)
    }).join("");

    document.querySelector("#main").style.display = "none";
    document.querySelector("#sub1").style.display = "none";
    document.querySelector(".displayList").innerHTML = dataDisplay;
}


// function displayMovieContainer(data){
//     let dataDisplay = data.results.slice(0,12).map((object, index) => {
//         return createMovieContainer(object,index)
//     }).join("");
//     document.querySelector("#main").style.display = "none";
//     document.querySelector("#trendWeekOwl").style.display = "none";
//     document.querySelector(".displayList").innerHTML = dataDisplay;
// }
//fetch movie object
//display poster
//on click, view modal

// **********************************************MOVIE POSTER DISPLAY**********************************************
function createMovieContainer(data,index){
    const {id,title, poster_path, backdrop_path, overview, release_date, vote_average} = data;
    const imageWidth = 300;
    const className = "movie_btn_" + index;
    let imgSrc = `"https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}"` 

    if((poster_path == null)){
        imgSrc=`"images/movieSlate.jpg" style = "width: ${imageWidth}px; height: 432px"`
    }


    return `    <div class="movie" id=${className}>    <div class="poster">
             <img src=${imgSrc} alt="movie poster"/> 
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


// function createMovieBtns(){
    //     //consider the number of outcomes
    //     for (let i=0; i<10; i++){
    //         let className = "#movie_btn_" + i;
    //         console.log(className)
    
    //         const movieBtn = document.querySelector(className)
    //         console.log(movieBtn)
    //         movieBtn.addEventListener("click", async function(e){
    //             e.preventDefault();
    //             const chosenMovie = document.querySelector(className);
    //             console.log(chosenMovie)
    //             document.querySelector(".displayList").innerHTML="";
    //             // document.querySelector(".displayList").appendChild(chosenMovie);
    //             const id = chosenMovie.id;
    //             const data = await getMovie(id);
    //             displayMovie(data);
    //             const keywordsData = await getKeywords(id);
    //             if (adaptedFromBook(keywordsData)){
    //                 alert("we have a book!")
    //             }
    //             else{
    //                 alert("noiirrr book")
    //             }
    //             displayVideo(id)
    //         })
    
    //     }
        
    // }
    
    // async function displayVideo(id){
    //     const video = await getVideo(id);
    //     const videoList = video.results;
    //     const wordList = ["Official", "official", "Trailer", "trailer"]
    //     // let potentialTrailerList = [];
    //     for(let video in videoList){
    //         let current_vid = videoList[video]
    //         if((current_vid.type == "Trailer")&&(current_vid.official == true)){
    //             let video_key = current_vid.key;
    //             console.log(current_vid);
    //             console.log(document.querySelector("#modalthere"));
    //             document.querySelector("#modalthere").innerHTML = `
    //             <iframe height="360" width="640"  
    //             src="https://www.youtube.com/embed/${video_key}">
    //             </iframe>`
    
    //             return
                
    //         }
    //     }
    // }

    // async function findMovie(movieTitle){
        //     const response = await fetch(`http://localhost:4000/moviedata/trendweek`);
        //     const data = await response.json();
        
        //     for(let page in data){
        //         for(let j=0; j<20; j++){
        //             if (data[page].results[j].title == movieTitle){
        //                 const foundMovie = data[page].results[j];
        //                 const movieId = foundMovie.id;
        //                 console.log(movieId);
        
        //                 return foundMovie;
        //             }
        //         } 
        //     }
        //     alert("NANI what movie?!?")
        //     return false;
        // }
        
// **********************************************MAKE BUTTONS FOR POSTERS**********************************************


function addMovieRoutes(){
    let selectedMovie = document.querySelectorAll(".movie");
    for (let i=0; i<selectedMovie.length; i++){
        if (selectedMovie[i].id){
            const movieBtn = document.querySelector(`#${selectedMovie[i].id}`);
            movieBtn.addEventListener("click", async function(e){
                e.preventDefault();
                const movieClass = this.querySelector(".title");
                const movieId = movieClass.id;
                const provider = await getProviders(movieId);
                console.log(provider);
                const data = await getMovie(movieId);
                const providers = await getUserProviders(movieId, "KR")
                displayMoviePreview(data, providers);
    
            })
        }

    }
}


// ********************************************** FORMAT MODAL DISPLAY**********************************************

// const userLocation = "KR"

async function displayMovie(foundMovie, providers){
    console.log(foundMovie)
    const {id,title, poster_path, runtime, genres, production_companies, overview, release_date, vote_average, videos} = foundMovie;
    const videoWidth = 740;
    const videoHeight = videoWidth / (16/9);

    const videoSrc = displayPreviewTrailer(videos.results)

    const logoArray = displayPreviewLogo(production_companies)

    const genreArray = displayPreviewGenre(genres);

    const providerData = await getProviders(foundMovie);

    const providerArray = await getUserProviders(providerData, location);

    // console.log(providerArray);

    //"#modalhere" TESTA
    document.querySelector("#dialog-message").innerHTML = `
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

function displayPreviewTrailer(videoList){
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

function displayPreviewLogo(logoList){
    let dataDisplay = logoList.slice(0,logoList.length).map((object, index) => {
        if (object.logo_path !== null){
            return `<p class="previewLogoIcon" id="logo_${index}"><img src="https://image.tmdb.org/t/p/w92/${object.logo_path}" alt=""></p>`
        }
        return
    }).join("");
    console.log(dataDisplay);
    return dataDisplay
}


function displayPreviewGenre(genreList){

    let dataDisplay = genreList.slice(0,genreList.length).map((object, index) => {
        return `<p class="previewGenreIcon" id="genre_${index}">${object.name}</p>`
    }).join("");
    return dataDisplay
}


// ********************************************** MODAL EXECUTE**********************************************

function displayMoviePreview(data, providers ){
    displayMovie(data, providers);

    $j(function(){
        // $j("#dialog-message" ).dialog("moveToTop");
        $j('#dialog-message').dialog( "open" );
        return
    })
    
}


$j(function(){
    $j('.buttons').click(function(){
        $j(modal).dialog( "close" );
    })
})


// ********************************************** JAVASCRIPT EXECUTE**********************************************

window.addEventListener('load', async function(){
    await mainCarousel("trendday","#trendTodayOwl");
    await mainCarousel("trendweek","#trendWeekOwl");
    
})




const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const searchMovie = document.querySelector("#search_input").value;
    const movieList = await getMovieList(searchMovie);

    //validate if movie title exists
    if (movieList.results.length > 0){
        // displaySimiliarMovies(movieList);
        displayMovieContainer(movieList);
        addMovieRoutes()

    }
    else{
        alert("doesn't exist")
        $("<div>Test message</div>").dialog();
    }
    document.querySelector("#search_input").value = '';
    return
})


// ********************************************** GEOLOCATION EXECUTE**********************************************

// // get geolocation of user
// const data = null;

// const xhr = new XMLHttpRequest();
// //set to false because CORS blocks off all cookies
// xhr.withCredentials = false;

// xhr.addEventListener("readystatechange", async function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//     const response = this.response;
//     localStorage.setItem('location', response);

//      const myData = await JSON.parse(response);
//     console.log(myData);
    
//   }
// });

// const MY_API_KEY = '417bf8a674b64865a20346832a91e6bd'
// xhr.open("GET", `https://ipgeolocation.abstractapi.com/v1?api_key=${MY_API_KEY}&fields=country_code,country,flag`);
// xhr.send(data);



// const stringdata = localStorage.getItem('location');

// const wee = JSON.parse(stringdata);
// console.log(wee)


















// function addOwlRoutes(){

//     const owlContainer = $j('.owl-stage').find('.owl-item')
//     console.log(owlContainer)
//     for (let i=0; i<24; i++){
//         // const owlItemArr = owlContainer.querySelectorAll('.owl-item');

//         for (owl in owlContainer){
//             const imgContainer = owl.querySelector('.item');
//             const imgContainerId = imgContainer.id;

//             const movieBtn = document.querySelector(`#${imgContainerId}`);
//             movieBtn.addEventListener("click", async function(e){
//                 e.preventDefault();
//                 alert("hey")
//                 const movieClass = this.querySelector(".owlImg");
//                 const movieId = movieClass.id;
//                 console.log(movieId);
//                 data = await getMovie(movieId);
//                 displayMoviePreview(data);})
           
//         }
        
//     }
// }



// function addOwlRoutes(){
//     let selectedMovie = document.querySelectorAll(".item");
//     for (let i=0; i<selectedMovie.length; i++){
//         if (selectedMovie[i].id){
//             const movieBtn = document.querySelector(`#${selectedMovie[i].id}`);
//             movieBtn.addEventListener("click", async function(e){
//                 e.preventDefault();
//                 const movieClass = this.querySelector(".owlImg");
//                 const movieId = movieClass.id;
//                 console.log(movieId);
//                 data = await getMovie(movieId);
//                 displayMoviePreview(data);
    
//             })
//         }

//     }
// }


// $j(function(){
//     $j('#item2').click(function(){
//         const imgTag = $j(this).find('img');
//         const movieId = $j(imgTag).attr('id');
//         owlPreview(movieId);
//     })
// })

// $j( "#item2" ).trigger( "click" );

// async function owlPreview(movieId){
//     data = await getMovie(movieId);
//     displayMoviePreview(data);
// }













//turns off youtube when modal closed

// jQuery(document).ready(function($) {
//     let url = $("#movieTrailer").attr('src');
//     $('#myModal').on('hide.bs.modal', function() {
//         $("#movieTrailer").attr('src', '');
//     });
//     $('#myModal').on('show.bs.modal', function() {
//         $("#movieTrailer").attr('src', url);
//     });
// });

// $('.dropdown-item').click(function(){
//     $('.dropdown-menu').css("display", "none")
// })

// let response = ''



