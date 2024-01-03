const express = require("express");
const Review = require("../models/review");
const express = require("express");
const { sequelize } = require("../models");
const Review = require("../models/review");
const router = express.Router();

router

  .get("/mypage", async (req, res, next) => {
    try {
      const user_id = req.query.userID
      console.log('ser',user_id);
      const getReview = await Review.findAll({
        where:{user_id:user_id}
      })
      console.log("review",getReview);
      res.status(201).send(getReview);
    } catch (error) {
      console.error(error);
      next(error);
    }
  })

  .get("/detail", async (req, res, next) => {
    try {
      console.log('ser',user_id);
      const ReviewData = await Review.findAll({
        where:{
          rating:req.query.rating
        }
      })
      console.log("review",ReviewData);
      res.status(201).send(ReviewData);
    } catch (error) {
      console.error(error);
      next(error);
    }
  })

  .post("/", async (req, res, next) => {
    try {
      console.log('server',req.body);
      const newReview = Review.create({
        user_id: req.body.user_id,
        lodging_id: 3,
        rating: req.body.rating,
        content: req.body.content,
      });
      console.log(newReview);
      res.status(201).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  })

module.exports = router;
