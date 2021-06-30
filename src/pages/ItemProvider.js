import React, {useState, createContext} from 'react'



export const ItemContext = createContext();

export const ItemProvider= (props) => {
    const [items, setItems]= useState(["lo"])
    console.log(items)
    return (
        <div>
            <ItemContext.Provider value= {[items, setItems]}>
            {props.children}
            </ItemContext.Provider>
            
        </div>
    )
}
