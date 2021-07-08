const router = require('express').Router()
const Activity = require('../models/log_model')
const pool = require('../helpers/postgresql_connection')

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
    // const new_activity = await new Activity({
    //   ...req.body
    // }).save()
    // res.status(201).json(new_activity)
    // 'insert into user(title, details, severity) values ($1, $2, $3) RETURNING *' 
    const pre_data = {
      name : 'dani',
      role: 'administrator'
    }
    const query = `INSERT INTO users.users ("name","role") VALUES ($1, $2) RETURNING *;`
    const rows = await pool.query(query, ['tessy', 'admin'])
    console.log(rows)
  } catch (err) {
    res.status(400).json({msg : err})
  }
  
})

module.exports = router