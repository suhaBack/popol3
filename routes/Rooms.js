const express = require("express");
const { sequelize } = require("../models");
const Room = require("../models/room");
const router = express.Router();

router
.get("/payment", async (req, res, next) => {//
  try {
    console.log('test',req.query);
    // const Roomsdata = await sequelize.query(`SELECT * FROM innout.rooms where lodging_id=${req.query.lodging_id};`,{ type: QueryTypes.SELECT })
    const Roomsdata = await Room.findOne({
      where:{
        room_id:req.query.room_id,
      }
    })
    console.log('data',Roomsdata);
    res.status(201).send(Roomsdata);
  } catch (error) {
    console.error(error);
    res.status(501).send(error);
  }
})
.get("/detail", async (req, res, next) => {//
  try {
    console.log('test',req.query);
    // const Roomsdata = await sequelize.query(`SELECT * FROM innout.rooms where lodging_id=${req.query.lodging_id};`,{ type: QueryTypes.SELECT })
    const Roomsdata = await Room.findAll({
      where:{
        lodging_id:req.query.lodging_id,
      }
    })
    // console.log('data',Roomsdata);
    res.status(201).send(Roomsdata);
  } catch (error) {
    console.error(error);
    res.status(501).send(error);
  }
})
.get('/all',(req,res,next)=>{
  Room.findAll().then((response)=>{
    res.status(201).send(response)
  })
})
.post("/", async (req, res, next) => {
  try {
    const newRooms = Room.create({
      room_id: req.body.room_id,
      lodging_id: req.body.lodging_id,
      type: req.body.type,
      price: req.body.price,
      capacity: req.body.capacity,
      description: req.body.description,
    });
    console.log(newRooms);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
})
.patch('/detail',async(req,res,next)=>{
  // res.status(201).end()
  
    console.log(req.body);
    const ePrice = req.body.object
    const roomID = req.body.room_id
    console.log('-----------tests',ePrice);
    console.log('--------------id', req.body.room_id);
    await Room.update({
      price: ePrice,
      updated_at:new Date(),
    },{
      where:{room_id:roomID}
    }).then(()=>{
  res.status(201).end();
    })
     .catch ((error)=>{
    console.log(error);
    res.status(501).end();
  })
})
module.exports = router;
