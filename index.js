require('dotenv').config();

const server = require('./server.js');

const port = process.env.PORT || 7777;
server.listen(port, () => console.log('main screen turn on'));