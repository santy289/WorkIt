const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://workit:workitmir@workit.gdw07.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

function configExpress(app){
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;
