import React, { useState } from 'react'
import accordionData from './data'

const Accordian = () => {
    const [selected, setSelected] = useState([])

    function open(idx){
        if(selected.includes(idx)){
            setSelected(selected.filter((item)=> item !== idx))
        }
        else{
            setSelected([...selected, idx])
        }
    }

    return (
        <div className='bg-cyan-500 min-h-screen min-full'>
            <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
                {
                    accordionData.map((item) => {
                        const isOpen = selected.includes(item.id)
                        return (
                            <div key={item.id} 
                            className='bg-white p-4 rounded shadow-lg w-80 cursor-pointer'
                            onClick={()=> open(item.id)}>
                                <div className='flex justify-between items-center '>
                                    <h1 className='font-bold'>{item.title}</h1>
                                    <span className='text-xl font-bold'>{isOpen ? "-" : "+"}</span>
                                </div>
                                <div>
                                    { isOpen &&(
                                        <div className='mt-2 pt-2 border-t text-gray-600'>{item.desc}</div>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordian
