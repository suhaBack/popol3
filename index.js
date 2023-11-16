const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs')

const index = path.join(__dirname, 'client/build/index.html')
const port = process.env.NODE_ENV || '8080';

app.set('view engine', 'html');


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));  

app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/upload", express.static("upload"));

app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get('/', (req,res) => {
  res.sendFile(index)
});

app.listen(port, function () {
  console.log(`${port}에서 대기중`)
}); 