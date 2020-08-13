const express = require('express');
const app = express();
// const request = require('request');
// const bodyparser = require('body-parser');
// const path = require('path');

// const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
app.use(checkConnection);
