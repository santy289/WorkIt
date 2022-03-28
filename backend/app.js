require('dotenv').config()

const express = require('express');

const connectDB = require('./config/database');
const configExpress = require('./config/express');
const routes = require('./api/routes/task.routes');

const app = express();

connectDB();

configExpress(app);
routes(app);

const port = process.env.PORT || 8080;
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
