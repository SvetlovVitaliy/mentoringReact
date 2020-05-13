const express = require('express');
const app = express();

app.get('/homeThere', function (request, response) {
  response.send('Hello there, from Express')
})

app.listen(1337, function () {
  console.log('Listening at Port 1337');
  
})