// ********************************************** GEOLOCATION BENGIE EXECUTE**********************************************

// get geolocation of user
const data = null;

const xhr = new XMLHttpRequest();
//set to false because CORS blocks off all cookies
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", async function () {
  if (this.readyState === this.DONE) {
    const response = this.response;
    const myData = await JSON.parse(response);

    displayFlag(myData.country_code)
    let geolocation = {};
    geolocation["location"] = myData;
    localStorage.setItem('geoLocation', JSON.stringify(myData));
    // console.log("geolocation");
    updateStreamDropdown();

  }
  tutorialStart();
});

const newUser = localStorage.getItem('geoLocation');
if (newUser == null){
    localStorage.setItem("newUser", "true");
    const MY_API_KEY = '417bf8a674b64865a20346832a91e6bd';
    xhr.open("GET", `https://ipgeolocation.abstractapi.com/v1?api_key=${MY_API_KEY}&fields=country_code,country,flag`);
    xhr.send(data);
}
else{
    updateFlagDisplay();
}


// ********************************************** RESPONSIVE NAV**********************************************
document.addEventListener('click', function(e){
    const isDropdownBtn = e.target.matches("[data-dropdown-btn]");

    if ((!isDropdownBtn) && (e.target.closest('[data-dropdown]')!== null)){
        return
    }

    let currentDropdown 
    const isEditSubBtn = e.target.matches("#editServiceBtn");
    const isEditRegionBtn = e.target.matches("#editRegionBtn");
    const isEditGenreBtn = e.target.matches("#editGenreBtn");
    const isCollapseBtn = e.target.matches("#navbar-collapse")

    //edit subscription from carousel
    if (isDropdownBtn && isEditSubBtn){
        currentDropdown = document.querySelector('#menu-title-subscription')
        currentDropdown.classList.toggle('active')
    }
    else if (isDropdownBtn && isEditRegionBtn){
        currentDropdown = document.querySelector('#menu-region')
        currentDropdown.classList.toggle('active')
    }
    else if (isDropdownBtn && isEditGenreBtn){
        currentDropdown = document.querySelector('#menu-title-genre')
        currentDropdown.classList.toggle('active')
    }
    else if (isDropdownBtn && isCollapseBtn){
        currentDropdown = document.querySelector('.navbar-container')
        currentDropdown.classList.toggle('active')
    }

    //navbar dropdown
    else if (isDropdownBtn){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    // close all active dropdowns
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown){
            return
        }
        dropdown.classList.remove('active')
    })

})


// ********************************************** JQUERY OWL & MODAL**********************************************
var $j = jQuery.noConflict();

$j(function(){
    $j('#mainOwl').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        // nav:true,
        mouseDrag:true,
        // autoplay:true,
        // autoplayTimeout: 3000,
        dots:false,
        stagePadding:0,
        URLhashListener: true,
        startPosition:'URLHash',
        // autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

$j(function(){
    $j('#about-main-owl').owlCarousel({
        items:3,
        loop:true,
        margin:15,
        // nav:true,
        mouseDrag:true,
        // autoplay:true,
        // autoplayTimeout: 3000,
        dots:true,
        stagePadding:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

// $j(".owl-carousel").each(function(){
//     $j(this).owlCarousel({
//         loop:true,
//         margin:10,
//         // nav:true,
//         mouseDrag:true,
//         // autoplay:true,
//         // autoplayTimeout: 3000,
//         dots:true,
//         stagePadding:50,
//         pagination : false,
//         lazyLoad:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             },
//             1200:{
//                 items:6
//             }
//         }
//     });
// });


//jquery runs after document is loaded



$j(function createOwl($){
    $('#trendTodayOwl').owlCarousel({
        loop:true,
        items:10,
        margin:10,
        center:true,
        // nav:true,
        mouseDrag:true,
        // autoplay:true,
        // autoplayTimeout: 3000,
        dots:true,
        stagePadding:50,
        responsive:{
            0:{
                items:2
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

    $('#trendWeekOwl').owlCarousel({
        loop:true,
        items:10,
        margin:10,
        center:true,
        // nav:true,
        mouseDrag:true,
        // autoplay:true,
        // autoplayTimeout: 3000,
        dots:true,
        stagePadding:50,
        responsive:{
            0:{
                items:2
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

// $j(function($){
//     $('#trendWeekOwl').owlCarousel({
//         loop:true,
//         items:10,
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
//                 items:4
//             },
//             1200:{
//                 items:6
//             }
//         }
//     });
// });


// document.querySelector('#topBtn').addEventListener('click', function(e){
//     e.preventDefault();
//     window.scrollTo(0,0);
// })

$j('#trendTodayOwl').on('click', '.owl-item', function(e){
    // $j(this).trigger('stop.owl.autoplay');
    var carousel = $j('#trendTodayOwl').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($j(this).index()));
    addOwlMovieRoutes(carousel, '#trendTodayOwl');
    
})


    // $j(this).trigger('stop.owl.autoplay');
    // $j('#trendWeekOwl').trigger('stop.owl.autoplay');


$j('#trendWeekOwl').on('click', '.owl-item', function(e){


    // var carousel = $j('.owl-carousel').data('owl.carousel');
    var carousel = $j('#trendWeekOwl').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($j(this).index()));
    addOwlMovieRoutes(carousel, '#trendWeekOwl');
    
})

async function addOwlMovieRoutes(carousel, carouselId){
    // const movieClass = this.querySelector(".title");
    // const movieId = movieClass.id;

    const carouselIndex = carousel._current;
    const findCarousel = document.querySelector(carouselId);

    const allCarouselItems = findCarousel.querySelectorAll('.owl-item');
    const currentItem = allCarouselItems[carouselIndex];
    const itemId = currentItem.querySelector('.owlImg').getAttribute("id");
    const data = await getMovie(itemId);
    displayMoviePreview(data);
}

$j(function(){

        $j("#dialog" ).dialog({
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


    $j( "#cancel-button" ).html('<i class="fa-solid fa-circle-xmark fa-xl"></i>');

})

$j(window).resize(function() {
    $j("#dialog").dialog("option", "position", {my: "center", at: "center", of: window});
});

$j(function(){

    $j("#tutorial" ).dialog({
    modal: true,
    autoOpen:false,
    // position: { my: "center", at: "bottom", of: $j('#search-form')},
    position: {
        my: "top",
        at: "bottom",
        of: $j('#search-form'),
        collision: "none"
    },
    buttons: [
        {
            id: "close-button",
            click: function() {
                $j( this ).dialog( "close" );}
        }

    ],
    width: '200px',
    closeOnEscape: true, 
    create: function (event, ui) {
        $j(event.target).parent().css('position', 'fixed');
        }
    // height: '500px',

    });

    $j( "#close-button" ).html('<i class="fa-solid fa-circle-xmark fa-xl"></i>');

})

// ********************************************** ON WINDOW LOAD**********************************************

window.addEventListener('load', async function(){
    mainCarousel("trendday","#trendTodayOwl");
    mainCarousel("trendweek","#trendWeekOwl");

    // tutorialStart();

    const isGenreDisplay = JSON.parse(this.localStorage.getItem('genreDisplay'));
    const streamCheck = retrieveSubscriptionsStorage();

    const returningUser = this.localStorage.getItem('user');

    displayMyServices(streamCheck);
    updateStreamDropdown();

    if (!returningUser){
        //tutorial
        const geoLocation = JSON.parse(this.localStorage.getItem('geoLocation'));
        // let user ={};
        // user["location"] = geoLocation;
        // this.localStorage.setItem('user',JSON.stringify(user));
        // this.localStorage.setItem("user", geoLocation);

    }
    //movie displayed and no streaming service
    if ((isGenreDisplay) && (streamCheck.length == 0)){
        hideBackground();
        const genreName = await convertGenreToName(isGenreDisplay);
        const location = getLocation();
        const data = await getFullMovieApi(genreName,location.country_code);
        displayGenreMsg(genreName)
        displaySearchMovieContainer(data);
        this.localStorage.removeItem('genreDisplay');
        createRegionDropdown();
        
    }

    //movie displayed and streaming service
    else if ((isGenreDisplay) && (isGenreDisplay !== undefined)){
        hideBackground();
        // retrieve genre i want and search
        const genreName = await convertGenreToName(isGenreDisplay);
        searchByGenre(genreName,isGenreDisplay);
        
        
    }  
    else{
        createRegionDropdown();
        
    }
    
    await updateStreamDropdown();
    if (isGenreDisplay){
        this.localStorage.removeItem('genreDisplay');
    }

    
    
})


// ====================================================================================================
// ********************************************** GENRE BUTTONS**********************************************

function displayGenreMsg(genreName){

    let genreMsg = document.querySelector('#searchMsg');
    const firstLetter = genreName.charAt(0).toUpperCase();
    genreName = firstLetter + genreName.slice(1,genreName.length);

    // const services = document.querySelector('#myServices');
    // genreMsg.appendChild(services);

    // genreMsg.innerHTML += `<span style="font-size: 35px">&nbsp; > &nbsp;</span>`
    genreMsg.innerHTML += `<p id="displayGenreName"> ${genreName} Movies</p> `;


}

function closeDropdown(e){
    // const currentDropdown = document.querySelector('[data-dropdown]');
    const currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
}

const actionBtn = document.getElementById("action");
actionBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 28;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const adventureBtn = document.getElementById("adventure");
adventureBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 12;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const animationBtn = document.getElementById("animation");
animationBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 16;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});


const comedyBtn = document.getElementById("comedy");
comedyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 35;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const crimeBtn = document.getElementById("crime");
crimeBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 80;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const documentaryBtn = document.getElementById("documentary");
documentaryBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 99;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const dramaBtn = document.getElementById("drama");
dramaBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 18;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const familyBtn = document.getElementById("family");
familyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 10751;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const fantasyBtn = document.getElementById("fantasy");
fantasyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 14;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const historyBtn = document.getElementById("history");
historyBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 36;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});


const horrorBtn = document.getElementById("horror");
horrorBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 27;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);

});
const musicBtn = document.getElementById("music");
musicBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 10402;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
})

const mysteryBtn = document.getElementById("mystery");
mysteryBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 9648;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
})
const romanceBtn = document.getElementById("romance");
romanceBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 10749;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const scienceFictionBtn = document.getElementById("sciencefiction");
scienceFictionBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 878;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const thrillerBtn = document.getElementById("thriller");
thrillerBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 53;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
})

// const tvBtn = document.getElementById("tvmovie");
// tvBtn.addEventListener("click", async function(e){
//     e.preventDefault();
//     const genreCode = 10770;
//     const prevGenre = JSON.parse(localStorage.getItem('genre'));
//     const checkStreams = retrieveSubscriptionsStorage()
//     const genreDisplay = document.querySelector('.displayMovies');

//     if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
//         return
//     }
//     else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
//         localStorage.setItem('genreDisplay', genreCode);
//         document.location.reload();
//     }
//     else if (checkStreams.length == 0){
//         const genre = this.getAttribute("id");
//         const location = getLocation();
//         const data = await getFullMovieApi(genre,location.country_code);
//         displaySearchMovieContainer(data);
//     }
//     else{
//         searchByGenre(genreCode);
//     }
// })


const warBtn = document.getElementById("war");
warBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 10752;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
});

const westernBtn = document.getElementById("western");
westernBtn.addEventListener("click", async function(e){
    e.preventDefault();
    const genreCode = 37;
    hideBackground();
    const genre = this.getAttribute("id");
    const prevGenre = JSON.parse(localStorage.getItem('genre'));
    const checkStreams = retrieveSubscriptionsStorage()
    const genreDisplay = document.querySelector('.displayMovies');
    
    if ((genreDisplay.hasChildNodes())&&(genreCode == prevGenre)){
        return
    }
    else if ((genreDisplay.hasChildNodes())&&(genreCode !== prevGenre)){
        localStorage.setItem('genreDisplay', genreCode);
        document.location.reload();
    }
    else if (checkStreams.length == 0){
        
        const location = getLocation();
        const data = await getFullMovieApi(genre,location.country_code);
        displayGenreMsg(genre);
        displaySearchMovieContainer(data);
        
    }
    else{
        searchByGenre(genre, genreCode);
    }

    closeDropdown(e);
    
});
// ====================================================================================================

// const initialValues = [0,1];
function switchDisplay(){
    if (document.querySelector('.displayMovies').hasChildNodes()){
        document.querySelector('.displayMovies').textContent = '';
    }
}



async function searchByGenre(genreName, genreCode){
    displayGenreMsg(genreName)

    const page = document.getElementsByTagName('body')[0];
    page.style.cursor = "progress";
    localStorage.setItem('genre', genreCode.toString());

    const location = getLocation();
    const locationCode = location.country_code;
    const providerArr = retrieveSubscriptionsStorage();
    const providerList = formatProviderParam(providerArr);

    let pageNum = 1;
    let startEl = 0;
    const searchLimit = 10;
    let counter = 0;

    while ((counter < searchLimit)){
        // [movielist, current page num, last el pushed]
        const selectedMovies = await getMovieData(genreCode, providerList, locationCode, pageNum, startEl);

        if (selectedMovies[0].length == 0){
            document.querySelector(`#loadingBtn${counter}`).style.display = 'none';
            createHomeBtn(counter);
            break
        }

        //display remaining movies that did not reach 10
        else if ((selectedMovies[0].length > 0)&&(selectedMovies[1] == 0)){
            counter += 1;
            displayMovieContainer(selectedMovies[0], selectedMovies[0].length, counter);
            if (counter == 1){
                //initialize movie routes for first page only
                addGenreMovieRoutes(1);
                createNextBtn(counter);
                createHomeBtn(counter);
                page.style.cursor = "default";

            }
            else {
                //last page needs prev button
                createNextBtn(counter);
                createPrevBtn(counter);
                createHomeBtn(counter);
            }
            break
        }
        else if (selectedMovies[0].length == 10){
            counter += 1;
            
            displayMovieContainer(selectedMovies[0],selectedMovies[0].length,counter);  

            if (counter !== searchLimit){
                if (counter == 1){
                    //initialize movie routes for first page only
                    addGenreMovieRoutes(1);
                    page.style.cursor = "default";
                }
                pageNum = selectedMovies[1];
                startEl = selectedMovies[2]; // consider if it's the last element of the page
                
                createNextBtn(counter);
                createPrevBtn(counter);
                loadingBtn(counter);            
            }
            else if(counter == searchLimit){
                createNextBtn(counter);
                createPrevBtn(counter);
                createHomeBtn(counter);
            }

        }
        else{
            createPrevBtn(counter);
            createHomeBtn(counter);
        }
    }
}
// function switchDisplay(){
//     if (document.querySelector('.displayMovies').hasChildNodes()){
//         document.querySelector('.displayMovies').textContent = '';
//     }
// }



// async function searchByGenre(genreCode){
//     // const genreCode = 28;
//     localStorage.setItem('genre', genreCode.toString());

//     const location = getLocation();
//     const locationCode = location.country_code;
//     const providerArr = retrieveSubscriptionsStorage();
//     const providerList = formatProviderParam(providerArr);

//     let pageNum = 1;
//     let startEl = 0;
//     const searchLimit = 10;
//     let counter = 0;

//     while ((counter < searchLimit)){
//         // [movielist, current page num, last el pushed]
//         const selectedMovies = await getMovieData(genreCode, providerList, locationCode, pageNum, startEl);

//         if (selectedMovies[0].length == 0){
//             document.querySelector(`#loadingBtn${counter}`).style.display = 'none';
//             break
//         }

//         //display remaining movies that did not reach 10
//         else if ((selectedMovies[0].length > 0)&&(selectedMovies[1] == 0)){
//             counter += 1;
//             displayMovieContainer(selectedMovies[0], selectedMovies[0].length, counter,genreCode);
//             if (counter == 1){
//                 //initialize movie routes for first page only
//                 addGenreMovieRoutes(1);
//             }
//             else {
//                 //last page needs prev button
//                 createNextBtn(counter);
//                 createPrevBtn(counter);
//             }
//             break
//         }
//         else if (selectedMovies[0].length == 10){
//             counter += 1;
            
//             displayMovieContainer(selectedMovies[0],selectedMovies[0].length,counter,genreCode);  

//             if (counter !== searchLimit){
//                 if (counter == 1){
//                     //initialize movie routes for first page only
//                     addGenreMovieRoutes(1);
//                 }
//                 pageNum = selectedMovies[1];
//                 startEl = selectedMovies[2]; // consider if it's the last element of the page
                
//                 createNextBtn(counter);
//                 createPrevBtn(counter);
//                  loadingBtn(counter);               
//             }
//             else if(counter == searchLimit){
//                 createPrevBtn(counter);
//             }
//         }
//     }
// }

async function getMovieData(genreCode, providerList, locationCode, pageNum, startEl){
    let selectedMovies = []
    
    while ((selectedMovies.length <= 10)){
        const data = await getMoviesByFilter(providerList, locationCode, pageNum);
        for(let i =startEl; i<data.results.length; i++){
            const genreArr = data.results[i].genre_ids;
            if (selectedMovies.length == 10){
                // [movielist, current page num, last el pushed]
                return [selectedMovies, pageNum, i]
            }
            else if (genreArr.includes(genreCode)){
                selectedMovies.push(data.results[i]); 
            }

        }
        pageNum +=1;

        if (pageNum >100){
            return [selectedMovies, 0, 0]
        }
        
    }
    return
}

// ====================================================================================================






// **********************************************FETCH FUNCTIONS**********************************************

// const URL = 'http://localhost:4000';

const URL = 'https://streammee-server.vercel.app'

async function getMovieApi(genreName){
    const response = await fetch(`${URL}/moviedata/${genreName}`);
    const data = await response.json();
    return data
}

async function getFullMovieApi(genreName, country_code){
    const response = await fetch(`${URL}/moviedata/${genreName}/${country_code}`);
    const data = await response.json();
    return data
}


async function getKeywords(movie_id){
    const response = await fetch(`${URL}/get_keys/${movie_id}`);
    const data = await response.json();
    return data.keywords

}

async function getMovieList(movie_title){
    const response = await fetch(`${URL}/get_movies/${movie_title}`);
    const data = await response.json();
    return data
}

async function getMovie(movie_id){
    const response = await fetch(`${URL}/get_movie/${movie_id}`);
    const data = await response.json();
    return data
}

async function getGenre(){
    const response = await fetch(`${URL}/get_genre`);
    const data = await response.json();
    return data
}


async function getProviders(movie_id){
    const response = await fetch(`${URL}/get_providers/${movie_id}`);
    const data = await response.json();
    return data
}

async function getMoviesByFilter(provider_list, country_code,page_num){
    const response = await fetch(`${URL}/get_movies_by_filter/${provider_list}/${country_code}/${page_num}`);
    const data = await response.json();
    return data

}

async function getMoviesByStream(provider_list, country_code){
    const response = await fetch(`${URL}/get_movies_by_stream/${provider_list}/${country_code}`);
    const data = await response.json();
    return data

}

async function getSubscriptions(country_code){
    const response = await fetch(`${URL}/get_subscriptions/${country_code}`);
    const data = await response.json();
    return data
}

async function getRegions(){
    const response = await fetch(`${URL}/get_regions`);
    const data = await response.json();
    return data
}



// async function getMovieApi(genreName){
//     const response = await fetch(`http://localhost:4000/moviedata/${genreName}`);
//     const data = await response.json();
//     return data
// }

// async function getFullMovieApi(genreName, country_code){
//     const response = await fetch(`http://localhost:4000/moviedata/${genreName}/${country_code}`);
//     const data = await response.json();
//     return data
// }


// async function getKeywords(movie_id){
//     const response = await fetch(`http://localhost:4000/get_keys/${movie_id}`);
//     const data = await response.json();
//     return data.keywords

// }

// async function getMovieList(movie_title){
//     const response = await fetch(`http://localhost:4000/get_movies/${movie_title}`);
//     const data = await response.json();
//     return data
// }

// async function getMovie(movie_id){
//     const response = await fetch(`http://localhost:4000/get_movie/${movie_id}`);
//     const data = await response.json();
//     return data
// }

// async function getGenre(){
//     const response = await fetch(`http://localhost:4000/get_genre`);
//     const data = await response.json();
//     return data
// }


// async function getProviders(movie_id){
//     const response = await fetch(`http://localhost:4000/get_providers/${movie_id}`);
//     const data = await response.json();
//     return data
// }

// async function getMoviesByFilter(provider_list, country_code,page_num){
//     // const providers = formatProviderParam(provider_list)
//     const response = await fetch(`http://localhost:4000/get_movies_by_filter/${provider_list}/${country_code}/${page_num}`);
//     const data = await response.json();
//     return data

// }

// async function getMoviesByStream(provider_list, country_code){
//     const response = await fetch(`http://localhost:4000/get_movies_by_stream/${provider_list}/${country_code}`);
//     const data = await response.json();
//     return data

// }

// async function getSubscriptions(country_code){
//     const response = await fetch(`http://localhost:4000/get_subscriptions/${country_code}`);
//     const data = await response.json();
//     return data
// }



// *************************SUBSCRIPTION FILTER*************************



// document.querySelector('#editServiceBtn').addEventListener('click', async function(e){
//     e.preventDefault();
//     window.scrollTo(0,0);

//     const userLocation = getLocation();
//     const countryCode = userLocation.country_code;
//     const data = await getSubscriptions(countryCode);


//     const userLogo = await getSubscriptionLogo(data);
//     displaySubscription(userLogo);
//     let subscriptionList = retrieveSubscriptionsStorage();
    
//     // consider if user does not choose a filter
//     if (subscriptionList[0] == ''){
//         subscriptionList = [];
//     }
//     else{
//         showSelectedSubscriptions(subscriptionList);
//     }
//     addLogoRoutes(subscriptionList)


// })

// document.querySelector('#menu-title-subscription').addEventListener('click', async function(e){
//     e.preventDefault();
//     const subscriptionNav = document.querySelector('#filter');
//     const currentState = window.getComputedStyle(subscriptionNav);
//     if (currentState['display'] === 'none'){
//         const userLocation = getLocation();
//         const countryCode = userLocation.country_code;
//         const data = await getSubscriptions(countryCode);
    
    
//         const userLogo = await getSubscriptionLogo(data);
//         displaySubscription(userLogo);
//         let subscriptionList = retrieveSubscriptionsStorage();
        
//         // consider if user does not choose a filter
//         if (subscriptionList[0] == ''){
//             subscriptionList = [];
//         }
//         else{
//             showSelectedSubscriptions(subscriptionList);
//         }
//         addLogoRoutes(subscriptionList)
//     }
//     else{
//         document.querySelector('#filter').style.display = "none";
//     }



// })

async function updateStreamDropdown(){
    const userLocation = await getLocation();
    const countryCode = userLocation.country_code;
    const data = await getSubscriptions(countryCode);


    const userLogo = await getSubscriptionLogo(data);
    displaySubscription(userLogo);
    let subscriptionList = retrieveSubscriptionsStorage();
    
    // consider if user does not choose a filter
    if (subscriptionList[0] == ''){
        subscriptionList = [];
    }
    else{
        showSelectedSubscriptions(subscriptionList);
    }
    addLogoRoutes(subscriptionList)
}



function getSubscriptionLogo(data){
    let dataDisplay = data.results.slice(0,20).map((object, index) => {
        const formatId = 'logo' + object.provider_id;
        return `<div class="subscription-logo" id=${formatId}><img src="https://image.tmdb.org/t/p/w45/${object.logo_path}" alt=""> </div>`
    }).join("");
    return dataDisplay
}

function showSelectedSubscriptions(userSubscriptionsArr){
    for (let i=0; i<userSubscriptionsArr.length; i++){
        //consider provider unavailable when country changes
        const currentLogo = document.querySelector(`#logo${userSubscriptionsArr[i]}`)
        if (currentLogo){
            currentLogo.style.opacity = 1;
            const currentImage = currentLogo.childNodes[0];
            // currentImage.style.boxShadow = '0px 0px 5px 5px orange'
            // currentImage.style.border = "2px solid orange";
        }
        
    }
    return userSubscriptionsArr
}


function retrieveSubscriptionsStorage(){
    let userSubscriptions = localStorage.getItem('subscription');
    // consider when user does not provide subscriptions or when they remove subscriptions
    if ((userSubscriptions == null)|| (userSubscriptions.length == 0)){
       return []
    }
    let userSubscriptionsArr = userSubscriptions.split(',');
    return userSubscriptionsArr
}


function displaySubscription(data){
    document.querySelector('#subscription-container').innerHTML = data;
}


function addLogoRoutes(userSubscriptionsArr){
    let selectedLogo = document.querySelectorAll(".subscription-logo");
    let subscriptionList = userSubscriptionsArr;
    for (let i=0; i<selectedLogo.length; i++){


        const logoBtn = document.querySelector(`#${selectedLogo[i].id}`);
        logoBtn.addEventListener("click", function(e){
            e.preventDefault();
            let logoId = selectedLogo[i].id;
            const stripId = logoId.slice(4);

            //logo already selected
            if (subscriptionList.includes(stripId )){
                const index = subscriptionList.indexOf(stripId );
                subscriptionList.splice(index, 1);
                // selectedLogo[i].style.border = "none";
                selectedLogo[i].style.opacity= 0.3;
            }
            else{
                subscriptionList.push(stripId );
                // selectedLogo[i].style.border = "2px yellow solid";
                selectedLogo[i].style.opacity= 1;
            }
        })
    }

    document.querySelector('#subscription-submit').addEventListener('click',function(e){
        e.preventDefault();
        localStorage.setItem('subscription', subscriptionList.toString());

        if (document.querySelector('.displayMovies').hasChildNodes()){
            const genreCode = JSON.parse(localStorage.getItem('genre'));
            localStorage.setItem('genreDisplay', genreCode);
            
        }
        document.location.reload();
        
    })

    // document.querySelector('#subscription-search').addEventListener('click', async function(e){
    //     localStorage.setItem('subscription', subscriptionList.toString());

    //     if (document.querySelector('.displayMovies').hasChildNodes()){
    //         const genreCode = JSON.parse(localStorage.getItem('genre'));
    //         localStorage.setItem('genreDisplay', genreCode);
    //         document.location.reload();
    //     }
    //     else{

    //         const location = getLocation();
    //         const providerList = formatProviderParam(subscriptionList);
    //         const data = await getMoviesByStream(providerList, location.country_code);
    //         displaySearchMovieContainer(data);
    //         displayMyServices(subscriptionList);
    //         document.querySelector('#services').style.display = 'block';
            
    //     }
    // })

}


// document.querySelector('#trendingServiceBtn').addEventListener('click', async function(e){
//     e.preventDefault();

//     const subscriptionList = JSON.parse(localStorage.getItem('subscription'))

//     const location = getLocation();
//     const providerList = formatProviderParam(subscriptionList);
//     const data = await getMoviesByStream(providerList, location.country_code);
//     displaySearchMovieContainer(data);
 
// })

async function displayMyServices(myStream){
    const displayMyServices = document.querySelector('#myServices');
    displayMyServices.innerHTML = ``;
    if (myStream.length == 0){
        // document.querySelector('#myServicesTitle').style.display = "none";
        displayMyServices.innerHTML = `<p class="emptyServicesMsg">You do not have any saved streaming services.</p>`;
        document.querySelector('#editServiceBtn').innerHTML = `<i class="fa-solid fa-plus"></i> &nbsp;Add Services`;
    }
    else{
        const location = getLocation();
        const data = await getSubscriptions(location.country_code);
        counter = myStream.length;
        num = 0;
        while (counter > 0){
            current = data.results[num].provider_id;
            if (myStream.includes(current.toString())){
                displayMyServices.innerHTML += `
                <div class="my-services-logo"><img src="https://image.tmdb.org/t/p/w92/${data.results[num].logo_path}" alt=""> </div>
                `;
                counter -=1; 
            }
            num +=1;
        }
    }

}

function hideBackground(){
    // document.querySelector("#main").style.display = "none";
    document.querySelector("#sub1").style.display = "none";
    // document.querySelector("#displayServices").style.display = "none";
    document.querySelector('#mainOwl').style.display = "none";
}

// displayMyServices();
// function createSubscriptionDropdown(data){
//     const dropdownContainer = document.querySelector('#menu-title-subscription');
//     // dropdownContainer.multiple = true;
//     let dataDisplay = data.results.slice(0,20).map((object, index) => {
//         const newOption = document.createElement('option');
//         newOption.innerHTML = `${object.provider_id}`
//         newOption.value = "yay"
//         dropdownContainer.appendChild(newOption)

//         return 
//     });
    
// }






// function addLogoRoutes(){
//     // let selectedLogo = document.querySelectorAll(".subscription-logo");
//     let subscriptionList = []
//     for (let i=0; i<$j('.subscription-logo').length; i++){
//         // const logoBtn = document.querySelector(`#${selectedLogo[i].id}`);
//         let logoId= $j('.subscription-logo').attr('id');
//         let logoBtn = '#' + logoId;
//         (logoBtn).on("click", function(e){
//             e.preventDefault();
//             if (subscriptionList.includes(selectedLogo[i])){
//                 //already clicked

//                 //get index
//                 const index = subscriptionList.indexOf(selectedLogo[i]);
//                 subscriptionList.splice(index, 1);
//                 selectedLogo[i].style.border = "none";
//             }
//             else{
//                 subscriptionList.push(selectedLogo[i]);
//                 selectedLogo[i].style.border = "2px yellow solid";
//             }

//         })
//     }
// }


function formatProviderParam(arr){
    let query = '';
    for (let i=0; i<arr.length; i++){
        if(i == arr.length -1){
            query = query + arr[i]
            return query
        }
        query = query + arr[i] + "-";
    }
}

function formatProviderParam2(param){
    const reformatted = param.replace('-', '|');
    return reformatted
}



function getLocation(){
    const userInfo = localStorage.getItem("user");
    if (userInfo !== null){
        const userObject = JSON.parse(userInfo);
        const userLocation = userObject.location;
        return userLocation
    }
    //new user
    else{
        const userLocationData = localStorage.getItem("geoLocation");
        const userLocation = JSON.parse(userLocationData);
        // const countryCode = userLocation.country_code;
        // const countryName = userLocation.country;
        // return [countryCode, countryName]
        // return countryName
        return userLocation
    }

}    

// *************************COME BACKKKKKKK DON'T LEAVEEEEE*************************





// async function getVideo(movie_id){
//     const response = await fetch(`http://localhost:4000/get_video/${movie_id}`);
//     const data = await response.json();
//     return data
// }








// **********************************************CAROUSEL**********************************************
// async function mainCarousel(genre,positionId){
//     const data = await getMovieApi(genre);
//     let dataDisplay = data.results.slice(0,10).map((object, index) => {

//         const newItem = createCarouselImg(object,index);

//         $j(function(){
//             $j(positionId).owlCarousel('add', newItem);
//             $j(positionId).owlCarousel('update')
//         })


//         return 
//     });
// }

async function mainCarousel(genre,positionId){
    const data = await getMovieApi(genre);
    let dataDisplay = data.results.slice(0,10).map((object, index) => {

        const newItem = createCarouselImg(object,index);

        $j(function(){
            $j(positionId).owlCarousel('add', newItem);
            $j(positionId).owlCarousel('update')
        })


        return 
    });
}

// function createCarouselImg(data, index){
//     const {id,title, poster_path, backdrop_path} = data;
//     const imageWidth = 300;

//     let imgSrc = `https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}` 

//     if((poster_path == null)){
//         imgSrc=`images/no-poster.png" style = "width: ${imageWidth}px; height: 432px`
//     }

//     newOwlItem = `    <div class="item" id="item${index}">
//     <img class="owlImg" id='${data.id}'src="${imgSrc}">
// </div>`
//     return newOwlItem
// }


function createCarouselImg(data, index){
    const {id,title, poster_path, backdrop_path} = data;
    const imageWidth = 300;

    let imgSrc = `https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}` 

    if((poster_path == null)){
        imgSrc=`images/no-poster.png" style = "width: ${imageWidth}px; height: 432px`
    }

    newOwlItem = ` 
    <img class="owlImg" id='${data.id}'src="${imgSrc}">`
    return newOwlItem
}

// **********************************************SEARCH DISPLAY**********************************************


// function displayMovieContainer(data, numOfMovies, count,genreCode){
//     let dataDisplay = data.slice(0,numOfMovies).map((object, index) => {
//         return createMovieContainer(object,index,count)
//     }).join("");

    
//     // document.querySelector("#main").style.display = "none";
//     document.querySelector("#sub1").style.display = "none";

//     document.querySelector("#main").style.opacity = 0.2;
//     // document.querySelector("#sub1").style.opacity = 0.2;

//     const newContainer = document.createElement('div');
//     newContainer.setAttribute('class', 'displayList');

//     newContainer.setAttribute('id', `display${count}`);
//     newContainer.innerHTML += dataDisplay;

//     if (count !== 1){
//         newContainer.style.display = 'none';
//     }

//     // document.querySelector(".displayMovies").appendChild(newContainer);
//     document.querySelector(`#genre${genreCode}`).appendChild(newContainer);
//     // display next button when page is ready
//     isPageReady(10);
// }

function displayMovieContainer(data, numOfMovies, count){
    let dataDisplay = data.slice(0,numOfMovies).map((object, index) => {
        return createMovieContainer(object,index,count)
    }).join("");

    
    // document.querySelector("#main").style.display = "none";
    // document.querySelector("#sub1").style.display = "none";
    // document.querySelector("#displayServices").style.display = "none";

    hideBackground();

    const newContainer = document.createElement('div');
    newContainer.setAttribute('class', 'displayList');

    newContainer.setAttribute('id', `display${count}`);
    newContainer.innerHTML += dataDisplay;

    if (count !== 1){
        newContainer.style.display = 'none';
    }

    document.querySelector(".displayMovies").appendChild(newContainer);

    // display next button when page is ready
    isPageReady(10);
}

// function displaySearchMovieContainer(data, numOfMovies){
//     document.querySelector("#main").style.display = "none";
//     document.querySelector("#sub1").style.display = "none";


//     let dataDisplay = data.slice(0,numOfMovies).map((object, index) => {
//         return createMovieContainer(object,index,1)
//     }).join("");


//     const newContainer = document.createElement('div');
//     newContainer.setAttribute('class', 'displayList');
//     // newContainer.setAttribute('id', `search${count}`);
//     newContainer.innerHTML += dataDisplay;

//     // if (count !== 1){
//     //     newContainer.style.display = 'none';
//     // }

//     document.querySelector(".displayMovies").appendChild(newContainer);

//     // display next button when page is ready
//     // isPageReady(10);
// }


function displaySearchMovieContainer(data){
    // document.querySelector("#main").style.display = "none";
    // document.querySelector("#sub1").style.display = "none";

    hideBackground();
    
    document.querySelector('#services').style.display="none";

    let counter = 1
    for (let i=0; i<3; i++){
        if (data[i].length > 0){
            for(let j=0; j<=10; j+=10){
                if ((data[i].length > 10) || (j==0)){
                    const newContainer = document.createElement('div');
                    newContainer.setAttribute('class', 'displayList');
                    newContainer.setAttribute('id', `display${counter}`);

                    if (counter !== 1){
                        newContainer.style.display = 'none';
                    }
            
                    let dataDisplay = data[i].slice(0+j,10+j).map((object,index)=>{
                        return createMovieContainer(object,index,counter)
                    }).join("");
            
                    newContainer.innerHTML += dataDisplay;
                    document.querySelector(".displayMovies").appendChild(newContainer);
                    counter +=1
                }

            }
        }
    }
    displaySearchBtns(counter)

}

function displaySearchBtns(counter){
    const lastPage = counter-1
    for (let i=lastPage; i>0; i--){
        if (i !== lastPage){
            createNextBtn(i);
            createPrevBtn(i);  
            document.querySelector(`#nextBtn${i}`).style.display = "block";

            if (i == 1){
                //initialize movie routes for first page only
                addGenreMovieRoutes(1);
            }
        }
        else if(i == lastPage){
            createNextBtn(i);
            createPrevBtn(i);
            createHomeBtn(i);
            const prevBtn = document.querySelector(`#prevBtn${i}`);
            if (prevBtn){
                prevBtn.style.display = "block"
            }
            document.querySelector(`.homeBtn`).style.display = "block";
        }
    }
}


function createNextBtn(count){
    const createButtonContainer = document.createElement('span');
    createButtonContainer.setAttribute('id', `btnContainer${count}`);
    createButtonContainer.setAttribute('class', 'btnContainer');

    const createButton = document.createElement('button');
    createButton.setAttribute('id', `nextBtn${count}`);
    createButton.setAttribute('class', 'nextBtn' )
    createButton.innerHTML = `<i class="fa-solid fa-hand-point-right"></i>`;

    //make it invisible until page~ is ready
    createButton.style.display = "none";
    
    document.querySelector(`#display${count}`).appendChild(createButtonContainer);
    document.querySelector(`#btnContainer${count}`).appendChild(createButton);

    createButton.addEventListener('click', function(e){
        e.preventDefault();
        const nextDisplay = document.querySelector(`#display${count + 1}`);
        if (nextDisplay){
            const currentDisplay = document.querySelector(`#display${count}`);
            currentDisplay.style.display = "none";
            nextDisplay.style.display = "flex";
            window.scrollTo(0,0);
            addGenreMovieRoutes(count+1);
        }
    })
}


function createPrevBtn(count){
    if (count == 1){
        return
    }
    const createButton = document.createElement('button');
    createButton.setAttribute('id', `prevBtn${count}`);
    createButton.setAttribute('class', 'prevBtn' )
    createButton.innerHTML = `<i class="fa-solid fa-hand-point-left"></i>`;

    //make it invisible until page~ is ready
    // createButton.style.display = "none";
    
    const btnContainer = document.querySelector(`#btnContainer${count}`);
    btnContainer.insertBefore(createButton, btnContainer.firstChild);


    createButton.addEventListener('click', function(e){
        e.preventDefault();
        const prevDisplay = document.querySelector(`#display${count - 1}`);
        if (prevDisplay){
            const currentDisplay = document.querySelector(`#display${count}`);
            currentDisplay.style.display = "none";
            prevDisplay.style.display = "flex";
            window.scrollTo(0,0);
        }

    })
}

function createHomeBtn(count){
    const createButton = document.createElement('a');
    createButton.setAttribute('class', 'homeBtn' );
    createButton.href = "movie.html";
    createButton.innerHTML = `<img src="images/movie-logo.png" alt="">&nbsp;STREAMmee`;
    const btnContainer = document.querySelector(`#btnContainer${count}`);
    btnContainer.appendChild(createButton);
}



function loadingBtn(count){
    const createLoading = document.createElement('button');
    createLoading.setAttribute('id', `loadingBtn${count}`);
    createLoading.setAttribute('class', `loadingBtn`);
    createLoading.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
    // document.querySelector(`#display${count}`).appendChild(createLoading);
    document.querySelector(`#btnContainer${count}`).appendChild(createLoading);

}

function isPageReady(searchLimit){
    for (let i=2; i<=searchLimit; i++){
        let nextPageReady = document.querySelector(`#display${i}`);
        if (nextPageReady){
            // console.log(`page ${i} is readyyy`)
            const controlBtns = document.querySelector(`#loadingBtn${i-1}`);
            if (controlBtns){
                document.querySelector(`#loadingBtn${i-1}`).style.display = "none";
                document.querySelector(`#nextBtn${i-1}`).style.display = "block";

            }
        }


    }

}
// const nextBtnArr = document.querySelectorAll('.nextBtn');
// console.log(nextBtnArr)
// for(let i=0; i<nextBtnArr.length; i++){
//     const nextBtn = nextBtnArr[i];
//     nextBtn.addEventListener('click', function(e){
//         e.preventDefault();
//         console.log(nextBtn.id.slice(5));
//     })
// }



// **********************************************MOVIE POSTER DISPLAY**********************************************
function createMovieContainer(data,index,listNum){
    const {id,title, poster_path, backdrop_path, overview, release_date, vote_average} = data;
    const imageWidth = 300;
    const idName = "movie_btn_" + listNum +'_' +index;
    let imgSrc = `"https://image.tmdb.org/t/p/w${imageWidth}/${poster_path}"` 

    let releaseYear = "N/A"
    if (release_date){
        releaseYear = release_date.slice(0,4);
    }
    let voteAvgRound = "N/A"
    if (vote_average){
        voteAvgRound = Math.round(vote_average * 10)/10
    }
    


    if((poster_path == null)){
        imgSrc=`"images/no-poster.png" style = "width: ${imageWidth}px; height: 432px"`
    }


    return `    <div class="movie${listNum}" id=${idName}>    <div class="poster">
             <img src=${imgSrc} alt="movie poster"/> 
        </div>


        <div id="${id}" class="title" style="width: ${imageWidth}px ">
            ${title}
        </div>

        <div class="descr">
            <div class="date">${releaseYear}</div>
            <div class="vote"><i class="fa-solid fa-star" style="color:orange">&nbsp;</i>${voteAvgRound}</div>
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


function addSearchMovieRoutes(){
    let selectedMovie = document.querySelectorAll(".movie1");
    for (let i=0; i<selectedMovie.length; i++){
        if (selectedMovie[i].id){
            const movieBtn = document.querySelector(`#${selectedMovie[i].id}`);
            movieBtn.addEventListener("click", async function(e){
                e.preventDefault();
                const movieClass = this.querySelector(".title");
                const movieId = movieClass.id;
                // const provider = await getProviders(movieId);
                // console.log(provider);
                const data = await getMovie(movieId);
                // const providers = await getUserProviders(movieId, "KR")
                displayMoviePreview(data);
    
            })
        }

    }
}


function addGenreMovieRoutes(newCount){
    const parentEl = document.querySelector(`#display${newCount}`);
    const childElArr = parentEl.querySelectorAll(`.movie${newCount}`);

    for (let i=0; i<childElArr.length; i++){

        const movieBtn = document.querySelector(`#${childElArr[i].id}`);

        movieBtn.addEventListener("click", async function(e){
            e.preventDefault();
            const movieClass = this.querySelector(".title");
            const movieId = movieClass.id;
            const data = await getMovie(movieId);
            displayMoviePreview(data);

        })
        

    }
}
// ********************************************** FORMAT MODAL DISPLAY**********************************************


// async function displayMovie(foundMovie){
//     const {id,title, poster_path, runtime, genres, production_companies, overview, release_date, vote_average, videos, "watch/providers":providers} = foundMovie;
//     const videoWidth = 740;
//     const videoHeight = videoWidth / (16/9);

//     const videoSrc = displayPreviewTrailer(videos.results);

//     // const logoArray = displayPreviewLogo(production_companies);

//     const genreArray = displayPreviewGenre(genres);

//     const providersData = getPreviewProviders(providers);
//     console.log(providersData)

//     // if (providersData){
//     //     const providersArray = displayPreviewProviders(providersData);
//     //     const buyArray = displayPreviewBuy(providersData);
//     // }

//     const providersArray = displayPreviewProviders(providersData);
//     const buyArray = displayPreviewBuy(providersData);


//     document.querySelector("#dialog-message").innerHTML = `
//     <div class="videoDisplay">
//     <iframe id="movieTrailer"height="${videoHeight}" width="${videoWidth}" allow="autoplay" 
//     src=${videoSrc} frameborder="0" allowfullscreen> 
//     </iframe></div>
//     <h3 class="previewTitle">${title}</h3>
//     ${genreArray} 
//     <p class="previewTime">${runtime} min</p>
    
//     <p class="previewDescr" id= "overview">${overview}</p>
//     <div class="streamDisplay"><p class='providerLabel'>Stream</p><p class="previewStream" id= "previewStream">${providersArray}</p></div>
//     <div class="buyDisplay"><p class='providerLabel'>Buy</p><p class="previewBuy" id= "previewBuy">${buyArray}</p></div>

    
//     `
// }

async function displayMovie(foundMovie){
    // console.log(foundMovie)
    let {id,title, backdrop_path, runtime, genres, production_companies, overview, release_date, vote_average, videos, "watch/providers":providers} = foundMovie;

    //initialize movie
    const videoWidth = 740;
    const videoHeight = videoWidth / (16/9);
    if (videos.results.length > 0){
        const videoSrc = displayPreviewTrailer(videos.results);
        document.querySelector("#dialog-message").innerHTML = `
        <div class="videoDisplay">
        <iframe id="movieTrailer"height="${videoHeight}" width="${videoWidth}" allow="autoplay" 
        src=${videoSrc} frameborder="0" allowfullscreen> 
        </iframe></div>`
    }
    else if (backdrop_path !== null){
        document.querySelector("#dialog-message").innerHTML = `
        <div class="videoDisplay">
        <img id="movieTrailer" src="https://image.tmdb.org/t/p/original/${backdrop_path}" 
        height="${videoHeight}" width="${videoWidth}  alt=""></div>`
    }
    else{
        document.querySelector("#dialog-message").innerHTML = `
        <div class="videoDisplay">
        <img id="movieTrailer" src="images/no-video.png" alt=""></div>`
    }


    //verify overview exists
    if (overview === ""){
        overview = "Description not found"
    }
    // const logoArray = displayPreviewLogo(production_companies);

    const genreArray = displayPreviewGenre(genres);

    document.querySelector("#dialog-message").innerHTML += `
    <h3 class="previewTitle">${title}</h3>
    ${genreArray} 
    <p class="previewTime">${runtime} min</p>
    
    <p class="previewDescr" id= "overview">${overview}</p>    
    `

    const providersData = getPreviewProviders(providers);
    // can we stream from our country
    if (providersData){
        const providersArray = displayPreviewProviders(providersData);
        const buyArray = displayPreviewBuy(providersData);
        if ((!providersArray)&&(!buyArray)){
            document.querySelector("#dialog-message").innerHTML += `
            <p class="errorDisplay"><i class="fa-solid fa-triangle-exclamation"></i>We cannot find any streaming platforms for this movie</p>`
        }
        if (providersArray){
            document.querySelector("#dialog-message").innerHTML += `
            <div class="streamDisplay"><p class='providerLabel'><i class="fa-solid fa-tv"></i>&nbsp;Stream</p><p class="previewStream" id= "previewStream">${providersArray}</p></div>`
        }
        if (buyArray){
            document.querySelector("#dialog-message").innerHTML += `
            <div class="buyDisplay"><p class='providerLabel'><i class="fa-regular fa-credit-card"></i>&nbsp;Buy</p><p class="previewBuy" id= "previewBuy">${buyArray}</p></div>
            `
        }
    }
    else{
        document.querySelector("#dialog-message").innerHTML += `
        <p class="errorDisplay"><i class="fa-solid fa-location-pin-lock"></i> Not available to stream in your region</p>`
    }
}


{/* <div class="logoDisplay"><p class="previewLogo" id= "previewLogo">${logoArray}</p> </div> */}

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
        return videoSrc = `"https://www.youtube.com/embed/${videoList[0].key}?autoplay=1&mute=1&rel=0"`
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
    return dataDisplay
}


function displayPreviewGenre(genreList){

    let dataDisplay = genreList.slice(0,genreList.length).map((object, index) => {
        return `<p class="previewGenreIcon" id="genre_${index}">${object.name}</p>`
    }).join("");
    return dataDisplay
}

// function getPreviewProviders(data){
//     // get user location
//     const userInfo = localStorage.getItem("user");
//     //returning user
//     if (userInfo !== null){
//         const userObject = JSON.parse(userInfo);
//         const userLocation = userObject.location; 

//         if (`${userLocation}` in data.results){
//             const providerArray = data.results[`${userLocation}`]
//             console.log(`finding list for ${userLocation}`)
//             console.log(providerArray)
//             return providerArray
//         }
//     }
//     //new user
//     else{
//         const userLocationData = localStorage.getItem("selectedLocation");
//         const userLocation = JSON.parse(userLocationData);
//         const countryCode = userLocation.country_code;
//         if (countryCode in data.results){
//             const providerArray = data.results[countryCode]
//             console.log(providerArray)
//             return providerArray
//         }
//     }
// }


function getPreviewProviders(data){
    // get user location
    const userLocationData= getLocation();
    const name = userLocationData.country;
    const code = userLocationData.country_code;

    // console.log(name);
    // console.log(code)
    if (code in data.results){
        const providerArray = data.results[code];
        // console.log(`finding list for ${name}`)
        // console.log(providerArray)
        return providerArray
    }
    // console.log("Cannot stream from your current location")
    return

}

function displayPreviewProviders(providersList){
    if ((providersList)&&("flatrate" in providersList)){
        let dataDisplay = providersList.flatrate.slice(0,providersList.length).map((object, index) => {
            if (object.logo_path !== null){
                return `<p class="previewProviderIcon" id="provider_${index}"><img src="https://image.tmdb.org/t/p/w92/${object.logo_path}" alt=""></p>`
            }
        }).join("");

        return dataDisplay
    }
    return
    // return  `<p id="previewProviderMessage" class="error_msg">Not available in your current location</p>`

}

function displayPreviewBuy(providersList){
    if ((providersList)&&("buy" in providersList)){
        let dataDisplay = providersList.buy.slice(0,providersList.length).map((object, index) => {
            if (object.logo_path !== null){
                return `<p class="previewBuyIcon" id="buy_${index}"><img src="https://image.tmdb.org/t/p/w92/${object.logo_path}" alt=""></p>`
            }
        }).join("");

        return dataDisplay
    }
    return
    // return  `<p id="previewBuyMessage" class="error_msg">Not available in your current location</p>`

}

function displayPreviewExtraProviders(providersList){
    if ("link" in providersList){
        const infoLink = providersList.link;
        return `<a href='${infoLink}'>More Info</a>`
}
}
// ********************************************** MODAL EXECUTE**********************************************

function displayMoviePreview(data ){
    displayMovie(data);

    $j(function(){
        // $j("#dialog-message" ).dialog("moveToTop");
        $j('#dialog').dialog( "open" );
        return
    })
    
}


function tutorialStart(){
    $j(function(){
        // $j("#dialog-message" ).dialog("moveToTop");
        $j('#tutorial').dialog( "open" );
        return
    })
}
// function displaySubscription(formattedLogos){
//     document.querySelector('#dialog-subscription').innerHTML=`${formattedLogos}`

//     $j(function(){
//         // $j("#dialog-message" ).dialog("moveToTop");
//         $j('#dialog-subscription').dialog( "open" );
//         return
//     })
//     addLogoRoutes();
// }

$j(function(){
    $j('.buttons').click(function(){
        $j(modal).dialog( "close" );
    })
})



// ********************************************** JAVASCRIPT EXECUTE**********************************************

// document.querySelector('#test').addEventListener('click', function(e){
//     e.preventDefault();
//     $j(function(){
        
//         // $j('#trendWeekOwl').owlCarousel('destroy'); 
//         $j('#trendTodayOwl').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
//         $j('#trendTodayOwl').find('.owl-stage-outer').children().unwrap();
//         $j('#trendWeekOwl').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
//         $j('#trendWeekOwl').find('.owl-stage-outer').children().unwrap();

//     });
//     document.querySelector('#trendTodayOwl').innerHTML = '';
//     document.querySelector('#trendWeekOwl').innerHTML = '';
//     document.querySelector('#trendTodayOwl').className = '';
//     document.querySelector('#trendWeekOwl').className = '';

//     console.log("yay")
//     $j(function createOwl($){
//         $('#trendTodayOwl').owlCarousel({
//             loop:true,
//             items:10,
//             margin:10,
//             // nav:true,
//             mouseDrag:true,
//             autoplay:true,
//             autoplayTimeout: 3000,
//             dots:true,
//             stagePadding:50,
//             responsive:{
//                 0:{
//                     items:1
//                 },
//                 600:{
//                     items:3
//                 },
//                 1000:{
//                     items:4
//                 },
//                 1200:{
//                     items:6
//                 }
//             }
//         });
    
//         $('#trendWeekOwl').owlCarousel({
//             loop:true,
//             items:10,
//             margin:10,
//             // nav:true,
//             mouseDrag:true,
//             autoplay:true,
//             autoplayTimeout: 3000,
//             dots:true,
//             stagePadding:50,
//             responsive:{
//                 0:{
//                     items:1
//                 },
//                 600:{
//                     items:3
//                 },
//                 1000:{
//                     items:4
//                 },
//                 1200:{
//                     items:6
//                 }
//             }
//         });
    
    
//     });

//     mainCarousel("trendday","#trendTodayOwl");
//     mainCarousel("trendweek","#trendWeekOwl");
// })




function tutorial(){
    document.querySelector('#display-region').style.display = "block";

}

async function convertGenreToName(code){
    const data = await getGenre();
    for (let i=0; i< data.genres.length; i++){
        if (data.genres[i]["id"] == code){
            return data.genres[i]["name"]
        }
    }

}

const characterArr = {
    " ": "%20",
    "<": "%3C", 
    ">": "%3E", 
    "#": "%23",
    "%": "%25",
    "+": "%2B",
    "{": "%7B",
    "}": "%7D", 
    "|": "%7C", 
    "\\": "%5C", 
    "^": "%5E", 
    "~": "%7E", 
    "[": "%5B", 
    "]": "%5D", 
    "'": "%60",
    ";": "%3B", 
    "/": "%2F", 
    "?": "%3F", 
    ":": "%3A", 
    "@": "%40", 
    "=": "%3D", 
    "&": "%26", 
    "$": "%24"
}

// const searchBtn = document.querySelector("#searchBtn");
// searchBtn.addEventListener("click", async function(e){
//     e.preventDefault();
//     switchDisplay();
//     let searchMovie = document.querySelector("#search-input").value;
//     document.querySelector("#search-input").value = '';
//     if (searchMovie === ''){
//         return
//     }
//     for (let i=0; i<searchMovie.length; i++){
//         if (searchMovie.charAt(i) in characterArr){
//             const invalidChar = searchMovie.charAt(i);
//             const newString = searchMovie.replace(invalidChar, characterArr[invalidChar]);
//             searchMovie = newString
//         }
//     }
//     const movieList = await getMovieList(searchMovie);

//     //validate if movie title exists
//     if (movieList.results.length > 0){
//         console.log(movieList.results.length)
//         // displaySimiliarMovies(movieList);
//         displaySearchMovieContainer(movieList.results,20);
//         addSearchMovieRoutes()

//     }

//     else{
//         alert("We cannot find anything in our database")

//     }
    
// })

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", async function(e){
    e.preventDefault();
    switchDisplay();
    let searchMovie = document.querySelector("#search-input").value;

    const searchMsg = document.querySelector('#searchMsg')
    searchMsg.innerHTML = `<p> Search results for <span style='color:orange'>"${searchMovie}"</span></p> `;

    document.querySelector("#search-input").value = '';
    if (searchMovie === ''){
        return
    }
    for (let i=0; i<searchMovie.length; i++){
        if (searchMovie.charAt(i) in characterArr){
            const invalidChar = searchMovie.charAt(i);
            const newString = searchMovie.replace(invalidChar, characterArr[invalidChar]);
            searchMovie = newString
        }
    }
    const movieList = await getMovieList(searchMovie);

    // console.log(movieList)
    //validate if movie title exists
    if (movieList[0].length > 0){
        // displaySimiliarMovies(movieList);
        displaySearchMovieContainer(movieList);
        addSearchMovieRoutes();

    }

    else{
        hideBackground();
        document.querySelector('#services').style.display = "none";
        newEl.innerHTML += `
        <img src="images/no-results.png">
        <p> No results found. </p>`;

    }
    
})


// ********************************************** G EXECUTE**********************************************

// // get geolocation of user
// const data = null;

// const xhr = new XMLHttpRequest();
// //set to false because CORS blocks off all cookies
// xhr.withCredentials = false;

// xhr.addEventListener("readystatechange", async function () {
//   if (this.readyState === this.DONE) {
//     const response = this.response;
//     const myData = await JSON.parse(response);
//     let geolocation = {};
//     geolocation["location"] = myData;
//     localStorage.setItem('geoLocation', JSON.stringify(myData));


//     const data = localStorage.getItem('user')
//     //first time user
//     if (data == null){
//         // const userLocation = JSON.parse(localStorage.getItem('geoLocation'));
//         // console.log(userLocation);
//         // let user ={};
//         // user["location"] = userLocation;
//         // console.log(user)
//         localStorage.setItem('selectedLocation',JSON.stringify(myData));
//         displayFlag(myData.country_code)

//     }
//     else{
//         displayFlag(getLocation().country_code)
//     }
    
//   }
// });

// const MY_API_KEY = '417bf8a674b64865a20346832a91e6bd'
// xhr.open("GET", `https://ipgeolocation.abstractapi.com/v1?api_key=${MY_API_KEY}&fields=country_code,country,flag`);
// xhr.send(data);




     

// ********************************************** GEOLOCATION EXECUTE**********************************************










function displayFlag(countryCode){
    document.querySelector('#menu-title-region').innerHTML= `<img data-dropdown-btn src="https://flagsapi.com/${countryCode}/flat/24.png"><span data-dropdown-btn>&nbsp;${countryCode}</span>`
    return 
}



// document.querySelector('#menu-title-genre').addEventListener('click', function(e){
//     e.preventDefault();
//     const genreNav = document.querySelector('#sub-menu-genre');
//     const currentState = window.getComputedStyle(genreNav);
//     if (currentState['display'] === 'none'){
//         document.querySelector('#sub-menu-genre').style.display = "block";
//         console.log("yay")
//     }
//     else{
//         document.querySelector('#sub-menu-genre').style.display = "none";
//     }
    
// })

async function getRegions(){
    const response = await fetch(`http://localhost:4000/get_regions`);
    const data = await response.json();
    return data
}



async function getRegionNames(){
    const regionData = await getRegions();
    const regionDataArr = regionData.results;
    let regionNames = []
    for (let i=0; i<regionDataArr.length; i++){
        regionNames.push([regionDataArr[i].native_name, regionDataArr[i].iso_3166_1])
    }
    // console.log(regionNames)
    return regionNames
}


async function createRegionDropdown(){
    const countryNameList = await getRegionNames();

    const dropdownContainer = document.querySelector('#region');
    for (let i=0; i<countryNameList.length; i++){
        const name = countryNameList[i][0];
        const code = countryNameList[i][1];
        const newOption = document.createElement('option');
        newOption.textContent = name;
        newOption.value = name;
        newOption.id = code;
        dropdownContainer.appendChild(newOption);
    }

    const data = getLocation();
    const location = document.querySelector(`#${data.country_code}`)
    location.setAttribute("selected", 'selected');
    displayFlag(data.country_code)
}



// document.querySelector('#menu-title-region').addEventListener('click', function(e){
//     e.preventDefault();

//     createRegionDropdown()

// })


document.querySelector("#regionBtn").addEventListener("click", function(e){
    e.preventDefault();

    const location =  document.querySelector('#region');
    const locationName = document.querySelector('#region').value;
    const locationCode = location.options[location.selectedIndex].id

    let locationObject = {};
    locationObject['country'] = locationName;
    locationObject['country_code'] = locationCode;

    let user = {};
    user["location"] = locationObject;
    // displayFlag(locationCode);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.removeItem("subscription");
    // document.querySelector('#display-region').style.display = 'none';
    updateFlagDisplay();
    //display flag
    document.location.reload();

})


function updateFlagDisplay(){
    const data = localStorage.getItem('user');
    //first time user
    if (data == null){
        const userLocation = JSON.parse(localStorage.getItem('geoLocation'));
        displayFlag(userLocation.country_code);
        return
    }
    const userSelectedLocation = JSON.parse(data);
    displayFlag(userSelectedLocation.location.country_code);
}

