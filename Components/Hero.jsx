import React from 'react'
import download from '../images/download.png'
function Hero() {
    return (
        <div className='hero container'>
            <div className="hero__header">
                <h1 className='hero__title'>We Ensure better education for a better world</h1>
                <p className='hero__text'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className="btn">Explore more <img src={download} alt="" className='hero__img'/> </button>
            </div>
        </div>
    )
}

export default Hero