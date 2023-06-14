import React from "react";
import { SubItem } from "../subItem/SubItem";

const ItemEmpanadas = ({items}) => {
    
    return(
        <div>
            <div>
                {/* <h2 className="text-light text-center">Title</h2> */}
                {items.filter(item => item.subCategory === "Variedad").map(item => <SubItem item={item} key={item.name}/>)}
            </div>
        </div>    
    )}

export default ItemEmpanadas;