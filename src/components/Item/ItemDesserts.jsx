import React from "react";
import { SubItem } from "../subItem/SubItem";

const ItemDesserts = ({items}) => {

    return(
        <div>
            <div>
                <h2 className="text-light text-center">Postres</h2>
                {items.filter(item => item.subCategory === "Helados" || "Varios").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemDesserts;