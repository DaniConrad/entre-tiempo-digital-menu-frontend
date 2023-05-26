import React from "react";
import { SubItem } from "../subItem/SubItem";

const ItemCookedPlate = ({items}) => {

    return(
        <div>
            <div>
                {items.filter(item => item.subCategory === "variedad").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
            <div>
                {items.filter(item => item.subCategory === "Milanesas").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
            <div>
                {items.filter(item => item.subCategory === "Wook").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
        </div>    
            
    )}

export default ItemCookedPlate;