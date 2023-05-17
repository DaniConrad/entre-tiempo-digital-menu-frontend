import React from "react";
import { SubItemBurger } from "../subItem/SubItemBurger";

const ItemDesserts = ({items}) => {

    return(
        <div>
            <div>
                <h2 className="text-light text-center">Postres</h2>
                {items.filter(item => item.subCategory === "Helados" || "Varios").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemDesserts;