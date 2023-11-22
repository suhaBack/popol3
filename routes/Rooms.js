const express = require("express");
const Rooms = require("../models/room");
const router = express.Router();

router
  .get("/", async (req, res, next) => {//
    try {
      const Roomsdata = Rooms.findAll({
        room_id: req.body.room_id,
        lodging_id: req.body.lodging_id,
        type: req.body.type,
        price: req.body.price,
        capacity: req.body.capacity,
        description: req.body.description,
      });
      return Roomsdata
    } catch (error) {
      console.error(error);
      next(error);
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
