import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'
import '../index.css'
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/star-wars.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <>
    <div className='scrollbar flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item, index) => (
        <div
          key={index}
          className='scrollbar relative group border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800 overflow-hidden'
        >
          <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 w-full h-full object-cover opacity-0 group-hover:opacity-50' />
          <img src={item.image} alt={`production-house-${index}`} className='w-full h-full z-10 object-cover opacity-100' />
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductionHouse