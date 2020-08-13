const express = require('express');
const app = express();
const request = require('request');


// const checkConnection = require('./middleware/check-connection');
const bodyParser = require('body-parser');
app.use(express.static('public'));

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//signup route
app.post('/signup', (req, res) => {
  const { firstName, lastName, email } = req.body;

  const options = {
    url: ''
  }

  request(options, (err, response, body) => {

  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on localhost:${PORT}`));

