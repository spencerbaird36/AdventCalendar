const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3030;
const app = express();
const router = require('./routes');
const server = http.createServer(app);
const mongoose = require('mongoose');
const axios = require('axios');
const url = `https://pixabay.com/api/`
const api_key = require('./config').API_KEY;


mongoose.connect('mongodb://localhost:auth/auth')


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/api/images', function(req, res){
  res.send({"hi": "spencer"});
})
app.get("*", function(req, res){
  res.sendFile(path.resolve(__dirname, "public/index.html"));
})


router(app);


server.listen(port);
console.log('server listening', port);
