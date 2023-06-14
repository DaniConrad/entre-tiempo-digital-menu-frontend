import React from "react";
import { SubItem } from "../subItem/SubItem";

const ItemPizza = ({items}) => {

    console.log(items);
    return(
        <div>
            <div>
                <h2 className="text-light text-center">Cervezas</h2>
                {items.filter(item => item.size === "Grande").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemPizza;