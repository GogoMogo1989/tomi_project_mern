import {useState} from 'react'

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added', json)
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exersize Title</label>
            <input 
                type="text" 
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in kg):</label>
            <input 
                type="text" 
                onChange={(e)=> setLoad(e.target.value)}
                value={load}
            />

            <label>Reps</label>
            <input 
                type="number" 
                onChange={(e)=> setReps(e.target.value)}
                value={reps}
            />
 
            <button>Added</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutForm