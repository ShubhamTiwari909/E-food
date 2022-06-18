import React, { useState } from 'react';
import './Waaducss.css'
function Data(props) {
    const [summaryButton, setSummaryButton] = useState(false)
    const [stepsButton, setStepsButton] = useState(false);

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
                                        {result.dishTypes.map(type => {
                                            return (
                                                <div>
                                                    {type}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className={`text-slate-800 my-3`}>
                                        <h1 className="text-md lg:text-md text-slate-800 mt-4 mb-2 font-bold"
                                            onClick={() => setSummaryButton(!summaryButton)}>Summary</h1>
                                        <p dangerouslySetInnerHTML={{ __html: result.summary }}
                                            style={{ display: summaryButton ? "block" : "none" }}
                                        ></p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 my-2">
                                <h1 className="text-md lg:text-md text-slate-800 mt-4 mb-2 font-bold"
                                 onClick={() => setStepsButton(!stepsButton)}>Steps</h1>
                                {result.analyzedInstructions[0].steps.map(item => {
                                    return (
                                        <div className="text-sm lg:text-md">
                                            <p className="my-1 text-sm text-stone-800"
                                                style={{ display: stepsButton ? "block" : "none" }}
                                            >Step {item.number} - {item.step}</p>
                                        </div>
                                    )
                                })}
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
