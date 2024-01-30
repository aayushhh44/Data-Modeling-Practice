const express = require('express');
const app = express();
const dotenv = require('dotenv');

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

app.get('/aayush', (req,res) =>{
    res.send('Aayush is hero')
})