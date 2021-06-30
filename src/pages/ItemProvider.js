import React, {useState, createContext} from 'react'



export const ItemContext = createContext();

export const ItemProvider= (props) => {
    const [items, setItems]= useState([ {name: "harry potter", price: "$10", id:12873512631},
    {name: "silence of the lambs", price:"$10", id:89638725472834},
    {name:"inception", price:"10", id:12736124351623}])
    return (
        <div>
            <ItemContext.Provider value= {[items, setItems]}>
            {props.children}
            </ItemContext.Provider>
            
        </div>
    )
}
