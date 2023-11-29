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
    console.log('data',Roomsdata);
    res.status(201).send(Roomsdata);
  } catch (error) {
    console.error(error);
    res.status(501).send(error);
  }
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
  });

module.exports = router;
