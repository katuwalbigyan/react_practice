import React, { use, useEffect, useState } from 'react'

const LoadMore = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(false)

    async function fetchProduct(){
        try{
            setLoading(true)
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count *20
                }`
            )
            const result = await response.json()

            if(result && result.products && result.products.length){
                setProducts((prevData) => [...prevData, ...result.products])
            }

            setLoading(false)
            console.log(result)
        
        }
        catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchProduct()
    }, [count])

    useEffect(()=>{
        if(products && products.length === 100) setDisabled(true)
    }, [products])

    if(loading){
        return <div>Loading data ...</div>
    }

  return (
    <div id='container' className='min-h-screen w-screen p-6 bg-cyan-500'>
        <div className='grid grid-cols-4 p-4  gap-4'>
            {
                products && products.length ?
                products.map((item)=> <div key={item.id} className='border-2 border-black p-4 rounded-lg flex flex-col items-center bg-white'>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                </div>)
                : null
            }
        </div>
        <div className='flex justify-center'>
            <button 
            className='text-2xl border-2 border-black p-3 bg-violet-700 text-white rounded-3xl'
            onClick={() => setCount(count + 1)}
            disabled={disabled}
            >
                {
                    disabled ? "You have reached 100" : 'Show more'
                } 
            </button>
        </div>
    </div>
  )
}

export default LoadMore


