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

//백엔드 부분 해야 할 일 
// 1. db만들기
// 1-1 user - 아이디(PK) 비번 이름 회원등급(사업자:0, 일반회원:1(default), 관리자:2) 가입일 
// 1-2 room - 아이디(PK) 방이름 위치 가격 설명 예약여부 ...
// 2. 라우터 만들기 
// 2-1 로그인 회원가입 제품등록 