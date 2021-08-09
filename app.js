require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index')
const createRouter = require('./routes/createBookmark')
const deleteRouter = require('./routes/deleteBookmark')
const updateButtonRouter = require('./routes/update-button')
const updateRouter = require('./routes/update')
const commnetRouter = require('./routes/comment')

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));

app.use('/', indexRouter)
app.use('/', createRouter)
app.use('/', deleteRouter)
app.use('/', updateButtonRouter)
app.use('/', updateRouter)
app.use('/', commnetRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})