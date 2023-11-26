const express = require("express");
const Booking = require("../models/booking.js");
const router = express.Router();

router
  .get("/", async (req, res, next) => {
    try {
      console.log(req.query);
      const bookData = await Booking.findAll({where:{user_id:req.query.userID}})
      console.log('book',bookData);
      res.status(201).send(bookData);
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .get("/admin", async (req, res, next) => {
    try {
      const data = await Booking.findAll();
      res.status(201).send(data)
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const newBookings = Booking.create({
        booking_id: req.body.booking_id,
        user_id: req.body.user_id,
        room_id: req.body.room_id,
        start_date: req.body.start_date,
        end_data: req.body.end_data,
        total_price: req.body.total_price,
        special_requests: req.body.special_requests,
      });
      console.log(newBookings);
      res.status(201).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  });

module.exports = router;
