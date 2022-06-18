import { useState, useEffect } from 'react'
import DataView from './Data'
import axios from 'axios'
import './Waaducss.css'
function Headlines() {
    const [headlines, setHeadlines] = useState([]);
    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/random?number=100&addRecipeNutrition=true&apiKey=3dc7df0bfb72463ba27f29bebaf5edf0")
            .then(response => {
                setHeadlines(response.data.recipes)
                console.log(response.data.recipes)
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-6 w-gradient-text w-bluepurple-gradient">Trending</h1>
            <DataView dataView={headlines} />
        </div>
    )
}

export default Headlines