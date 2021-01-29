const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const path = require('path');
const request = require('request');


// const checkConnection = require('./middleware/check-connection');
app.use(express.static('public'));

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//signup route
app.post('/signup', (req, res) => { 
  const { firstName, lastName, email } = req.body;

  if(!firstName || !lastName || !email){
    res.redirect('/');
    return;
  }

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  fetch('https://usX.api.mailchimp.com/3.0/lists/<YOUR_AUDIENCE_ID>', {
    method: 'POST',
    headers: {
      Authorization: 'auth <YOUR_API_KEY>'
    },
    body: postData
  })
    .then(res.statusCode === 200 ? res.redirect('/') : res.redirect('/'))
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on localhost:${PORT}`));

