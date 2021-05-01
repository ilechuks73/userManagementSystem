const router = require('express').Router()
const Activity = require('../models/activity_model')

router.get('/', async(req, res)=>{
  const activities = await Activity.find({})
  if(activities){
    res.status(200).json(activities)
  }
  else{
    res.status(200).json({msg: "No activities to show"})
  }
})

router.post('/', async (req,res)=>{
  try{
    const new_activity = await new Activity({
      ...req.body
    }).save()
    res.status(201).json(new_activity)
  } catch (err) {
    res.status(400).json({msg : err})
  }
  
})

module.exports = router