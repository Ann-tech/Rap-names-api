const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England'
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois'
    },
    'unknown': {
        age: 0,
        birthName: 'Unknown',
        birthLocation: 'Unknown'
    }
}

app.get('/', (request, response) => {
  //respond with this file - look from current directory to serve file
  response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) response.json(rappers[rapperName])
  else response.json(rappers.unknown);
})

//Tell server where to listen and runs the function when server starts running
app.listen(PORT, () => {
  console.log(`The server is now running on ${PORT} you better go catch it!`)
})