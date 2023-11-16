const express = require("express");
const Rooms = require("../models/rooms");
const router = express.Router();

router
  .get("/", async (req, res, next) => {
    try {
      // rooms로 get요청시 어떤걸 실행할지 적는 곳 (대충 데이터베이스에 있는 정보들 배열로 정렬해서 보내주려고 res뭐시기 쓸거같은데 까먹음;;)
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
