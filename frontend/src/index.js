const express = require('express');
const app = express();
const port = process.env.FRT_PORT;
const axios = require('axios');
const msPort = require('./config/ipservices')

app.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    
    res.send(`${process.env.NAME}! ${response.data.userId}`);

  })
  .catch(function (error) {
    // handle error
    res.send(`${process.env.NAME}! ${error}`);
    
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});