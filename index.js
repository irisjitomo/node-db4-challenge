const express = require('express')
const recipeRouter = require('./router/recipeRouter')

const server = express();


server.use(express.json());
server.use('/api', recipeRouter);

server.get('/', (req, res) => {
    res.send('hello')
})

const port = 8000;

server.listen(port, console.log(`listening on port ${port}`))