import React, { useState, useEffect } from 'react'

const ColorPicker = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")
    const [copied, setCopied] = useState(false)

    function generateRandomColor(length){
        return Math.floor(Math.random()*length)
    }

    function generateHex(){
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"

        for(let i = 0; i<6; i++){
            hexColor += hex[generateRandomColor(hex.length)]
        }
        setColor(hexColor)
    }

    function generateRgb(){
        const r = generateRandomColor(256)
        const g = generateRandomColor(256)
        const b = generateRandomColor(256)

        setColor(`rgb(${r} ${g} ${b})`);
    }

    useEffect(()=>{
        if(typeOfColor === 'hex') generateHex()
        else generateRgb()
    }, [typeOfColor])

    const handleCopy = async()=>{
        try{
            await navigator.clipboard.writeText(color)
            setCopied(true)
            setTimeout(()=>setCopied(false), 1000)
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='min-h-screen text-white text-center' style={{backgroundColor: color}}>
        <div>
            <button 
            className={`border-white border-2 mt-4 mr-3 p-4 rounded-xl cursor-pointer transition-colors ${
                typeOfColor === 'hex' ? 'bg-fuchsia-500 font-bold' : 'bg-violet-600'
            }`}
            onClick={()=> setTypeOfColor('hex')}

            >HEX Color
            </button>

            <button 
            className={`border-white border-2 mt-4 mr-3 p-4 rounded-xl cursor-pointer transition-colors ${
                typeOfColor === 'rgb' ? 'bg-fuchsia-500 font-bold' : 'bg-violet-600'
            }`}
            onClick={()=> setTypeOfColor('rgb')}
            >RGB Color 
            </button>

            <button 
            className='border-white border-2 mt-4 mr-3 p-4 rounded-xl bg-violet-600 cursor-pointer'
            onClick={typeOfColor === 'hex' ? generateHex : generateRgb}
            >Random Color
            </button>
        </div>
        <div className='flex flex-col justify-center items-center text-white text-2xl gap-10 mt-20'>
            <h1 className='font-bold text-8xl'>{typeOfColor === "hex" ? 'Hex Color' : "RGB Color"}</h1>

            <h2 onClick={handleCopy} className={`bg-black/40 px-6 py-2 rounded-lg font-mono tracking-wider cursor-pointer select-none transition-all active:scale-95 duration-200 ${
            copied ? 'border-green-400 border-2 text-green-400' : 'hover:bg-black/60'
          }`}
          title="Click to copy">{copied ? 'Copied' : color}</h2>
        </div>
    </div>
  )
}

export default ColorPicker


