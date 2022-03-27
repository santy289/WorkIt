require('dotenv').config()
const express = require('express');

const configExpress = require('./config/express')

const app = express();

configExpress(app)

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
