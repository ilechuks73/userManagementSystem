require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL , { useUnifiedTopology: true , useNewUrlParser: true} )

const db = mongoose.connection

db.on('error', (error)=>{console.log(error)})
db.once('open', ()=>{
  console.log('connected to db')
})


//MIDDLE WARES
app.use(cors())
app.use(express.json()) 

const auth_route = require('./routes/auth_route')
const user_route = require('./routes/user_route')
const admin_route = require('./routes/admin_route')
const activity_route = require('./routes/activity_route')

app.use('/api/auth', auth_route)
app.use('/api/user', user_route)
app.use('/api/admin', admin_route)
app.use('/api/activity', activity_route)
app.get('/', (req, res)=>{
  res.send('server_working')
  console.log(`requested at ${req.originalUrl}`)
})

app.listen( process.env.PORT , ()=>{
  console.log(`server started on http://localhost:${process.env.PORT}`) 
})