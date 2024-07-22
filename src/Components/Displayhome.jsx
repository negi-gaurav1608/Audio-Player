import React from 'react'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import Navbar from './Navbar'
import Songitem from './Songitem'
function Displayhome() {
    return (
        <>
            <Navbar/>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>
                    Featured Charts
                </h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((items,index)=>(<Albumitem key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
                </div>
                
            </div>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>
                    Today's biggest hits
                </h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
                </div>
                
            </div>
        </>
    )
}

export default Displayhome
