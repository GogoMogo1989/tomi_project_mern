const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    upadteWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()

//Get all workout
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout) 

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id', deleteWorkout)

//UPDATE a new workout
router.patch('/:id', upadteWorkout)

module.exports = router