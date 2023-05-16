import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from '../../services/services'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => { 
        getProducts(setProducts)
    }, [] );
    
    
    return(
    <div>
        <ItemList products={products}/>
    </div>
        
    )
}

export default ItemListContainer;