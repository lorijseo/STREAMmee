// var el = document.getElementById("go")
// if (el){
//     el.addEventListener("click", getPokemon)
// };

// function getPokemon(event){
//     console.log("yay!")
//     const name = document.getElementById("pokemon").value
//     fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
//         .then((response) => response.json())
//         .then((data) => {
//             document.querySelector(".display").innerHTML = `
//             Name: ${data.name} Height: ${data.height} ID: ${data.id} Weight: ${data.weight} Element: ${data.types[0].type.name}`;
//         })
//         .catch((err) => {
//             console.log("pokemon not found", err);
//         });
//     event.preventDefault();
// }


// // importing express with variable express
// const express = require("express")
// // store another variable to store
// const app = express()
// // specify port number
// const port = 3000

// // install cors to prevent any bugs with cross-platform 
// const cors = require('cors');

// // use cors package after requiring 
// app.use(cors());

// const key = "613a35f50aa647f0d9c8c32ff6377714"

// app.get('/trending', async(req, res, next) => {
//     const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`);
//     const data = await response.json();
//     res.send(data);
// });


// // listen in which port
// app.listen(port, () => {
//     console.log(`Application is listening on port ${port}!`)
// })



// importing express with variable express
const express = require("express")


const app = express();


// specify port number
const port = 4000

// install cors to prevent any bugs with cross-platform 
const cors = require('cors');

// use cors package after requiring 
app.use(cors());


const key = "613a35f50aa647f0d9c8c32ff6377714"
app.get('/moviedata/horror', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=27`);
    const data = await response.json();
    res.send(data);
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

app.get('/moviedata/adventure', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=12`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/animation', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=16`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/comedy', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=35`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/crime', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=80`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/documentary', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=99`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/drama', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=18`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/family', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10751`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/fantasy', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=14`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/history', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=36`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/music', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10402`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/mystery', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=9648`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/thriller', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=53`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/war', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=10752`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/western', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=37`);
    const data = await response.json();
    res.send(data);
});

app.get('/moviedata/sciencefiction', async (req, res, next) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=878`);
    const data = await response.json();
    res.send(data);
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
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=1`);
    const data1 = await response.json();
    // const obj1 = JSON.parse(data);
    // res.send(data);
    const response2 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=2`);
    const data2 = await response2.json();

    const response3 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=3`);
    const data3 = await response3.json();

    const response4 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=4`);
    const data4 = await response4.json();

    const response5 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=5`);
    const data5 = await response5.json();
    // const obj2 = JSON.parse(data2);

    const mergedArr =[data1, data2,data3, data4, data5]
    // console.log(mergedArr);
    res.send(mergedArr)
});

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTNhMzVmNTBhYTY0N2YwZDljOGMzMmZmNjM3NzcxNCIsInN1YiI6IjYzZTZjMjhlZjI4ODM4MDA4MmRkNWVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2BeG7R-8jQVLM3wsBq8PrVZ6evMFyMJ17jyLosLxcrI'
    }
};




//returns keywords given movie id
app.get(`/get_keys/:movie_id`, async(req,res,next)=>{
    const movie_id = req.params.movie_id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/keywords`, options);
    const data = await response.json();
    res.send(data);
})

//returns list of similar movies given string
app.get(`/get_movies/:movie_title`,async(req,res,next)=>{
    const movie_title = req.params.movie_title;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_title}&include_adult=false&language=en-US&page=1`, options)
    const data = await response.json();
    res.send(data);
})


//returns movie given movie id
app.get(`/get_movie/:movie_id`, async(req,res,next)=>{
    const movie_id = req.params.movie_id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&append_to_response=videos`, options);
    const data = await response.json();
    res.send(data);
})
  
//returns video results given movie id
app.get(`/get_video/:movie_id`, async(req,res,next)=>{
    const movie_id = req.params.movie_id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options);
    const data = await response.json();
    res.send(data);
})



//gets all movies that are based on book or novel
https://api.themoviedb.org/3/discover/movie?api_key=613a35f50aa647f0d9c8c32ff6377714&language=en-US&sort_by=popularity.desc&page=1&with_keywords=818


// listen in which port
app.listen(port, () => {
    console.log(`Application is listening on port ${port}!`)
})