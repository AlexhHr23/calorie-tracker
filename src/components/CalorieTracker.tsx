import { useMemo } from "react"
import type { Activity } from "../types"
import { CalorieDisplay } from "./CalorieDisplay"


type CalorieTrackerProps = {
    activities: Activity[]
}

export const CalorieTracker = ({activities}: CalorieTrackerProps) => {

    //CONTADORES
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? 
    total + activity.calories : total, 0) ,[activities])

    const caloriesTrained = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? 
    total + activity.calories : total, 0) ,[activities])

    const netCalories = useMemo(() => caloriesConsumed - caloriesTrained,[activities])

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
        

        <div className="flex flex-col items-center md:flex-row md: justify-between gap-5 mt-10">
           <CalorieDisplay
            calories={caloriesConsumed}
            text='Cosmidas'
           />
           <CalorieDisplay
            calories={caloriesTrained}
            text='Ejercicio'
           />
           <CalorieDisplay
            calories={netCalories}
            text='Diferencia'
           />
        </div>
    </>
  )
}
