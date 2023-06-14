import React from 'react'
import Item from '../Item/Item'
import { mainItems } from '../mainItems/mainItems'

 const ItemList = ({products}) => {

  return (
    <div className='container'>
      { 
        mainItems.map(mainItem => 
          <div key={ mainItem.title }>
            <h2 className='text-light text-center sub-title'>{mainItem.title}</h2>
            <Item items={ products.filter(product => product.category === mainItem.category)} subData = { mainItem.items } />
          </div>) 
      }

       {/* <div>
        <h2 className='text-light text-center sub-title'>Tapeos</h2>
        <ItemAppetizer items={products.filter(product => product.category === "Picadas")} />
      </div>

      <div>
        <h2 className='text-light text-center sub-title'>Hamburguesas</h2>
          <ItemBurger items={products.filter(product => product.category === "Hambuerguesas")} />
      </div>

      <div>
        <h2 className='text-light text-center sub-title'>Platos Calientes</h2>
        <ItemCookedPlate items={products.filter(product => product.category === "Platos Calientes")} />
      </div> */}

      {/* <div>
        <h2 className='text-light text-center sub-title'>Pizzas</h2>
        <ItemPizza items={products.filter(product => product.category === "Pizza")} />
      </div> */}

      {/*<div>
        <h2 className='text-light text-center sub-title'>Postres</h2>
        <ItemDesserts items={products.filter(product => product.category === "Postres")} />
      </div>
      <div>
        <h2 className='text-light text-center sub-title'>Empanadas</h2>
        <ItemEmpanadas items={products.filter(product => product.category === "empanada")} />
      </div> */}
    </div>
  )
}

export default ItemList;