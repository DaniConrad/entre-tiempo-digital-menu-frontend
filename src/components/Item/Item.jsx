import React from "react";
import { SubItem } from "../subItem/SubItem";

const Item = ({items, subData}) => {

    return(
        <div>
                { 
                    subData.map(sub => 
                        <div key={ sub.subTitle || Math.random()}>
                            <h2 className="text-light text-center">{ sub.subTitle }</h2>
                            {items.filter(item => item.subCategory === sub.subCategory).map(item => <SubItem item={item} key={item.name}/>)}
                        </div>
                    )  
                }
        </div>    
    )}

export default Item;