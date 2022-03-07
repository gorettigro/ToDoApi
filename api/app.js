//Create server Express
const express = require('express');
const cors = require('cors');

const { todoRouter } = require('./routes/todo');

const app = express();

app.use(express.urlencoded())
app.use(express.json())

app.use(cors())

app.use('/api/v1/todo', todoRouter)


app.listen(3800, () => {
    console.log('To Do API running!');
})
