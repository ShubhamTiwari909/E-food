import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import DataView from './Data'
import './Waaducss.css'
function Headlines() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/random?number=50&addRecipeNutrition=true&apiKey=3dc7df0bfb72463ba27f29bebaf5edf0")
            .then(response => {
                setRecipes(response.data.recipes)
                console.log(response.data.recipes)
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <Header />

            <h1 className="text-center text-3xl font-bold my-6 w-gradient-text w-bluepurple-gradient">Trending</h1>
            <DataView dataView={recipes} setRecipes={setRecipes} />

        </div>
    )
}

export default Headlines