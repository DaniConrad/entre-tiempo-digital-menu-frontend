import React from 'react'

export const SubItemBurger = ({item}) => {
console.log("🚀 ~ file: SubItemBurger.jsx:4 ~ SubItemBurger ~ item:", item)

    if (item.price <= 1) {
        return null
    }

  return (
    <div className='d-flex flex-row justify-content-between'>
        <h2 className="text-light">{item.name}</h2>
        <h2 className="text-light">${item.price}</h2>
    </div>
  )
}
