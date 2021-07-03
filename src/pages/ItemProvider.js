import React, {useState, createContext} from 'react'
import uniqid from "uniqid";


//if I don't give this [0] in the context, I get an error bcs of Cart.js
export const ItemContext = createContext([0]);

export const ItemProvider= (props) => {
    const [items, setItems]= useState([])
    console.log(items)
    return (
       
        <div>
            { items.map((item=>{
            item.id= uniqid()
        }))}
            <ItemContext.Provider value= {[items, setItems]}>
            {props.children}
            </ItemContext.Provider>
            
        </div>
    )
}
