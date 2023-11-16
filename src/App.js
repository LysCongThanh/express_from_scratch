const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(33, () => {});