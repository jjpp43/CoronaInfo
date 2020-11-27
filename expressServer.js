const express = require('express');
const app = express();
const request = require('request');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

var apiKey = 'f5f7042b1247705470ab9f7b9d5f7d884';
var url = 'https://api.corona-19.kr/korea/';


app.get('/', function(req,res){
    console.log(req.decoded);
});