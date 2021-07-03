import React, {useState, createContext} from 'react'
import uniqid from "uniqid";



export const ItemContext = createContext("undefined");

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
