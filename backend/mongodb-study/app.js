const express = require('express');
const { connectToDb, getDb } = require('./db');

// init app & middleware
const app = express();

// db connection
let db;
connectToDb((err)=>{
    if (!err){
        app.listen(3000, () =>{
            console.log(`app listening on port 3000`);
        })
        db = getDb()
    }
})

// route
app.get('/movies', (req, res) =>{
    let movies = []
    db.collection('movies')
    .find()
    .sort({imdbRating: 1})
    .forEach((movie) => movies.push(movie))
    .then(()=>{
        res.json(movies)
        // res.json({msg: "Testing"});
    })
    .catch((err)=>{
        res.status(500).json({error: 'Could not fetch'})
    })
});