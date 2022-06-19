import React from 'react';
import './Waaducss.css'
function Data(props) {
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
                                        {result.dishTypes.map((type, index) => {
                                            return (
                                                <div key={index}>
                                                    {type}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className={`text-slate-800 mt-5`} key={result.id}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                            type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${result.id}`} aria-expanded="false" aria-controls="collapseExample">
                                            Summary
                                        </button>
                                        <div className="collapse my-2" id={`collapse${result.id}`}>
                                            <div className="card card-body border-2 border-blue-500">
                                                <p className="text-xs lg:text-sm"
                                                    dangerouslySetInnerHTML={{ __html: result.summary }}
                                                ></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 my-2">
                                <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapseSteps${result.id}`} aria-expanded="false" aria-controls="collapseExample">Steps</button>
                                <div className="collapse my-2" id={`collapseSteps${result.id}`}>
                                    <div className="card card-body border-2 border-indigo-500">
                                        {result.analyzedInstructions.length > 0 ? result.analyzedInstructions[0].steps?.map((item, index) => {
                                            return (
                                                <div className="text-sm lg:text-md" key={index}>
                                                    <p className="my-1 text-sm text-stone-800"
                                                    >Step {item.number} - {item.step}</p>
                                                </div>
                                            )
                                        })
                                            :
                                            <p>No steps are there</p>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 my-2">
                                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapseIngredients${result.id}`} aria-expanded="false" aria-controls="collapseExample">Ingredients</button>
                                <div className="collapse my-2" id={`collapseIngredients${result.id}`}>
                                    <div className="card card-body border-2 border-green-500">
                                        {/* for random component */}
                                        {result.extendedIngredients && result.extendedIngredients.length > 0 ? result.extendedIngredients?.map((item, index) => {
                                            return (
                                                <div className="text-sm lg:text-md" key={index}>
                                                    <div className="my-1 text-sm text-stone-800"
                                                    >
                                                        <p className="font-bold">Ingredient {index + 1}</p>
                                                        <p>Ingredient - {item.name}</p>
                                                        <p>Instructions - {item.original}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            :
                                            <p></p>
                                        }

                                        {/* for search component */}
                                        {result.nutrition && result.nutrition.ingredients.length > 0 ? result.nutrition.ingredients?.map((item, index) => {
                                            return (
                                                <div className="text-sm lg:text-md" key={index}>
                                                    <div className="my-1 text-sm text-stone-800"
                                                    >
                                                        <p className="font-bold">Ingredient {index + 1}</p>
                                                        <p>Ingredient - {item.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            :
                                            <p></p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="self-end mt-5">
                                <div className="px-6 py-4 bg-slate-900 rounded-md text-slate-200 text-sm">
                                    <p className="mb-1 p-1">Health Score - {result.healthScore}</p>
                                    <p className="mb-1 p-1">Preparing Time - {result.readyInMinutes} minutes</p>
                                    <p className="mb-1 p-1">Credit - {result.creditsText}</p>
                                    <p className="mb-1 p-1">Vegetarian - {result.vegetarian.toString()}</p>
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
