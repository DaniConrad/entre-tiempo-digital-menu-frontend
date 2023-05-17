import React from "react";
import { SubItemBurger } from "../subItem/SubItemBurger";

const ItemAppetizer = ({items}) => {

    return(
        <div>
            <div>
                <h2 className="text-light text-center">Tapeos</h2>
                {items.filter(item => item.subCategory === "Tapeo").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemAppetizer;