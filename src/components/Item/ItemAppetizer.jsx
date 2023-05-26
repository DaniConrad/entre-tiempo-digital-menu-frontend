import React from "react";
import { SubItem } from "../subItem/SubItem";

const ItemAppetizer = ({items}) => {

    return(
        <div>
            <div>
                <h2 className="text-light text-center">Tapeos</h2>
                {items.filter(item => item.subCategory === "Tapeo").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemAppetizer;