import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { albumsData } from '../assets/assets';
import Displayalbum from './Displayalbum';
import Displayhome from './Displayhome';
function Display() {
    const displayref=useRef();
    const location=useLocation();
    // console.log(location);
    const isalbum=location.pathname.includes("album");
    // console.log(isalbum);
    const albumid=isalbum?location.pathname.slice(-1):"";
    // console.log(albumid);
    const bgColor=albumsData[Number(albumid)].bgColor;
    // console.log(bgColor);
    useEffect(()=>{
        if(isalbum){
            displayref.current.style.background=`linear-gradient(${bgColor},#121212)`
        }else{
            displayref.current.style.background=`#121212`
        }
    })
    return (
        <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<Displayhome/>} />
                <Route path='/album/:id' element={<Displayalbum/>} />
            </Routes>
        </div>
    )
}

export default Display
