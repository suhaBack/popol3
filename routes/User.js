const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/',async (req,res,next)=>{
  try {
    // console.log('test',req.body.id);
    const id = req.body.id; //사용자가 로그인창에 입력한 id
    const pwd = req.body.pwd; //사용자가 로그인창에 입력한 pwd
    const Ck_pwd = await User.findOne({
      where:{user_id: id}
    }) //User라는 데이터베이스 테이블중 사용자가 입력한 id가 데이터베이스에 user_id테이블에 있는지 확인후 있으면 id에 포함된 정보 배열로 가져옴
    // console.log('test',Ck_pwd.pwd); //db에서 로그인한 id랑 같은 데이터중 비밀번호 가져오기 => asd7584
    if (Ck_pwd === null) {
      //Ck_pwd = null 은 db에서 아이디로 조회한 값이 없다는 것
      return res.status(400).end(); //데이터가 없을경우 상태메세지 400을 보내고 종료
    }else{
      if (pwd == Ck_pwd.pwd) {
        console.log(Ck_pwd);
        return res.status(201).json(Ck_pwd); //데어터가 있을 경우 상태메세지 201을 보내고 입력한 id와 관련된 정보 배열로 전송
      }else{
        return res.status(400).json(Ck_pwd); //데어터가 없을 경우 상태메세지 400을 보내고 입력한 id와 관련된 정보 배열로 전송
      }
    }
  } catch (error) {
    //에러 발생시 어떤일이 일어날지 적는 장소
  }
})

module.exports = router;