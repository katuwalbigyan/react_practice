import React, { useState } from 'react'

const Tabs = ({tabsContent, onChange}) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
  return (
    <div>
      <div id='heading' className='flex justify-center mt-5 gap-4'>
        {
            tabsContent.map((tabItem,index)=> 
                (<div className='border p-3 rounded-lg bg-violet-700 text-white font-bold' onClick={()=> handleOnClick(index)} key={tabItem.label}>
                    <span id='label'>{tabItem.label}</span>
                </div>)
            )
        }
      </div>
      <div id='content' className='text-red text-center'>
        {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}

export default Tabs
