import React from "react";
import { SubItemBurger } from "../subItem/SubItemBurger";

const ItemCookedPlate = ({items}) => {

    return(
        <div>
            <div>
                {items.filter(item => item.subCategory === "variedad").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
            <div>
                {items.filter(item => item.subCategory === "Milanesas").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
            <div>
                {items.filter(item => item.subCategory === "Wook").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
        </div>    
            
    )}

export default ItemCookedPlate;