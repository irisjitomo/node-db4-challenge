const express = require('express')

const server = express();


server.use(json());

const port = 8000;

server.listen(port, console.log(`listening on port ${port}`))