import React from 'react'

interface Idcard{
    name:string,
    rollNo:number,
    center:string,
    camp:string,
    day:string,
    time:string,
}

function Card(props:Idcard) {
  return (
    <>
    <div className="rounded-2xl p-5 m-5 bg-slate-300 font-sans m-20 max-w-96 h-72 border-4 border-black">
    <img src="/g.s_logo.png" className='w-14 h-12'/>
        <h1 className="text-blue-900 font-bold">Name: <span className='text-black font-semibold'>{props.name}</span></h1>
        <h1 className="text-blue-900 font-bold">Roll No: <span className='text-black font-semibold'>{props.rollNo}</span></h1>
        <h1 className="text-blue-900 font-bold">Center: <span className='text-black font-semibold'>{props.center}</span></h1>
        <h1 className="text-blue-900 font-bold">Campus: <span className='text-black font-semibold'>{props.camp}</span></h1>
        <h1 className="text-blue-900 font-bold">Day: <span className='text-black font-semibold'>{props.day}</span></h1>
        <h1 className="text-blue-900 font-bold">Time: <span className='text-black font-semibold'>{props.time}</span></h1>
        <p className='bg-cyan-950 text-white'>batch1</p>
        <h1 className='text-blue-950 font-bold'>Q2</h1>
    </div>
    </>
  )
}

export default Card
