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
  .get("/myUse", async (req, res, next) => {
    try {
      console.log('zxcvasdf',req);
      const data = await Booking.findAll({
        where:{user_id:req.query.user_id}
      });``
      console.log(data);
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
  })
  .post('/newBook', (req,res,next)=>{
    try {
      console.log('newBook',req.body);
      Booking.create({
        user_id:req.body.user_id,
        room_id:req.body.room_id,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        total_price:req.body.price
      })
      res.status(201).end();
    } catch (error) {
      
    }
  });

module.exports = router;
