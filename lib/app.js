const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//signup route
app.post('/signup', (req) => { 
  

  const data = {
    members: [{
      email_address: '',
      status: '',
      merge_fields: {
        FNAME: '',
        LNAME: ''
      }
    }]
  };

  const postData = JSON.stringify(data);
  console.log('postdata ====> ', postData);

  fetch('http://us7.api.mailchimp.com/3.0/lists/5a1cf723a0/', {
    method: 'POST',
    headers: {
      Authorization: 'auth 022b0844bfa913050e984d57d8f31c1c-us7'
    },
    body: postData
  })
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on localhost:${PORT}`));

