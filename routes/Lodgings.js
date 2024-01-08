const express = require("express");
const Lodging = require("../models/lodging.js");
const { sequelize } = require("../models/index.js");
const { QueryTypes } = require("sequelize");
const router = express.Router();

router
.get('/Sltype', async (req,res,next)=>{
  try {
    console.log('type',req.query);
    const query = "SELECT A.lodging_id, A.name, A.rating, A.review_count,A.image_u_r_l AS imageURL, A.location, B.type FROM lodgings A INNER JOIN rooms B ON A.lodging_id = B.lodging_id WHERE B.type = ? AND A.type = ?;"
    const result = await sequelize.query(
      query, 
      {
        type:QueryTypes.SELECT,
          replacements:[req.query.type, req.query.loging_type]
      }
    )
    console.log("성공");
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(501).end();
  }
})
.get("/payment", async (req, res, next) => {
  try {
    //0모텔 1호텔 2펜션 3게스트 4글램핑
    const getlist = await Lodging.findOne({
      where:{lodging_id:req.query.lodging_id}
    })
    // console.log(getlist);
    res.status(201).send(getlist);
  } catch (error) {
    console.error(error);
    next(error);
  }
})
.get("/detail", async (req, res, next) => {
  try {
    //0모텔 1호텔 2펜션 3게스트 4글램핑
    console.log('rooms',req.query.lodging_id);
    const getlist = await Lodging.findOne({
      where:{
        lodging_id:req.query.lodging_id,
      }
    })
    console.log('lodging',getlist);
    res.status(201).send(getlist);
  } catch (error) {
    console.error(error);
    next(error);
  }
})
.get("/", async (req, res, next) => {
  try {
    //0모텔 1호텔 2펜션 3게스트 4글램핑
    const getlist = await Lodging.findAll({
      where:{
        type:req.query.type,
      }
    })
    // console.log(getlist);
    res.status(201).send(getlist);
  } catch (error) {
    console.error(error);
    next(error);
  }
})
.get('/all',async(req,res,next)=>{
  Lodging.findAll().then((response)=>{
    res.status(201).send(response)
  })
})
.get("/add", async (req, res, next) => {
  try {
    //0모텔 1호텔 2펜션 3게스트 4글램핑
    const getlist = await Lodging.findOne({
      where:{
        name:req.query.name,
      }
    })
    // console.log(getlist);
    res.status(201).send(getlist);
  } catch (error) {
    console.error(error);
    next(error);
  }
})
.post("/", async (req, res, next) => {
  try {
    // {
    //   name: '서정아트2차',
    //   location: '정암로 55',
    //   imageUrl: 'http://localhost:8080/upload/ì\x8A¤í\x81¬ë¦°ì\x83· 2023-06-04 163348.png',
    //   type: '3',
    //   description: '팀장 집입니다.'
    // }
    console.log(req.body);
    const newLodgings = Lodging.create({
      name: req.body.name,
      location: req.body.location,
      imageURL: req.body.imageUrl,
      description: req.body.description,
      type: req.body.type,
    }); //일단 Lodgings에 있는 데이터베이스 테이블을 쭉 나열했는데 몇몇개는 post에 필요한진 좀 의문임
    console.log(newLodgings);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
})
.patch('/detail',async(req,res,next)=>{
  console.log('lod',req.body);
  const eName = req.body.fc1
  const eAdress = req.body.fc2
  const eDescription = req.body.fc3
  const eFile = req.body.fc4
  const lodID = req.body.Lid
  await Lodging.update({
    name:eName,
    location:eAdress,
    description:eDescription,
    updated_at:new Date(),
  },{
    where:{lodging_id:lodID}
  })
  .then(()=>{
      res.status(201).end();
    })
  .catch ((error)=>{
    console.log(error);
    res.status(501).end();
  })
  } 
)

module.exports = router;
