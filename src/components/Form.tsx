import { useState, ChangeEvent, FormEvent, Dispatch, useEffect} from "react"
import { v4 as uuid4} from 'uuid'
import { Activity } from "../types"
import { categories } from "../data/categories"
import { ActivityActions, ActivityState } from "../reducers/activityReducer"


type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

const initialState: Activity =  {
        id: uuid4(),
        category: 1,
        name: '',
        calories: 0
    }


export const Form = ({dispatch, state} : FormProps) => {

    const[activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.activeId) {
            const selectActvity = state.activities.filter(stateActivity  => stateActivity.id === state.activeId)[0]
            setActivity(selectActvity)
        }
    }, [state.activeId])

    

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id)


        setActivity({
            ...activity,
            [e.target.id]: isNumberField ?  +e.target.value:  e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        dispatch({ type: 'save-activity', payload: {newAactivity: activity}})

        setActivity({
            ...initialState,
            id: uuid4()
        })
    }

    const isValidActivity = () => {
       const {name, calories } = activity
       return name.trim() !== '' && calories > 0
    }


    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>  
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Comida:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Eje. Comida, juego de naranja, pesas, bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorias. eje. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white
                cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar comida' : 'Guadar ekercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}
