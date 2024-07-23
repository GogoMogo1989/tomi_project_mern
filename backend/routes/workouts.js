const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutControllers')

const router = express.Router()

//Get all workout
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router