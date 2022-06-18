import React, { useState } from 'react';
import './Waaducss.css'
function Data(props) {
    const [summaryButton, setSummaryButton] = useState(false)
    const [stepsButton, setStepsButton] = useState(false);
    const [ingredientButton, setIngredientButton] = useState(false)

    return (
        <div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-6 lg:my-12">
                {props.dataView?.map(result => {
                    return (
                        <div key={result.id} className="grid rounded overflow-hidden w-shadow-medium font-sans pb-5 lg:mx-7 my-16">
                            <img className="w-full" src={result.image} alt="No recipe cover pic" />
                            <div className="px-6 py-4 my-2">
                                <div className="font-bold text-sm lg:text-xl mb-5">{result.title}</div>
                                <div className="text-gray-700">
                                    <h2 className="font-bold mb-2 text-md lg:text-lg">Dish Type</h2>
                                    <div className="flex space-x-4">
                                        {result.dishTypes.map((type,index) => {
                                            return (
                                                <div key={index}>
                                                    {type}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className={`text-slate-800 mt-5`} key={result.id}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                            onClick={() => setSummaryButton(!summaryButton)} >Summary</button>
                                        <p className="text-xs lg:text-sm"
                                        dangerouslySetInnerHTML={{ __html: result.summary }}
                                            style={{ display: summaryButton ? "block" : "none" }}
                                        ></p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 my-2">
                                <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                 onClick={() => setStepsButton(!stepsButton)} key={result.id}>Steps</button>
                                {result.analyzedInstructions.length > 0 ? result.analyzedInstructions[0].steps?.map((item,index) => {
                                    return (
                                        <div className="text-sm lg:text-md" key={index}>
                                            <p className="my-1 text-sm text-stone-800"
                                                style={{ display: stepsButton ? "block" : "none" }}
                                            >Step {item.number} - {item.step}</p>
                                        </div>
                                    )
                                })
                            :
                            <p>No steps are there</p>}
                            </div>

                            <div className="px-6 py-4 my-2">
                                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                 onClick={() => setIngredientButton(!ingredientButton)} key={result.id}>Ingredients</button>
                                {result.extendedIngredients.length > 0 ? result.extendedIngredients?.map((item,index) => {
                                    return (
                                        <div className="text-sm lg:text-md" key={index}>
                                            <div className="my-1 text-sm text-stone-800"
                                                style={{ display: ingredientButton ? "block" : "none" }}
                                            >
                                                <p>Ingredient - {item.name}</p>
                                                <p>Instructions - {item.original}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            :
                            <p>No ingredients are there</p>}
                            </div>
                            <div className="self-end mt-5">
                                <div className="px-6 py-4 bg-slate-900 rounded-md text-slate-200 text-sm">
                                    <p className="mb-1 p-1">Health Score - {result.healthScore}</p>
                                    <p className="mb-1 p-1">Preparing Time - {result.readyInMinutes} minutes</p>
                                    <p className="mb-1 p-1">Credit - {result.creditsText}</p>
                                </div>
                                <div className="px-6 mt-10 text-center">
                                    <span className="inline-block bg-gradient-to-r from-sky-400 to-indigo-900 text-slate-200 rounded-full px-3 py-2 text-sm font-semibold mr-2" >
                                        <a href={result.sourceUrl} target="_blank" rel="noreferrer">Read More...</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Data
