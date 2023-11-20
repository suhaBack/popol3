const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs');

const index = path.join(__dirname, 'client/build/index.html')
const port = process.env.NODE_ENV || '8080';

const userRouter = require('./routes/User'); //라우터폴더 안에 User.js를 요청하는 상수(이하 동일)
const roomsRouter = require('./routes/Rooms');
// const reviewsRouter = require('./routes/Riviews');
// const lodgingsRouter = require('./routes/Lodgings');
// const bookingsRouter = require('./routes/Bookings');

const { sequelize } = require('./models/index'); // 라우터 폴터 안에 index.js를 요청하는 상수 (index.js에 있는 상수sequelize만 지정)

app.set('view engine', 'html'); //보이는 부분이 html

app.use(express.json());

app.use(morgan('dev')); //미들웨어 사용선언?(app.use = 항상 실행, morgan = log를 상세히 보여줌(dev버전))
app.use(express.urlencoded({extended:false})); //express자체 서버 설정

app.use(express.static(path.join(__dirname, 'client/build'))); //express.static=기본경로

app.use('/user', userRouter);
app.use('/rooms', roomsRouter);
// app.use('/reviews', reviewsRouter);
// app.use('/lodgings', lodgingsRouter);
app.use('/rooms', roomsRouter);
// app.use('/bookings', bookingsRouter);


var cors = require('cors');
app.use(cors());

app.get('/', (req,res) => {
  res.sendFile(index)
});

app.get('*', (req,res) => {
  res.sendFile(index)
});

sequelize.sync({ force: false })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, function () {
  console.log(`${port}에서 대기중`)
}); 