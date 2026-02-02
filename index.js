const express = require('express');
const { connectToMongoDB } = require('./connect');

const app = express();
const PORT = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/College-ERP").then(() =>
  console.log("MongoDB connected successfully"),
);

app.get('/', (req,res) =>{
    res.send('Hello from server...')
})

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))