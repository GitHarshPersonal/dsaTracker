const express = require('express')
const User = require('../models/User')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const { findByIdAndUpdate } = require('../models/User');

// fetch questions GET /fetchques
router.get('/fetchques', fetchuser, async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user.id});
    const ques = user.questions;
    res.send(ques);
  } catch (error) {
    success = false;
    res.status(500).send({success, 'error': 'Internal Server Error'});
  }
})

// update note status PUT /updateques/:index1/:index2
router.put('/updateques/:index1/:index2', fetchuser, async (req,res)=>{
  const user = await User.findOne({_id: req.user.id});
  let newQues = user.questions;
  newQues[req.params.index1][req.params.index2].Done = !newQues[req.params.index1][req.params.index2].Done;
  User.findByIdAndUpdate(user._id, {questions: newQues}, {new: true},
    function(err, docs){
      if(err)
      {
        console.log(err);
      }
      else
      {
        res.send(docs);
      }
    })
})

module.exports = router