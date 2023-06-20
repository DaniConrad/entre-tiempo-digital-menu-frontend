import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from '../../services/services'
import Cards from '../Cards/Cards'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => { 
        getProducts(setProducts)
    }, [] );
    
    return(
        
    <div>
        <Cards />
        <ItemList products={products}/>
    </div>
        
    )
}

export default ItemListContainer;