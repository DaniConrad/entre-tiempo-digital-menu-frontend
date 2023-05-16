import React from "react";

const ItemCookedPlate = ({product}) => {
    if (product.price <= 1) {
        return null
    }
    return(
        <div className="d-flex flex-row justify-content-between">
            <h2 className="text-light">{product.name}</h2>
            <h2 className="text-light">${product.price}</h2>
        </div>
            
    )}

export default ItemCookedPlate;