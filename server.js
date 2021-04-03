'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})