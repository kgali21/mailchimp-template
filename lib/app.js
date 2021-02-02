const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
// const path = require('path');
// const request = require('request');


// const checkConnection = require('./middleware/check-connection');
// app.use(express.static('public'));

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//signup route
app.post('/signup', (req) => { 
  const { firstName, lastName, email } = req.body;

  if(!firstName || !lastName || !email){
    console.log('email exists');
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

  fetch('https://us7.api.mailchimp.com/3.0/lists/5a1cf723a0/members', {
    method: 'POST',
    headers: {
      Authorization: 'auth 022b0844bfa913050e984d57d8f31c1c-us7'
    },
    body: postData
  })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on localhost:${PORT}`));

