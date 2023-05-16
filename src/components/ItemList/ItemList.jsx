import React from 'react'
import ItemBurger from '../Item/ItemBurger'
import ItemCookedPlate from '../Item/ItemCookedPlate'

 const ItemList = ({products}) => {

  return (
    <div className='container'>
      <div>
        <h2 className='text-light text-center sub-title'>Hamburguesas</h2>
          <ItemBurger items={products.filter(product => product.category === "Hambuerguesas")} />
      </div>
      <div>
      <h2 className='text-light text-center sub-title'>Platos Calientes</h2>
        {/* {products.filter(product => product.category === "Platos Calientes").map((product) => <ItemCookedPlate product={product} />)} */}
      </div>
    </div>
  )
}

export default ItemList;