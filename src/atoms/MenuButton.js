import React from 'react'

const MenuButton = ({btnLabel, mainAction}) => {
    console.log(mainAction)
  return (
    <button onPress={() => {mainAction()}}>{btnLabel}</button>
  )
}

export default MenuButton