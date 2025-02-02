const express = require('express')
const { mongoose } = require('mongoose');
const connectDB = require('./Database/config');
// const { connectDB } = require('./Database/config');

const app = express()
app.use(express.json());

const port = 3000

// Database connection
// connectDB();
connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})