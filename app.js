const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Midddleware
app.use(cors());
app.use(bodyParser.json());


//importer les routes

const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

// routes 
app.get('/', (req, res)=>{
    res.send('bienvenue vous etes connecter ');

});






// //connexion base donnees 
mongoose.connect(process.env.DB_CONNEXION,{useNewUrlParser:true},()=>{
    console.log("connecter à la base ")
})

// comment lieer avec server 
app.listen(3000)