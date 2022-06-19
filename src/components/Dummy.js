// import React, { useState, useEffect } from 'react'
// import Download from './download.jpg'
// import axios from 'axios'
// import Collapse from 'react-bootstrap/Collapse'
// import './Waaducss.css'


// function Dummy() {
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState({});
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos/')
//       .then((response) => {
//         setData(response.data)
//         console.log(response)
//       })
//       .catch((error) => console.log(error))
//   }, [])


//   return (
//     <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-6 lg:my-12">
//       {
//         data.map(item => {
//           return (
//             <div className="grid h-auto rounded overflow-hidden w-shadow-medium font-sans pb-5 lg:mx-7 my-16" key={item.id}>
//               <img className="w-full" src={Download} alt="No recipe cover pic" />
//               <div className="px-6 py-4 my-2">
//                 <div className={`font-bold text-sm lg:text-xl mb-5 `}>Title</div>
//                 <div className="text-gray-700">
//                   <h2 className="font-bold mb-2 text-md lg:text-lg">Dish Type</h2>
//                   <div className="flex space-x-4">
//                     One two three four five
//                   </div>
//                   <div className={`text-slate-800 mt-5`} >
//                     <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                       type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls="collapseExample">Summary</button>

//                     <div className="collapse" id={`collapse${item.id}`}>
//                       <div className="card card-body my-3">
//                         {item.title}
//                         {item.title}
//                         {item.title}
//                         {item.title}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-6 py-4 my-2">
//                 <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                   type="button" data-bs-toggle="collapse" data-bs-target={`#collapseSteps${item.id}`} 
//                   aria-expanded="false" aria-controls="collapseExample">Steps</button>

//                 <div className="collapse" id={`collapseSteps${item.id}`}>
//                   <div className="card card-body my-3">
//                     {item.title}
//                     {item.title}
//                     {item.title}
//                     {item.title}
//                   </div>
//                 </div>
//               </div>

//               <div className="px-6 py-4 my-2">
//               <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                       type="button" data-bs-toggle="collapse" data-bs-target={`#collapseIngredients${item.id}`} 
//                       aria-expanded="false" aria-controls="collapseExample">Ingredients</button>

//                     <div className="collapse" id={`collapseIngredients${item.id}`}>
//                       <div className="card card-body my-3">
//                         {item.title}
//                         {item.title}
//                         {item.title}
//                         {item.title}
//                       </div>
//                     </div>
//               </div>
//               <div className="self-end mt-5">
//                 <div className="px-6 py-4 bg-slate-900 rounded-md text-slate-200 text-sm">
//                   <p className="mb-1 p-1">Health Score - 89</p>
//                   <p className="mb-1 p-1">Preparing Time - 45 minutes</p>
//                   <p className="mb-1 p-1">Credit - credit</p>
//                 </div>
//                 <div className="px-6 mt-10 text-center">
//                   <span className="inline-block bg-gradient-to-r from-sky-400 to-indigo-900 text-slate-200 rounded-full px-3 py-2 text-sm font-semibold mr-2" >
//                     <a target="_blank" rel="noreferrer">Read More...</a>
//                   </span>
//                 </div>
//               </div>
//             </div>

//           )
//         })
//       }

//     </div>
//   )
// }

// export default Dummy