import React from 'react'
import { Link } from 'react-router-dom';


function SliderCard(props) {
    return (
        <>
            <div className="flex w-full justify-around items-center bg-[#017173] border-2 border-[#017173]" >
                <div className="flex flex-col gap-8">
                    <p className='text-xl font-Rubik font-bold text-yellow-500'>EXTRA 50% OFF ON ALL PRODUCTS</p>
                    <h1 className='text-5xl font-Rubik text-white'>Building Your health <br /> Eating Organic</h1>
                    <button className='rounded-full bg-slate-300 w-fit p-1 pr-4 pl-4 font-bold border-2 shadow-2xl hover:bg-white hover:border-2 hover:border-gray-400 hover:text-green-800'><Link to={'/shop'}>BUY NOW</Link></button>
                </div>
                <div>
                    <img className='max-h-96' src={props.src} alt="vegitableImage" />
                </div>
            </div>
        </>
    )
}

export default SliderCard;
