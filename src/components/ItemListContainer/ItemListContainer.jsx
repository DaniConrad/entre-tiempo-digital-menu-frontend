import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from '../../services/services'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => { 
        getProducts(setProducts)
    }, [] );

    // if (products.length > 1) {
    //     const categorys = ['Gaseosas','Vino tinto']

    //     for (let i = 0; i < categorys.length; i++) {
    //         const element = categorys[i]
    //         console.log(element);
    //     }
    // }

    if (products.length > 1) {
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            console.log(element);
        }
    }
    
    
    return(
    <div>
        <ItemList products={products}/>
    </div>
        
    )
}

export default ItemListContainer;