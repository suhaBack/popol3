const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/',async (req,res,next)=>{// /user/
  try {
    console.log(req);
    console.log(res);
  } catch (err) {
    
  }
}).get('/', async (req,res,next)=>{
  try {
    const user_DB = await User.findAll({
      where: {
        id : req.query.user
      }
    })
    console.log('userDB',user_DB);
    res.status(201).json(user_DB);
  } catch (error) {
    next(error);
  }
})

module.exports = router;