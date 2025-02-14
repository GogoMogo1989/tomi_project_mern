import {createContext, useReducer} from 'react'

export const WorkoutContext  = createContext()

export const workoutReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUT':
            return{
                workout: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workout: [action.payload, ...state.workout]
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })

    return(
        <WorkoutContext.Provider value={{state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}