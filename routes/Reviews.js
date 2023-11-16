const express = require("express");
const Review = require("../models/reviews");
const router = express.Router();

router
  .get("/", async (req, res, next) => {
    try {
      // reviews로 get요청시 어떤걸 실행할지 적는 곳 (대충 데이터베이스에 있는 정보들 배열로 정렬해서 보내주려고 res뭐시기 쓸거같은데 까먹음;;)
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const newReview = Review.create({
        review_id: req.body.review_id,
        user_id: req.body.user_id,
        lodging_id: req.body.lodging_id,
        rating: req.body.rating,
        content: req.body.content,
      });
      console.log(newReview);
      res.status(201).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  });

module.exports = router;
