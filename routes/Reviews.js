const express = require("express");
const Review = require("../models/review");
const User = require("../models/user");
const router = express.Router();

router
  .get("/mypage", async (req, res, next) => {
    try {
      // console.log(req.query.userID);
      const user_id = req.query.userID
      console.log('ser',user_id);
      // const userCode = await User.findOne({where:{user_id:user_id}})
      // console.log('test',userCode.dataValues.user_ID);
      // const userID = userCode[0].user_id
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
  });

module.exports = router;
