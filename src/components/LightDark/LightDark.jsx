import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const LightDark = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggle(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log(theme)

  return (
    <div className={theme}>
      <div className='min-h-screen flex gap-10 flex-col justify-center items-center bg-slate-100 text-gray-800
      dark:bg-cyan-950 dark:text-white
      '>

        <h1 className='text-7xl font-bold'>Hello World</h1>

        <button 
        className='text-2xl border p-3 rounded-2xl bg-gray-700 text-white active:bg-gray-500 active:scale-95 hover:bg-gray-500 dark:bg-cyan-600 dark:text-white dark:hover:bg-cyan-500 dark:hover:scale-95'
        onClick={handleToggle}>Change Theme</button>

      </div>
    </div>
  )
}

export default LightDark
