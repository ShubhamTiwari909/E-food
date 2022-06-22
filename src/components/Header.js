import React,{useState} from 'react'
import { Carousel } from 'react-bootstrap'
import Header1 from './images/food-13528.png'
import Header2 from './images/food-13563.png'
import Header3 from './images/food-13567.png'

import './Waaducss.css'
function Header() {

    const [opacity, setOpacity] = useState("opacity-100");
    const changeOnScroll = () => {
        window.scrollY > 200 ? setOpacity("opacity-50") : setOpacity("opacity-100")
    }
    window.addEventListener("scroll", changeOnScroll , false);
    return (
        <div>
            <div className={`flex justify-content-center my-3 h-60 ${opacity}`}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-96"
                            src={Header1}
                            alt="Header 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-96"
                            src={Header2}
                            alt="Header 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-96"
                            src={Header3}
                            alt="Header 3"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1 className="w-purple-claymorphism mx-4 md:mx-8 my-20 w-gradient-text bg-gradient-to-r from-indigo-500 via-purple-700 to-indigo-900 font-bold">
                Welcome to E-Recipe finder where you can get the information about your favourite food item like how to cook it step by step,
                Ingredients required to cook and summary of the food, whether it is veg or non-veg , healthy or non-healthy, preparation time etc.
            </h1>
        </div>

    )
}

export default Header