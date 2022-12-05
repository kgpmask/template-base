const express = require('express');
const http = require('http');
const nunjucks = require('nunjucks');
const path = require('path');

const appHandler = require('./handler');

global.app = express();
nunjucks.configure(path.join(__dirname, '../templates'), {
	express: app,
	noCache: true
});
appHandler(app);

const server = http.createServer(app);
server.listen(9027, () => console.log('The server is active in http://localhost:9027'));

