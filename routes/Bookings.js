const express = require("express");
const Booking = require("../models/booking.js");
const router = express.Router();

router
.get('/admin',async (req,res,next)=>{
  try {
    const bookData = await Booking.findAll()
    // console.log(userData);
    res.status(201).send(bookData);
  } catch (err) {
    console.error(err);
    res.status(501).end();
  }
})
  .get("/", async (req, res, next) => {
    try {
      // Bookings로 get요청시 어떤걸 실행할지 적는 곳 (대충 데이터베이스에 있는 정보들 배열로 정렬해서 보내주려고 res뭐시기 쓸거같은데 까먹음;;)
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
        status: req.body.status,
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
