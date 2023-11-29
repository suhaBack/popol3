const express = require("express");
const Lodging = require("../models/lodging.js");
const router = express.Router();

router
.get("/admin", async (req, res, next) => {
  try {
    //0모텔 1호텔 2펜션 3게스트 4글램핑
    const getlist = await Lodging.findAll()
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
    // console.log(getlist);
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
.post("/", async (req, res, next) => {
  try {
    const newLodgings = Lodging.create({
      name: req.body.name,
      location: req.body.location,
      location_info: req.body.location_info,
      imageURL: req.body.imageURL,
      description: req.body.description,
      type: req.body.type,
    }); //일단 Lodgings에 있는 데이터베이스 테이블을 쭉 나열했는데 몇몇개는 post에 필요한진 좀 의문임
    console.log(newLodgings);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

module.exports = router;
