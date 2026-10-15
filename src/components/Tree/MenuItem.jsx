import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({item}) => {

    const [currentChild, setCurrentChild] = useState({})

    function handleClick(currentLabel){
        setCurrentChild({
            ...currentChild,
            [currentLabel] : !currentChild[currentLabel]
        })
    }

  return (
    <li>
        <div className='flex gap-4'>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? (
                    <span onClick={()=> handleClick(item.label)}>
                        {
                            currentChild[item.label] ? '-' : '+'
                        }
                    </span>
                ) : null
            }
        </div>
        <div>
            {
                item && item.children && item.children.length > 0 && currentChild[item.label] ?
                <MenuList list={item.children} />
                : null
            }
        </div>
    </li>
  )
}

export default MenuItem
