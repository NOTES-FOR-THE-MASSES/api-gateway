const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Enable cors
app.use(cors());

// Config body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup routes
// app.use('/auth', );