import React from 'react'
import MenuList from './MenuList'

const Tree = ({menus = []}) => {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  )
}

export default Tree
