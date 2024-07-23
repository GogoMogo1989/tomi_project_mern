import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutsForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
     const fetchWorkout = async () =>{
        const response = await fetch('/api/workouts')
        const json = await response.json()

        if(response.ok){
            setWorkouts(json)
        }
     }

     fetchWorkout()
    }, [])

    return (
        <div className="classname">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home