import { useState } from "react"
import { categories } from "../data/categories"



export const Form = () => {

    const[activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })
    
    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg bg-white"
                    id="category"
                    value={activity.category}
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
                />
            </div>

            <input 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white
                cursor-pointer"
                value='Guardar comida o guardar ejercicio'
            />
        </form>
    )
}
