
import { Activity } from "../types"

export type ActivityActions = 
    {type:'save-activity', payload: {  newAactivity: Activity}}

type ActivityState = {
    activities : Activity[]
}



export const initialState : ActivityState = {
    activities: []
}

 
export const  activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) =>{

    if(action.type === 'save-activity') {
        //Este código mnaeja la logica para actualizar el state
        return {
            ...state,
            activities: [...state.activities, action.payload.newAactivity]
        }
    }

    return state

} 