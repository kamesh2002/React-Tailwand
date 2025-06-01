import React from 'react'
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';



const FruitsCard = ({ fruit }) => {
    const images = {
    '1': img1,
    '2': img2,
    '3': img3,
    '4': img4,
    '5': img5,
    '6': img6,
    '7': img7,

    // add all images here
  };
  return (
    <div className='rounded-2xl overflow-hidden shadow-xl transform group hover:scale-110 duration-100 relative'>
      <img
        src={images[fruit.image]}
        alt={fruit.name}
        className='w-full h-52 object-cover'
      />
      <div className='flex flex-col items-center my-1  space-y-1'>
        <span className=' text-slate-500 block'>{fruit.name}</span>
        <span className=' text-slate-500'>₹{fruit.price}</span>
          <span className=' text-lime-400 uppercase text-xs group-hover:visible invisible'>Add to Cart</span>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm ">1% off</span>
    </div>
  )
}

export default FruitsCard
