import React from 'react'
import ItemBurger from '../Item/ItemBurger'
import ItemCookedPlate from '../Item/ItemCookedPlate'
import ItemDrinks from '../Item/ItemDrinks'
import ItemAppetizer from '../Item/ItemAppetizer'
import ItemDesserts from '../Item/ItemDesserts'

 const ItemList = ({products}) => {

  return (
    <div className='container'>
      <div>
        <h2 className='text-light text-center sub-title'>Hamburguesas</h2>
          <ItemBurger items={products.filter(product => product.category === "Hambuerguesas")} />
      </div>
      <div>
        <h2 className='text-light text-center sub-title'>Platos Calientes</h2>
        <ItemCookedPlate items={products.filter(product => product.category === "Platos Calientes")} />
      </div>
      <div>
        <h2 className='text-light text-center sub-title'>Bebidas</h2>
        <ItemDrinks items={products.filter(product => product.category === "Bebidas")} />
      </div>
      <div>
        <h2 className='text-light text-center sub-title'>Tapeos</h2>
        <ItemAppetizer items={products.filter(product => product.category === "Picadas")} />
      </div>
      <div>
        <h2 className='text-light text-center sub-title'>Postres</h2>
        <ItemDesserts items={products.filter(product => product.category === "Postres")} />
      </div>
    </div>
  )
}

export default ItemList;