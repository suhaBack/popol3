const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const fs = require('fs')

const index = path.join(__dirname, 'client/build/index.html') //index = 빌드된 스태틱html을 보여주겠다
const port = process.env.NODE_ENV || '8080'; //port = 왼쪽에 데이터 없으면 포트는 8080이다.(앵간하면 8080따라감)

const userRouter = require('./routes/User'); //라우터폴더 안에 User.js를 요청하는 상수(이하 동일)
const roomsRouter = require('./routes/Rooms');
const reviewsRouter = require('./routes/Riviews');
const lodgingsRouter = require('./routes/Lodgings');
const bookingsRouter = require('./routes/Bookings');

const { sequelize } = require('./models'); // 라우터 폴터 안에 index.js를 요청하는 상수

app.set('view engine', 'html'); //html로 작동한다 선언


app.use(morgan('dev')); //미들웨어 사용선언?
app.use(express.urlencoded({extended:false})); //무언가 사용하겠다 선언? 

app.use(express.static(path.join(__dirname, 'client/build'))); //무언가 사용하겠다 선언? 2

const makeFolder = (dir)=>{
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}//현제 폴더에 "upload"폴더가 없는 경우 폴더를 생성해주는 코드
makeFolder("upload")

const multer = require('multer');
//이미지를 저장하고 불러오기 위한 코드
const upload = multer({ 
    storage: multer.diskStorage({ //저장 설정
        destination: function(req, file, cb) { // 어디에 저장할거냐? upload/
            cb(null, 'upload/') // upload폴더 밑에
        },
        filename: function(req, file, cb){ // 어떤 이름으로 저장할거야?
            cb(null, file.originalname) // 업로드한 file의 오리지널 이름으로 저장하겠다.
        }
    })
})

app.use("/upload", express.static("upload")); // upload경로로 요쳥된 파일들을 upload디렉토리에서 제공되도록 설정

app.use(express.json()); //익스프레스 제이슨 사용할거임

var cors = require('cors'); //콜스 쓸거임(이거 없으면 리액트가 데이터베이스에서 조회 못해올때가 있음)
app.use(cors()); //콜스 사용할 거임

app.post('/image', upload.single('image'), (req, res)=>{ 
  const file = req.file;  //html에서 받은 파일을 file에 저장
  console.log("post(/image) file:",file);
  res.send({ 
      imageUrl: "http://localhost:8000/"+file.destination+file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
}) // image경로로 post요쳥을 하면 실행

// app.use('/user', userRouter);
app.use('/user', userRouter); ///user 경로로 들어오는 요청은 userRouter라는 라우터를 사용할거임(이하 동일)
app.use('/rooms', roomsRouter);
app.use('/reviews', reviewsRouter);
app.use('/lodgings', lodgingsRouter);
app.use('/bookings', bookingsRouter);


app.get('/', (req,res) => {
  res.sendFile(index) //빌드폴더 안에있는 index.html을 보여 줄거임
}); //첫화면에 어떤걸 보내줄지 결정

sequelize.sync({ force: false })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  }); //데이터베이스랑 연결시도

app.get('*',(req,res,next)=>{
  res.sendFile(index)
}) //라우터를 통해 어떤화면을 보여줄지는 리액트가 정하도록 설정


app.listen(port, function () {
  console.log(`${port}에서 대기중`) //실행됐을때 멘트설정
});  //8080번 포트로 실행할거임