import { useState, useEffect } from 'react'
import DataView from './Data'
import axios from 'axios'
import './Waaducss.css'
function Headlines() {
    const [headlines, setHeadlines] = useState([]);
    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?query=pasta&addRecipeInformation=true&number=2&apiKey=3dc7df0bfb72463ba27f29bebaf5edf0")
            .then(response => {
                setHeadlines(response.data.results)
                console.log(response.data.results)
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