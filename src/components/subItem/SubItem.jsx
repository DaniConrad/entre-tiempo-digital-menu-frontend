import React from 'react'

export const SubItem = ({item}) => {
  
  if (item.price <= 1) return null  

  return (
    <div className='d-flex flex-row justify-content-between'>
        <p className="sub-item text-light fw-semibold">{item.name}</p>
        <p className="sub-item text-light fw-semibold">${item.price}</p>
    </div>
  )
}
