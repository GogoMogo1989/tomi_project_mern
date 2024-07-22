require('dotenv').config() //ez kell a fasznak igazából

const express = require('express')
const workoutRoutes = require('./routes/workouts')

//express app
const app  = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//listen for requiest
app.listen(process.env.PORT, () => {
    console.log('listen port 4000', process.env.PORT)
})

