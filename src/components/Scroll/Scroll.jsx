import React, { useState,useEffect } from 'react'

const Scroll = ({url}) => {

    const [data, setData] = useState([])
    const [percent, setPercent] = useState(0)

    const fetchData = async (getUrl)=>{
        const respone = await fetch(getUrl);
        const data = await respone.json()

        if(data && data.products && data.products.length){
            setData(data.products)
        }
    }

    function handleScrollPercent(){
        // console.log('-----------------------')
        // console.log(`Scroll y : ${window.scrollY}`)
        // console.log(`Full container : ${document.documentElement.scrollHeight}`)
        // console.log(`Visible Height: ${window.innerHeight}`)

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        if(scrollableHeight <=0){
            setPercent(0)
            return
        }
        const scrolled = window.scrollY
        const percent = (scrolled/scrollableHeight)*100
        setPercent(Math.min(100, Math.max(0, percent)))
    }

    useEffect(()=>{
        fetchData(url)
    }, [url])

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercent)
        return()=>{
            window.removeEventListener('scroll', handleScrollPercent)
        }
    }, [])

  return (
    <div>
      <div>
        <div className='fixed top-0 left-0 w-full h-2 bg-gray-300 z-50'>
            <div className='h-full bg-blue-500 transition-all duration-300'
            style={{width:`${percent}%`}}
            />
        </div>
        <h1 className='text-3xl text-center underline font-bold mt-2 mb-5'>Scroll Indicator</h1>
        <div className='whitespace-break-spaces space-y-8'>
            {
                data && data.length ? 
                [...data, ...data, ...data].map((item)=>(
                   <div key={item.id}> 
                    <h1 className='text-2xl font-light text-center'>{item.title}</h1>
                   </div>
                ))
                : null
            }
        </div>
      </div>
    </div>
  )
}

export default Scroll
