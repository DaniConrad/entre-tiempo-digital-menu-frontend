import React from "react";
import { SubItem } from "../subItem/SubItem";

const ItemDrinks = ({items}) => {

    return(
        <div>
            <div>
                <h2 className="text-light text-center">Cervezas</h2>
                {items.filter(item => item.subCategory === "Cervezas").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
            <div>
                <h2 className="text-light text-center">Sin Alcohol</h2>
                {items.filter(item => item.subCategory === "Gaseosas").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
            <div>
                <h2 className="text-light text-center">Latas</h2>
                {items.filter(item => item.subCategory === "Panes").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemDrinks;