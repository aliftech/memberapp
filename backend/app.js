const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load routers
const authRouter = require('./src/routes/auth');
const articleRouter = require('./src/routes/article');
const videoRouter = require('./src/routes/video');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Set CORS
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection
const db = require("./src/models");

db.sequelize.sync()
    .then(() => {
      console.log("Database syncronization success");
    })
    .catch((err) => {
      console.log("Failed to connect to database: " + err.message);
    });

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.use(authRouter);
app.use(articleRouter);
app.use(videoRouter);
  
const server = app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

module.exports = { app, server };