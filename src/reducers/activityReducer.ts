
import { Activity } from "../types"

export type ActivityActions = 
    {type:'save-activity', payload: {  newAactivity: Activity}} |
    {type:'set-activeId', payload: {  id: Activity['id']}} 


type ActivityState = {
    activities : Activity[],
    activeId: Activity['id']
}



export const initialState : ActivityState = {
    activities: [],
    activeId: ''
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

    if(action.type === 'set-activeId'){
        //Este código
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state

} 