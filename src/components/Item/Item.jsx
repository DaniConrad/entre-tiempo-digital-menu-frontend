import React from "react";

const Item = ({product}) =>{

    return(
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
            
    )}

export default Item;