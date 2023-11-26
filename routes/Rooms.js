const express = require("express");
const Rooms = require("../models/room");
const router = express.Router();

router
  .get("/detail", async (req, res, next) => {//
    try {
      const Roomsdata = Rooms.findAll({
        where:{
          lodging_id:req.query.lodging_id,
        }
      });
      console.log(Roomsdata);
      res.status(201).send(Roomsdata);
    } catch (error) {
      console.error(error);
      res.status(501).send(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const newRooms = Rooms.create({
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
