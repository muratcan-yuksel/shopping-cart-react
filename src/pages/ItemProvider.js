import React, {useState, createContext} from 'react'

export const ItemContext = createContext();

export function ItemProvider (props) {
    const [items, setItems]= useState([])
    return (
        <div>
            <ItemContext.Provider>
                {props.children}
            </ItemContext.Provider>
            
        </div>
    )
}
