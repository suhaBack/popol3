const express = require("express");
const Lodgings = require("../models/lodgings.js");
const router = express.Router();

router
  .get("/", async (req, res, next) => {
    try {
      // lodgings로 get요청시 어떤걸 실행할지 적는 곳 (대충 데이터베이스에 있는 정보들 배열로 정렬해서 보내주려고 res뭐시기 쓸거같은데 까먹음;;)
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const newLodgings = Lodgings.create({
        lodging_id: req.body.lodging_id,
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        price_range: req.body.price_range,
        type: req.body.type,
        amenities: req.body.amenities,
        check_in_time: req.body.check_in_time,
        check_out_time: req.body.check_out_time,
        rating: req.body.rating,
        review_count: req.body.review_count,
      }); //일단 Lodgings에 있는 데이터베이스 테이블을 쭉 나열했는데 몇몇개는 post에 필요한진 좀 의문임
      console.log(newLodgings);
      res.status(201).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  });

module.exports = router;
