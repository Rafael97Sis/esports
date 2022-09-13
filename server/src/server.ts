import express from 'express';

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 10, name: 'rafael' },
    { id: 20, name: ' Ana' },
    { id: 25, name: ' Ana Paula' },
  ])
})

// porta 
app.listen(3030);
