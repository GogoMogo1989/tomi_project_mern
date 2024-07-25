require('dotenv').config() //ez kell a fasznak igazából

const express = require('express')
const mongoose = require('mongoose')
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

//connect to db
mongoose.connect(process.env.MONGOOSE_URI)
    .then(()=>{
        //listen for requiest
        app.listen(process.env.PORT, () => {
            console.log('listen port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



