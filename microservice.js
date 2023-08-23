


// importing express with variable express
const express = require("express");
const compression = require('compression');


const app = express();
app.use(compression()); 


// specify port number
const port = process.env.PORT || 4000;

// install cors to prevent any bugs with cross-platform 
const cors = require('cors');

// use cors package after requiring 
app.use(cors());

// MAKE SURE TO REMOVE THIS LATER 
// var fetch = require("node-fetch");
const key = "613a35f50aa647f0d9c8c32ff6377714";

app.get(`/moviedata/horror/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=27&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});


app.get('/moviedata/horror', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=27`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/romance/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=10749&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/romance', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10749`);
    const data = await response.json();
    res.send(data);
});



app.get('/moviedata/action', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=28`);
    const data = await response.json();
    res.send(data);
});
app.get(`/moviedata/adventure/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=12&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});
app.get('/moviedata/adventure', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=12`);
    const data = await response.json();
    res.send(data);
});


app.get(`/moviedata/animation/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=16&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/animation', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=16`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/comedy/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=35&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/comedy', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=35`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/crime/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=80&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/crime', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=80`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/documentary/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=99&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/documentary', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=99`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/drama/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=18&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/drama', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=18`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/family/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=10751&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/family', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10751`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/fantasy/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=14&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/fantasy', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=14`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/history/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=36&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/history', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=36`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/music/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=10402&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/music', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10402`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/mystery/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=9648&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/mystery', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=9648`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/thriller/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=53&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/thriller', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=53`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/war/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=10752&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/war', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10752`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/western/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=37&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/western', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=37`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/sciencefiction/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=878&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/sciencefiction', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=878`);
    const data = await response.json();
    res.send(data);
});

app.get(`/moviedata/tvmovie/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=10770&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }
    res.send(mergedArr);
});

app.get('/moviedata/tvmovie', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10770`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/trendday', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/trendweek', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`);
    const data = await response.json();
    res.send(data);
});


// app.get('/moviedata/trendweek', async (req, res, next) => {
//     const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=1`);
//     const data1 = await response.json();
//     // const obj1 = JSON.parse(data);
//     // res.send(data);
//     const response2 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=2`);
//     const data2 = await response2.json();

//     const response3 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=3`);
//     const data3 = await response3.json();

//     const response4 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=4`);
//     const data4 = await response4.json();

//     const response5 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=5`);
//     const data5 = await response5.json();
//     const mergedArr =[data1, data2,data3, data4, data5]
//     res.send(mergedArr)
// });

app.get(`/moviedata/action/:code`, async (req, res, next) => {
    const code = req.params.code;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&watch_region=${code}&sort_by=popularity.desc&with_genres=28&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }

    res.send(mergedArr);
});

app.get(`/get_movies/:movie_title`, async (req, res, next) => {
    const movie_title = req.params.movie_title;
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_title}&include_adult=false&language=en-US&page=${i}`, options);
        const data = await response.json();
        mergedArr.push(data.results);
    }

    res.send(mergedArr);
});


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTNhMzVmNTBhYTY0N2YwZDljOGMzMmZmNjM3NzcxNCIsInN1YiI6IjYzZTZjMjhlZjI4ODM4MDA4MmRkNWVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2BeG7R-8jQVLM3wsBq8PrVZ6evMFyMJ17jyLosLxcrI'
    }
};

// app.get('/moviedata/documentary', async (req, res, next) => {
//     const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&append_to_response=videos,watch/providers&language=en-US&sort_by=popularity.desc&with_genres=99', options);
//     const data = await response.json();
//     res.send(data);
// });
  


//returns keywords given movie id
app.get(`/get_keys/:movie_id`, async(req,res,next)=>{
    const movie_id = req.params.movie_id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/keywords`, options);
    const data = await response.json();
    res.send(data);
})

//returns list of similar movies given string
// app.get(`/get_movies/:movie_title`,async(req,res,next)=>{
//     const movie_title = req.params.movie_title;
//     const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_title}&include_adult=false&language=en-US&page=1`, options)
//     const data = await response.json();
//     res.send(data);
// })



app.get(`/get_providers/:movie_id`, async(req,res,next)=>{
    const movie_id = req.params.movie_id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`, options);
    const data = await response.json();
    console.log(data)
    res.send(data);
});


//returns movie given movie id
app.get(`/get_movie/:movie_id`, async(req,res,next)=>{
    const movie_id = req.params.movie_id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&append_to_response=videos,watch/providers`, options);
    const data = await response.json();
    res.send(data);
})


app.get(`/get_regions`, async(req,res,next)=>{

    const response = await fetch('https://api.themoviedb.org/3/watch/providers/regions?language=en-US', options);
    const data = await response.json();
    res.send(data);
})


app.get(`/get_genre`, async(req,res,next)=>{

    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    const data = await response.json();
    res.send(data);
});
  



  
app.get(`/get_subscriptions/:code`, async(req,res,next)=>{
    const code= req.params.code;
    const response = await fetch(`https://api.themoviedb.org/3/watch/providers/movie?language=en-US&watch_region=${code}`, options);
    const data = await response.json();
    res.send(data);
})



app.get(`/get_movies_by_filter/:providers/:code/:page`, async(req,res,next)=>{
    const providers = req.params.providers;
    const code = req.params.code;
    const page = req.params.page;
    let providersFormatted = formatProviderQuery(providers);

    // console.log(providersFormatted);
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=613a35f50aa647f0d9c8c32ff6377714&with_watch_providers=${providersFormatted}&watch_region=${code}&page=${page}`);
    const data = await response.json();
    res.send(data);
})

app.get(`/get_movies_by_filter/:providers/:code/:page`, async(req,res,next)=>{
    const providers = req.params.providers;
    const code = req.params.code;
    const page = req.params.page;
    let providersFormatted = formatProviderQuery(providers);

    // console.log(providersFormatted);
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=613a35f50aa647f0d9c8c32ff6377714&with_watch_providers=${providersFormatted}&watch_region=${code}&page=${page}`);
    const data = await response.json();
    res.send(data);
})




app.get(`/get_movies_by_stream/:providers/:code/`, async (req, res, next) => {
    const providers = req.params.providers;
    const code = req.params.code;
    let providersFormatted = formatProviderQuery(providers);
    let mergedArr = [];
    for(let i=1; i<=5; i++){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=613a35f50aa647f0d9c8c32ff6377714&with_watch_providers=${providersFormatted}&watch_region=${code}&page=${i}`);
        const data = await response.json();
        mergedArr.push(data.results);
    }

    res.send(mergedArr);
});


function formatProviderQuery(param){
    const reformatted = param.replaceAll('-', '|');
    return reformatted
}



  
//returns video results given movie id
// app.get(`/get_video/:movie_id`, async(req,res,next)=>{
//     const movie_id = req.params.movie_id;
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options);
//     const data = await response.json();
//     res.send(data);
// })



app.get(`/get_book/`, async(req,res,next)=>{
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=potter+inauthor:rowling&key=AIzaSyCq3oTg--GJzlTZP5Q19ZgmYxn9JB04HEE`, options);
    const data = await response.json();
    res.send(data);
});

//gets all movies that are based on book or novel
https://api.themoviedb.org/3/discover/movie?api_key=613a35f50aa647f0d9c8c32ff6377714&language=en-US&sort_by=popularity.desc&page=1&with_keywords=818



// listen in which port
app.listen(port, () => {
    console.log(`Application is listening on port ${port}!`)
})