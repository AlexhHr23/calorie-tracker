
import { Activity } from "../types"

export type ActivityActions = 
    {type:'save-activity', payload: {  newAactivity: Activity}} |
    {type:'set-activeId', payload: {  id: Activity['id']}} 


export type ActivityState = {
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

        let updatedActivities: Activity[] = []

        if(state.activeId){
            updatedActivities = state.activities.map(activity => activity.id === state.activeId 
                ? action.payload.newAactivity 
                : activity )

        } else {
            updatedActivities = [...state.activities, action.payload.newAactivity]
        }
        //Este código mnaeja la logica para actualizar el state
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === 'set-activeId'){
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state

} 