import { useState } from 'react'
import DataView from './Data'
import axios from 'axios'
import { FcSearch } from 'react-icons/fc'

function Search() {
    const [recipeData, setRecipeData] = useState([]);
    const [search, setSearch] = useState("");
    const [topic, setTopic] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const searchNews = () => {
        setTopic(search)
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${topic}&number=50&addRecipeNutrition=true&addRecipeInformation=true&apiKey=3dc7df0bfb72463ba27f29bebaf5edf0`)
            .then(response => {
                setRecipeData(response.data.results)
                console.log(response.data)
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="bg-slate-200 pt-10">
            <div className="flex mx-10 lg:mx-32">
                <input type="search" value={search} onChange={handleSearch}
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                <button onClick={searchNews}><FcSearch size="2rem" color="blue" /></button>
            </div>
            <div className="text-xs flex justify-center mt-3 mb-8">
                Double click the search icon to search the food item!!
            </div>

            <DataView dataView={recipeData} />

        </div>
    )
}

export default Search