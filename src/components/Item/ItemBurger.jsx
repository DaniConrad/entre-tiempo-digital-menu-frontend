import React from "react";
import { SubItemBurger } from "../subItem/SubItemBurger";

const ItemBurger = ({items}) => {

    return(
        <div>
            <div>
                <h2 className="text-light text-center">Medallón</h2>
                {items.filter(item => item.subCategory === "Carnes").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
            <div>
                <h2 className="text-light text-center">Adicionales</h2>
                {items.filter(item => item.subCategory === "Complemento").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
            <div>
                <h2 className="text-light text-center">Pan</h2>
                {items.filter(item => item.subCategory === "Panes").map(item => <SubItemBurger item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemBurger;