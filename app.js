const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const swaggerDocument = require('./swagger.json');

const app = express();

const logFormat = process.env.PROJECT_MODE || 'tiny';

app.use(logger(logFormat));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
	res.json({ message: 'Hello world' });
});

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
	const { status = 500, message = 'server error' } = err;
	res.status(status).json({ message });
});

module.exports = app;
